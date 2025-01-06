import { gql, useMutation } from "@apollo/client";

const addProjectgql = gql`
  mutation AddNewProject($input: newProjectInput) {
    AddProject(input: $input) {
      id
      clientId
      name
      description
      status
    }
  }
`;

const useCreateProjectMutation = () => {
    const [AddProject, { loading, error }] = useMutation(addProjectgql, {
      refetchQueries: ["GetProjects"],
    });

    const addNewProjectHandler = async (input) => {
      try {
        const response = await AddProject({ variables: { input }})
        return response.data;
      } catch (error) {
        console.log(`Error: ${error}`);
      };
    };

    return { AddProject: addNewProjectHandler, loading, error };
};

export default useCreateProjectMutation;