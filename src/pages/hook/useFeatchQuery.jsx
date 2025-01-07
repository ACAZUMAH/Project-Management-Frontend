import { gql, useQuery } from "@apollo/client";

const getProjectGql = gql`
  query GetProject($projectId: ID!) {
    Project(projectId: $projectId) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

const useFetchProject = (projectId) => {
    const { data, loading, error } = useQuery(getProjectGql, {
        variables: { projectId },
        fetchPolicy: "network-only",
        notifyOnNetworkStatusChange: true
    });

    const project = data?.Project;
    const client = data?.Project?.client;

    return { project, client, loading, error };
};

export default useFetchProject;