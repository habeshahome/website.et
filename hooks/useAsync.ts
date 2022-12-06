import { useEffect, useState } from 'react'

export default function useAsync (callback: any, depencedinces: any = []): any {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [value, setValue] = useState('')

  useEffect(() => {
    setLoading(true)
    setError('')
    setValue('')
  }, [loading, error, value])
}
