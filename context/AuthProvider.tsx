import React, { useState, createContext, useEffect } from 'react'

interface AuthPropType {
  children: React.ReactNode
}

const AuthContext =
  createContext<{
    auth: any
    setAuth: Function
    isLoggedIn: boolean
    setIsLoggedIn: Function
  }>({
    auth: null,
    setAuth: () => {},
    isLoggedIn: false,
    setIsLoggedIn: Function
  })

export const AuthProvider = ({ children }: AuthPropType): JSX.Element => {
  const [auth, setAuth] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    console.log('AuthProvider')
    console.log(auth)
    console.log(isLoggedIn)
  }, [auth, isLoggedIn])

  return (
    <AuthContext.Provider value={{ auth, setAuth, isLoggedIn, setIsLoggedIn }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext
