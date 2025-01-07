import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useDeleteProjectMutation from './hooks/useDeleteProjectMutation';

const DeleteProjectButton = (props) => {

  const navigate = useNavigate();

  const { deleteProject } = useDeleteProjectMutation(navigate);

  const deleteHandler = async () => {
    await deleteProject(props.projectId);
  };

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={deleteHandler}>
        <FaTrash className='icon' /> Delete Project
      </button>
    </div>
  )
}

export default DeleteProjectButton;