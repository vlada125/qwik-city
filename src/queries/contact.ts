import { gql } from 'graphql-request';

export const FETCH_CONTACT_PAGE_QUERY = gql`
{
    contact {
      data {
        id
        attributes {
          title
          slug
          byline
          submit
          details
          photo {
            data {
              attributes {
                formats
              }
            }
          }
          images {
            thumbnail {
              data {
                attributes {
                  formats
                }
              }
            }
            banner {
              data {
                attributes {
                  formats
                }
              }
            }
          }
        }
      }
    }
  }
`;
