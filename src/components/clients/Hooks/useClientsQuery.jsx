import { gql, useQuery } from "@apollo/client";

export const getClientsgql = gql`
  query GetClients {
    Clients {
      id
      name
      email
      phone
    }
  }
`;

const useClientsQuery = () => {
  const { data, ...result } = useQuery(getClientsgql, {
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true
  })
  const clients = data?.Clients;
  return { clients, ...result }
}

export default useClientsQuery;