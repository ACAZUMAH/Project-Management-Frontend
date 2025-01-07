import React, { useState } from "react";
import useUpdateProjectMutation from "./hooks/useUpdateProjectMutaion";

const UpdateProjectForm = (props) => {
  const [name, setName] = useState(props.project.name);
  const [description, setDescription] = useState(props.project.description);
  const [status, setStatus] = useState("Not_Started");
  const { updateProject } = useUpdateProjectMutation();
  
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
    event.preventDefault();
    if(!name || !description || !status) return;
    await updateProject({ projectId: props.project.id, name, description, status });
  };

  return (
    <div className="mt-5">
      <h5>Update Project</h5>
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
        <button type="submit" className="btn btn-primary">
            Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProjectForm;
