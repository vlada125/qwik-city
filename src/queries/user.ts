import { gql } from 'graphql-request';

export const GET_USER_QUERY = gql`
query GetUser($id: ID!) {
        user(id: $id) {
          id
          data {
            attributes {
              Username
              Email
              Provider
              Password
              ResetPasswordToken
              ConfirmationToken
              Confirmed
              Blocked
              Role
            }
          }
        }
}
`
