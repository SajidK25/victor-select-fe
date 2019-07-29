import ApolloClient from 'apollo-client'
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from 'apollo-link-http'
import { endpoint } from './config'
// import { LOCAL_STATE_QUERY } from '../components/Cart'


const client = new ApolloClient({
  link: createHttpLink({ uri: endpoint, credentials: 'include'}),
  cache: new InMemoryCache(),
  clientState: {
     resolvers: {
       Mutation: {
        // toggleCart(_, variables, { cache }) {
        //   // read the cartOpen value from the cache
        //   const { cartOpen } = cache.readQuery({
        //     query: LOCAL_STATE_QUERY
        //   })
        //   // Write the cart State to the opposite
        //   const data = {
        //     data: { cartOpen: !cartOpen }
        //   }
        //   cache.writeData(data)
        //   return data
        // }
      }
    },
    defaults: {
      cartOpen: false
    }
  }
})

export default client
