import { gql } from 'graphql-request';

export const FETCH_PAGES_QUERY = gql`
{
    pages {
      data {
        id
        attributes {
          title
          content
          slug
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

export const FETCH_HOME_PAGE_QUERY = gql`
{
    homepage {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;
