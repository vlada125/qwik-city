import { gql } from 'graphql-request';


export const FETCH_GLOBAL_QUERY = gql`
{
    global {
      data {
        id
        attributes {
          title
          footer
        }
      }
    }
  }
`;


export const FETCH_CONTACT_BUBBLES_QUERY = gql`
{
    contactBubbles {
      data {
        id
        attributes {
          title
          link
          icon
        }
      }
    }
  }
`;
