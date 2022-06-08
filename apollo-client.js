import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";


  const client = new ApolloClient({
    uri: 'https://zapata.stepzen.net/api/edgy-ant/__graphql',
    headers: {
        Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`
    },
    cache: new InMemoryCache()
  });

  export default client