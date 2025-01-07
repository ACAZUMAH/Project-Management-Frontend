import React from 'react'
import ClientRow from './client-row'
import useClientsQuery from './Hooks/useClientsQuery'
import Spinner from '../Ui/spinner'

const Clients = () => {
    const { clients, loading, error } = useClientsQuery();

   if(loading) return <Spinner />

   if(error) return <p>something went wrong</p>
  return (
    <React.Fragment>
        {
            !loading && !error && (
                <table className='table table-hover mt-3'>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(client => (
                            <ClientRow key={client.id} client={client} />
                        ))}
                    </tbody>
                </table>
            )
        }
    </React.Fragment>
  )
}

export default Clients