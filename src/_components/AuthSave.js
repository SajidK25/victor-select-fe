import React, { Component } from 'react'
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

class Auth extends Component {
  state = {
    authenticated: false,
    user: {
      role: 'visitor'
    },
    accessToken: ''
  }

  initiateLogin = () => {
    auth.authorize()
  }

  logout = () => {
    this.setState({
      authenticated: false,
      user: {
        role: 'visitor'
      },
      accessToken: ''
    })
  }

  handleAuthentication = () => {
    auth.parseHash((error, authResult) => {
      if (error) {
        console.log(error)
        console.log(`Error ${error.error} occured`)
        return
      }

      this.setSession(authResult.idTokenPayload)
    })
  }

  setSession(authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
      )
      localStorage.setItem('access_token', authResult.accessToken)
      localStorage.setItem('id_token', authResult.idToken)
      localStorage.setItem('expires_at', expiresAt)
      const data = {
        status: `success`,
        accessToken: authResult.accessToken,
        idToken: authResult.idToken,
        expiresAt
      }
      this.signinOrCreateAccount({ ...data })
      this.cb(data)
    }

    const user = {
      id: data.sub,
      email: data.email,
      role: data[AUTH_CONFIG.roleUrl]
    }
    this.setState({
      authenticated: true,
      accessToken: data.accessToken,
      user
    })
  }

  render() {
    const authProviderValue = {
      ...this.state,
      initiateLogin: this.initiateLogin,
      handleAuthentication: this.handleAuthentication,
      logout: this.logout
    }
    return (
      <AuthProvider value={authProviderValue}>
        {this.props.children}
      </AuthProvider>
    )
  }
}

export default Auth
