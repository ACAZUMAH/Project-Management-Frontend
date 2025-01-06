import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{props.project.name}</h5>
            <a className="btn btn-light" href={`./project/${props.project.id}`}>View</a>
          </div>
          <p className="smal">
            status: <strong>{props.project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
