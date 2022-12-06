import { useState, useEffect } from 'react'

export default function useLocalStorage (key: string = 'key', init: any = ''): [any, any] {
  const [value, setValue] = useState(() => {
    // using useState callback to get localstorage value only when it loads. (bc it's expensive exec.)
    return getStoredValue(key, init)
  })

  useEffect(() => {
    // setting data to local storage
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}

// retriving data from localstorage
function getStoredValue (key: string, init: any): any {
  if (key.length > 0 && typeof window !== 'undefined') {
    let storedData = localStorage.getItem(key)
    if (storedData !== null) storedData = JSON.parse(storedData)
    return storedData
  }

  if (init instanceof Function) return init()
  return init
}
