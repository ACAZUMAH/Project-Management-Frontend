import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetchProject from "./hook/useFeatchQuery";
import Spinner from "../components/Ui/spinner";
import ClientInfo from "../components/clients/clientInfo";
import DeleteProjectButton from "../components/projects/deleteProjectBtn";
import UpdateProjectForm from "../components/projects/updateProjectForm";

const Project = () => {
  const { id } = useParams();

  const { project, client, loading, error } = useFetchProject(id);

  if (loading) return <Spinner />;

  if (error) return <p>Something went wrong...</p>;

  return (
    <React.Fragment>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link
            to="/"
            className="btn btn-light btn-small w-25 d-inline ms-auto"
          >
            Back
          </Link>
          <h2>{ project.name }</h2>
          <p>{ project.description }</p>
          <h5 className="mt-2">Project status</h5>
          <p className="lead">{ project.status }</p>
          <ClientInfo client={client}/>
          <UpdateProjectForm project={project}/>
          <DeleteProjectButton projectId={id}/>
        </div>
      )}
    </React.Fragment>
  );
};

export default Project;
