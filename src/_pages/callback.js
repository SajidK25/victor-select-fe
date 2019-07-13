import React from 'react'
import { Redirect } from 'react-router-dom'

import { AuthConsumer } from '../Auth/authContext'

const Callback = props => (
  <AuthConsumer>
    {({ handleAuthentication }) => {
      if (/access_token|id_token|error/.test(props.location.hash)) {
        handleAuthentication()
      }
      return <Redirect to="/edstart" />
    }}
  </AuthConsumer>
)

export default Callback
