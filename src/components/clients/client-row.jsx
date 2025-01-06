import { FaTrash } from "react-icons/fa";
import useDeleteClientMutaion from "./Hooks/useDeleteClientMutation";
//import Spinner from "./spinner";

const ClientRow = (props) => {
  const { deleteClient } = useDeleteClientMutaion();

  const onHandleDelete = async () => {
    try {
      await deleteClient(props.client.id);
    } catch (error) {
      console.log(`error: ${error}`)
    };
  };

  //if(loading) return <Spinner />;

  return (
    <tr>
      <td>{props.client.name}</td>
      <td>{props.client.email}</td>
      <td>{props.client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={onHandleDelete}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
