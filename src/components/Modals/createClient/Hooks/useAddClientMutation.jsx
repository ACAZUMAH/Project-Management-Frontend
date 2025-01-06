import { gql, useMutation } from "@apollo/client";

const addClientGql = gql`
  mutation AddClient($input: newClientInput) {
    AddClient(input: $input) {
      id
      name
      email
      phone
    }
  }
`;

const useAddClientMutation = () => {
    const [addClientMutation, { loading, error }] = useMutation(addClientGql, {
      refetchQueries: ["GetClients"],
    });

    const addClientHandler = async (input) => {
        try {
            const response = await addClientMutation({
              variables: { input: input },
            });
            return response.data;
        } catch (error) {
            console.log(`error: ${error}`);
        };
    };

    return { addClient: addClientHandler, loading, error };
};

export default useAddClientMutation;