
import { useFetch } from '../Hooks/useFetch'

export const UsersComponent = () => {

  const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <>
      <h1>Listado Usuarios:</h1>
      <hr />
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>

          {data.map(user => {
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          })}


        </tbody>
      </table>
    </>
  )
}
