import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Button from '@material-ui/core/Button'
import { CURRENT_USER_QUERY } from './User';

const LOGOUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    logout
  }
`;

const Logout = props => (
  <Mutation mutation={LOGOUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
    {logout => 
      <Button 
        onClick={logout} 
        variant="outlined"
        color="primary"
        align="center">
          Logout
      </Button>}
  </Mutation>
);

export default Logout

