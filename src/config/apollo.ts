import { ApolloClient, InMemoryCache } from '@apollo/client';

import { API_URL } from '@env';

const cache = new InMemoryCache({
  typePolicies: {
    City: {
      fields: {
        weather: {
          merge: false,
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: API_URL,
  cache,
});

export default client;
