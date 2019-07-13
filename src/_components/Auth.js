import React, { useState } from 'react'
import { ApolloConsumer } from 'react-apollo'
import auth0 from 'auth0-js'

import { AUTH_CONFIG } from '../Auth/auth0-variables'
import { AuthProvider } from '../Auth/authContext'

const auth = new auth0.WebAuth({
  domain: AUTH_CONFIG.domain,
  clientID: AUTH_CONFIG.clientId,
  redirectUri: AUTH_CONFIG.callbackUrl,
  audience: `https://${AUTH_CONFIG.domain}/userinfo`,
  responseType: 'token id_token'
})

const Auth = props => {
  const [authState, setAuthState] = useState({
    authenticated: false,
    user: { role: 'visitor' },
    accessToken: ''
  })

  const initiateLogin = () => {
    auth.authorize()
  }

  const logout = () => {
    setAuthState({
      authenticated: false,
      user: {
        role: 'visitor'
      },
      accessToken: ''
    })
  }

  const handleAuthentication = () => {
    auth.parseHash((error, authResult) => {
      if (error) {
        console.log(error)
        console.log(`Error ${error.error} occured`)
        return
      }

      setSession(authResult.idTokenPayload)
    })
  }

  const setSession = data => {
    const user = {
      id: data.sub,
      email: data.email,
      role: data[AUTH_CONFIG.roleUrl]
    }
    setAuthState({
      authenticated: true,
      accessToken: data.accessToken,
      user
    })
  }

  const authProviderValue = {
    ...authState,
    initiateLogin: initiateLogin,
    handleAuthentication: handleAuthentication,
    logout: logout
  }
  return <AuthProvider value={authProviderValue}>{props.children}</AuthProvider>
}

export default Auth
