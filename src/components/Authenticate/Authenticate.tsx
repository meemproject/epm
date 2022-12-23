import log from '@kengoldfarb/log'
import {
	createStyles,
	Text,
	Button,
	Space,
	Container,
	Loader
} from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { useAuth, useSDK, useWallet } from '@meemproject/react'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

const MAuthenticate: React.FC = () => {
	const wallet = useWallet()
	const router = useRouter()
	const { login } = useSDK()
	const { chainId } = useAuth()

	const useStyles = createStyles(theme => ({
		buttonSaveChanges: {
			marginTop: 48,
			marginBottom: 48,

			backgroundColor: 'black',
			'&:hover': {
				backgroundColor: theme.colors.gray[8]
			},
			borderRadius: 24
		},
		authHeader: {
			fontSize: 24,
			fontWeight: 600,
			marginTop: 60
		},
		authSubHeader: {
			fontSize: 20,
			fontWeight: 600,
			marginTop: 16
		},
		loader: {
			marginTop: 48
		}
	}))

	const [isConnected, setIsConnected] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const { classes } = useStyles()

	useEffect(() => {
		setIsConnected(wallet.isConnected)
	}, [wallet.isConnected])

	const doLogin = useCallback(async () => {
		log.info('Logging in to Meem...')
		log.debug(`address = ${wallet.accounts[0]}`)

		if (wallet.accounts[0] && chainId && wallet.signer) {
			try {
				setIsLoading(true)

				await login({
					chainId,
					message:
						'Welcome to EPM! Please sign this message to authenticate.',
					signer: wallet.signer,
					uri: window.location.href
				})

				router.push({
					pathname: router.query.r ? (router.query.r as string) : '/',
					query: router.query.rq
						? JSON.parse(router.query.rq as string)
						: {}
				})
			} catch (e) {
				log.error(e)
			}
		}
		setIsLoading(false)
	}, [router, wallet, login, chainId])

	const connectWallet = useCallback(async () => {
		setIsLoading(true)
		await wallet.connectWallet()

		if (wallet.accounts[0]) {
			setIsConnected(true)
			setIsLoading(false)
		} else {
			log.debug('Unable to authenticate - wallet address not found.')
			showNotification({
				title: 'Oops!',
				message:
					'Unable to authenticate with your wallet. Please try again.'
			})
		}
	}, [wallet])

	return (
		<Container>
			<Text
				className={classes.authHeader}
			>{`Let's make sure it's really you.`}</Text>
			<div>
				<Text className={classes.authSubHeader}>
					{wallet.isConnected
						? 'Add Your Signature'
						: 'Connect Your Wallet'}
				</Text>
				<Space h={16} />
			</div>

			<div>
				<Text>
					{wallet.isConnected
						? `Let's connect your wallet again.`
						: `Please sign a message to confirm it's really you. The signature request might take a moment
					to pop up - please be patient!`}
				</Text>
			</div>

			{isLoading && <Loader className={classes.loader} />}
			<div>
				{!isLoading && !isConnected && (
					<Button
						className={classes.buttonSaveChanges}
						onClick={connectWallet}
					>
						Connect wallet
					</Button>
				)}
				{!isLoading && isConnected && (
					<Button
						className={classes.buttonSaveChanges}
						onClick={doLogin}
					>
						Add your signature
					</Button>
				)}
			</div>
		</Container>
	)
}

export default MAuthenticate
