import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import useAddClientMutation from "./Hooks/useAddClientMutation";
//import Spinner from "../../clients/spinner";

const AddClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { addClient } = useAddClientMutation();

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const changePhoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const submitHandler = async (event) => {
    try {
        event.preventDefault();
        if(name === '' || email === '' || phone === '' ){
            return alert('Please fill in all the fields!')
        }
        await addClient({ name, email, phone });
        setName('');
        setEmail('');
        setPhone('');
    } catch (error) {
        console.log(`error: ${error}`);
    };
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#addClientModal"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>New Client</div>
        </div>
      </button>
      <div
        className="modal fade"
        id="addClientModal"
        aria-labelledby="addClientModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addClientModalLabel">
                Add Client
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
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Email"
                    value={email}
                    onChange={changeEmailHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={phone}
                    onChange={changePhoneHandler}
                  />
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary"
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

export default AddClient;
