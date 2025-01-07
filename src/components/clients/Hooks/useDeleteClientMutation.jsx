import { gql, useMutation } from "@apollo/client";

const deleteClientGql = gql`
    mutation DeleteClient($clientId: ID!) {
        DeleteClient(clientId: $clientId) {
            id
            name
            email
            phone
        }
    }
`;

const useDeleteClientMutaion = () => {
    const [deleteClientMutaion, { loading, error }] = useMutation(
      deleteClientGql,
      {
        refetchQueries: ["GetClients", "GetProjects"],
      }
    );

    const deleClientHandler = async (id) => {
        try {
            const response = await deleteClientMutaion({
              variables: { clientId: id },
            });
            return response.data;
        } catch (err) {
            console.log(`error: ${err.message}`)
        };
    };
    return { deleteClient: deleClientHandler, loading, error };
};

export default useDeleteClientMutaion;