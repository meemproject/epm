import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	split
} from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import log, { LogLevel } from '@kengoldfarb/log'
import { Global, MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { WalletProvider } from '@meemproject/react'
import { createClient } from 'graphql-ws'
import type { Client } from 'graphql-ws'
import type { AppProps } from 'next/app'
import React from 'react'
import '@fontsource/inter'
import { App } from '../components/App'

function MyApp(props: AppProps) {
	const { Component, pageProps } = props

	const httpLink = new HttpLink({
		uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL
	})

	let wsClient: Client | undefined

	if (typeof window !== 'undefined') {
		log.debug('Creating GQL WS client')
		wsClient = createClient({
			url: process.env.NEXT_PUBLIC_GRAPHQL_API_WS_URL ?? '',
			keepAlive: 10_000,
			lazy: false,
			connectionAckWaitTimeout: 10_000,
			shouldRetry: err => {
				log.crit(err)
				return true
			},
			onNonLazyError: err => {
				log.crit(err)
			}
		})

		wsClient.on('closed', e => {
			log.warn('Websocket: closed', e)
		})
		wsClient.on('connected', () => {
			log.debug('Websocket: connected')
		})
		wsClient.on('connecting', () => {
			log.debug('Websocket: connecting')
		})
		wsClient.on('error', e => {
			log.crit('Websocket: error', e)
		})
		wsClient.on('message', e => {
			log.trace('Websocket: message', e)
		})
		wsClient.on('opened', () => {
			log.debug('Websocket: opened')
		})
		wsClient.on('ping', e => {
			log.trace('Websocket: ping', e)
		})
		wsClient.on('pong', e => {
			log.trace('Websocket: pong', e)
		})
	}

	const wsLink = wsClient ? new GraphQLWsLink(wsClient) : null

	// The split function takes three parameters:
	//
	// * A function that's called for each operation to execute
	// * The Link to use for an operation if the function returns a "truthy" value
	// * The Link to use for an operation if the function returns a "falsy" value
	const splitLink =
		typeof window !== 'undefined' && wsLink != null
			? split(
					({ query }) => {
						const definition = getMainDefinition(query)
						return (
							definition.kind === 'OperationDefinition' &&
							definition.operation === 'subscription'
						)
					},
					wsLink,
					httpLink
			  )
			: httpLink

	const client = new ApolloClient({
		link: splitLink,
		cache: new InMemoryCache(),
		queryDeduplication: true
	})

	React.useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles)
		}
		log.setOptions({
			level:
				(process.env.NEXT_PUBLIC_LOG_LEVEL as LogLevel) ?? LogLevel.Warn
		})
	}, [])

	React.useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles)
		}
		log.setOptions({
			level:
				(process.env.NEXT_PUBLIC_LOG_LEVEL as LogLevel) ?? LogLevel.Warn
		})
	}, [])

	const rpcs: {
		[chainId: string]: string[]
	} = {}

	if (process.env.NEXT_PUBLIC_RINKEBY_RPC_URL) {
		rpcs['4'] = [process.env.NEXT_PUBLIC_RINKEBY_RPC_URL]
	}

	if (process.env.NEXT_PUBLIC_MATIC_RPC_URL) {
		rpcs['137'] = [process.env.NEXT_PUBLIC_MATIC_RPC_URL]
	}

	return (
		// eslint-disable-next-line
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{
				fontFamily: 'Inter, sans-serif',
				spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
				breakpoints: {
					xs: 500,
					sm: 800,
					md: 1000,
					lg: 1200,
					xl: 1400
				},
				colors: {
					brand: [
						'#FAF3F2',
						'#F0D3D0',
						'#ECB2AA',
						'#F18E81',
						'#FF6651',
						'#EA5844',
						'#D44E3C',
						'#B94B3C',
						'#9B4C41',
						'#844B43'
					]
				},
				primaryColor: 'brand'
			}}
		>
			<ApolloProvider client={client}>
				<WalletProvider rpcs={rpcs}>
					<NotificationsProvider>
						<Global
							styles={theme => ({
								a: {
									color: theme.colors.dark,
									'&:hover': {
										opacity: 0.6
									}
								}
							})}
						/>
						<App>
							<Component {...pageProps} />
						</App>
					</NotificationsProvider>
				</WalletProvider>
			</ApolloProvider>
		</MantineProvider>
	)
}
export default MyApp
