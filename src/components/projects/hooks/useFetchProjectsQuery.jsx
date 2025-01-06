import { gql, useQuery } from "@apollo/client";

const getProjectsGql = gql`
  query GetProjects {
    Projects {
      id
      name
      status
    }
  }
`;

const useFetchProjects = () => {
    const { data, ...result } = useQuery(getProjectsGql,{
        fetchPolicy: "network-only",
        notifyOnNetworkStatusChange: true
    });
    const projects = data?.Projects;
    return { projects, ...result };
};

export default useFetchProjects;