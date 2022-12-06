import { useState, useEffect } from 'react'

export default function useActivityLogger (): void {
  const [log, setLog] = useState('')

  useEffect(() => {
    setLog('')
  }, [log])
}
