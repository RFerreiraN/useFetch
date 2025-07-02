import {useEffect, useState} from 'react'

export const UsersComponent = () => {

  const [Users, setUsers] = useState()

  const fetchUsers = async() => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json()
      setUsers(data)
      console.log(Users)
    } catch (error) {
      console.error( error )
    }
  }

  useEffect(() => {
      fetchUsers()
  }, [])

  return (
    <>
      <h1>Listado de Usuarios:</h1>
      <hr />

    </>
  )
}
