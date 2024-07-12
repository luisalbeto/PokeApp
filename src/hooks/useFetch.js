import { useState, useEffect } from "react"

export const useFetch = (url) => {

  const [state, setState ] = useState({
    data:null,
    isLoading: true,
    hasError: false,
    error: null
  })

  useEffect(() => {
    getFetch()


    
  }, [url]);

  const setLoadingState = () => {
    setState({
      data:null,
      isLoading: true,
      hasError: false,
      error: null,
    })
  }

  const getFetch = async() => {

    setLoadingState()

    const res = await fetch(url)


    if( !res.ok) {
      setState({
        data:null,
        isLoading: false,
        hasError: true,
        error: {
          code: res.status,
          message: res.statusText,
        }
      })
      return

    }




    const data = await res.json()

    setState({
      data:data,
      isLoading: false,
      hasError: false,
      error: null
    })
 
   }

  return{
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,

  }
}