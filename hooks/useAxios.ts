// custom hook
import { useState, useEffect } from 'react'
import axios from '../@config/axios'

export default function useAxios (url: string): any {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    axios.get(url)
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  }, [url])

  return { data, isLoading, error }
}
