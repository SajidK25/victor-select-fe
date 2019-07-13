import React from 'react'
import Button from '@material-ui/core/Button'
import LockIcon from '@material-ui/icons/Lock'
import { AuthConsumer } from '../Auth/authContext'

const Logout = () => (
  <AuthConsumer>
    {({ logout }) => (
      <Button
        variant="outlined"
        color="primary"
        align="center"
        onClick={logout}
      >
        Logout
      </Button>
    )}
  </AuthConsumer>
)

export default Logout
