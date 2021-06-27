import {gql} from '@apollo/client';

export const GET_WEATHER_INFO = gql`
  query getCityById($id: [String!], $config: ConfigInput) {
    getCityById(id: $id, config: $config) {
      id
      name
      weather {
        summary {
          icon
          title
        }
        temperature {
          actual
        }
      }
    }
  }
`;
