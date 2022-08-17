import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { setContext } from '@apollo/client/link/context'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'

const graphqlEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_HOST}`

function MyApp({ Component, pageProps }: AppProps) {
  const token = process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  const httpLink = createHttpLink({
    uri: graphqlEndpoint,
  })

  const client = new ApolloClient({
    uri: graphqlEndpoint,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
