import { useEffect, useState } from 'react';

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null
  });

  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json()
      setState({
        data: data,
        isLoading: false,
        errors: null
      })
     
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        errors: error
      })
    }

  }

  useEffect(() => {
    if(!url) return
    fetchUsers()
  }, [url])

  return {
    data: state.data,
    isLoading: state.isLoading,
    errors: state.errors
  }
}
