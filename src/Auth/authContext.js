import { createContext } from 'react'

const authContext = createContext({
  authenticated: false, // to check if authenticated or not
  user: {}, // store all the user details
})

export const AuthProvider = authContext.Provider
export const AuthConsumer = authContext.Consumer
