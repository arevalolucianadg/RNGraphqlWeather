import { gql } from '@apollo/client';

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

export const GET_WEATHER_DETAIL = gql`
  query getCityById($id: [String!], $config: ConfigInput) {
    getCityById(id: $id, config: $config) {
      id
      name
      country
      weather {
        summary {
          title
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;

export const GET_CITY_BY_NAME = gql`
  query getCityByName($name: String!, $config: ConfigInput) {
    getCityByName(name: $name, config: $config) {
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
