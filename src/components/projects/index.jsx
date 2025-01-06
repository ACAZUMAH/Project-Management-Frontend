import Spinner from "../clients/spinner";
import ProjectCard from "./projectCard";
import useFetchProjects from "./hooks/useFetchProjectsQuery";

const Project = () => {
  const{ projects, loading, error } = useFetchProjects();

  if(loading) return <Spinner />;

  if(error) return <p>Something went wrong</p>;

  if(projects.length === 0){
    return <p>No projects</p>
  }

  return (
    <div className="row mt-4">
        {projects.map(project =>
            <ProjectCard key={project.id} project={project} />
        )}
    </div>
  )
}

export default Project;