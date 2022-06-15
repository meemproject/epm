import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

// Used server and client side - can't use react hooks
export const ssrGraphqlClient = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({
		uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL
	}),
	ssrMode: typeof window === 'undefined'
})
