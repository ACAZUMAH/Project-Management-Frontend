import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import useCreateProjectMutation from "./hooks/useCreateProjectMutation";
import useClientsQuery from "../../clients/Hooks/useClientsQuery";

const AddNewProject = () => {
  const [clientId, setClientId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Not_Started");

  const { AddProject } = useCreateProjectMutation();
  const { clients, loading, error } = useClientsQuery();

  const changeClientIdHandler = (event) => {
    setClientId(event.target.value);
  };

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  const changeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const changeStatusHandler = (event) => {
    setStatus(event.target.value);
  };

  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      if (name === "" || description === "" || status === "") {
        return alert("Please fill in all the fields!");
      }
      await AddProject({ clientId, name, description, status });
      setClientId("");
      setName("");
      setDescription("");
      setStatus("Not_Started");
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };

  if(error) return <p>something went wrong</p>

  const Clients =
    !loading &&
    !error &&
    clients.map((client) => (
      <option key={client.id} value={client.id}>
        {client.name}
      </option>
    ));

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addProjectModal"
      >
        <div className="d-flex align-items-center">
          <FaList className="icon" />
          <div>New Project</div>
        </div>
      </button>
      <div
        className="modal fade"
        id="addProjectModal"
        aria-labelledby="addProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addProjectModalLabel">
                Add Project
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={changeNameHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={changeDescriptionHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    id="status"
                    className="form-select"
                    value={status}
                    onChange={changeStatusHandler}
                  >
                    <option value="Not_Started">Not_Started</option>
                    <option value="In_Progress">In_Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Clients</label>
                  <select
                    className="form-select"
                    id="clientId"
                    value={clientId}
                    onChange={changeClientIdHandler}
                  >
                    <option value="">select client</option>
                    {Clients}
                  </select>
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddNewProject;
