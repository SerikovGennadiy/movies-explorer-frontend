import React, { createContext, useState, useContext } from 'react'

const LoginContext = createContext()

export const LoginProvider = ({children}) => {
  const [loggedIn, setLoggedId] = useState(false);

  return <LoginContext.Provider value={{ loggedIn, setLoggedId }}>
          {children}
        </LoginContext.Provider>

}

export const useLogin = () => useContext(LoginContext)
