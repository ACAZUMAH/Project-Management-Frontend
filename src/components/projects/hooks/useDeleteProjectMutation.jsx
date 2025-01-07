import { gql, useMutation } from "@apollo/client";

const deleteProjectgql = gql`
  mutation DeleteProject($projectId: ID!) {
    DeleteProject(projectId: $projectId) {
      id
    }
  }
`;

const useDeleteProjectMutation = (navigate) => {
  const [deleteMutation, { loading, error }] = useMutation(deleteProjectgql, {
    onCompleted: () => navigate("/"),
    refetchQueries: ["GetProjects"],
  });
  const deleteProjectHandler = async (projectId) => {
    try {
      const response = await deleteMutation({ variables: { projectId } });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { deleteProject: deleteProjectHandler, loading, error };
};

export default useDeleteProjectMutation;
