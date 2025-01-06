import { Fragment } from "react";
import AddClient from "../Modals/createClient";
import AddNewProject from "../Modals/createProject";
import Project from "../projects";
import Clients from "../clients/clients";

const Home = () => {
  return (
    <Fragment>
      <div className="d-flex gap-3">
        <AddClient />
        <AddNewProject />
      </div>
      <Project />
      <hr />
      <Clients />
    </Fragment>
  );
};

export default Home;
