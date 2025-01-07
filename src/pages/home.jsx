import { Fragment } from "react";
import AddClient from "../components/Modals/createClient/index";
import AddNewProject from "../components/Modals/createProject";
import Projects from "../components/projects/index";
import Clients from "../components/clients/clients";

const Home = () => {
  return (
    <Fragment>
      <div className="d-flex gap-3">
        <AddClient />
        <AddNewProject />
      </div>
      <Projects />
      <hr />
      <Clients />
    </Fragment>
  );
};

export default Home;
