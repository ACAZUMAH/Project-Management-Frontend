import { gql, useMutation } from "@apollo/client";

const updateProjectGql = gql`
  mutation UpdateProject($input: updateProjectInput) {
    UpdateProject(input: $input) {
      id
      name
      description
      status
    }
  }
`;

const useUpdateProjectMutation = () => {
    const [updateProject, { ...result }] = useMutation(updateProjectGql, {
      refetchQueries: ["GetProject"],
    }); 

    const updateProjectHandler = async (input) => {
        try {
            const response = await updateProject({variables: { input }});
            return response.data;
        } catch (error) {
            console.log(error);
        };
    };

    return { updateProject: updateProjectHandler, ...result };
};

export default useUpdateProjectMutation;