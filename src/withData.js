import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { endpoint } from './config'
// import { LOCAL_STATE_QUERY } from '../components/Cart'

const httpLink = new HttpLink({ uri: endpoint })

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('access_token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ``
    }
  }
})

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache()
})

// const client = new ApolloClient({
//   uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
//   // uri: prodEndpoint,
//   request: operation => {
//     operation.setContext({
//       fetchOptions: {
//         credentials: 'include'
//       }
//     })
//   },
//   // Local data
//   clientState: {
//     resolvers: {
//       Mutation: {
//         // toggleCart(_, variables, { cache }) {
//         //   // read the cartOpen value from the cache
//         //   const { cartOpen } = cache.readQuery({
//         //     query: LOCAL_STATE_QUERY
//         //   })
//         //   // Write the cart State to the opposite
//         //   const data = {
//         //     data: { cartOpen: !cartOpen }
//         //   }
//         //   cache.writeData(data)
//         //   return data
//         // }
//       }
//     },
//     defaults: {
//       cartOpen: false
//     }
//   }
// })

export default client
