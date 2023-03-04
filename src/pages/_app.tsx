import log, { LogLevel } from '@kengoldfarb/log'
import { Global, MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { MeemProvider } from '@meemproject/react'
import type { AppProps } from 'next/app'
import React from 'react'
import ReactGA from 'react-ga4'
import '@fontsource/inter'
import { App } from '../components/App'

function MyApp(props: AppProps) {
	const { Component, pageProps } = props

	React.useEffect(() => {
		if (process.env.NEXT_PUBLIC_GA_ID) {
			ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID)
		} else {
			log.warn('No Google Analytics ID found. Skipping initialization.')
		}
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
				// colorScheme: 'dark',
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
			<MeemProvider
				magicApiKey={process.env.NEXT_PUBLIC_MAGIC_API_KEY ?? ''}
				sdk={{
					isGunEnabled: false
				}}
			>
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
			</MeemProvider>
		</MantineProvider>
	)
}
export default MyApp
