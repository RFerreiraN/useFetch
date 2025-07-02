import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [State, setState] = useState({
    data : null,
    isLoading : true,
    errors : null
  })

  const { data, isLoading, errors } = State
  
  const fetchUsers = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setState({
        data : data,
        isLoading : false,
        errors : null
      })
      console.log(data)
    } catch (error) {
      setState({
        data: null,
        isLoading : false,
        errors : error
      })
    }

  }

  useEffect(() => {
    if(!url) return
    fetchUsers()
  }, [url])

  return {
    data,
    isLoading,
    errors
  }
}
