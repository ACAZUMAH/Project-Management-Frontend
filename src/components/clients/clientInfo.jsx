import React from 'react';
import { FaIdBadge, FaPhone, FaEnvelope } from 'react-icons/fa';

const ClientInfo = (props) => {
  return (
    <React.Fragment>
        <h5 className='mt-4'> Client Information</h5>
        <ul className='list-group'>
            <li className='list-group-item'>
                <FaIdBadge className='icon' />{props.client.name}
            </li>
            <li className='list-group-item'>
                <FaEnvelope className='icon' />{props.client.email}
            </li>
            <li className='list-group-item'>
                <FaPhone className='icon' />{props.client.phone}
            </li>
        </ul>
    </React.Fragment>
  )
}

export default ClientInfo