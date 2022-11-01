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
import { MeemAPI, makeFetcher, makeRequest } from '@meemproject/api'
import { useWallet } from '@meemproject/react'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

const MAuthenticate: React.FC = () => {
	const wallet = useWallet()
	const router = useRouter()

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

	const getNonceFetcher = makeFetcher<
		MeemAPI.v1.GetNonce.IQueryParams,
		MeemAPI.v1.GetNonce.IRequestBody,
		MeemAPI.v1.GetNonce.IResponseBody
	>({
		method: MeemAPI.v1.GetNonce.method
	})

	useEffect(() => {
		setIsConnected(wallet.isConnected)
	}, [wallet.isConnected])

	const login = useCallback(
		async (walletSig: string) => {
			log.info('Logging in to Meem...')
			log.debug(`address = ${wallet.accounts[0]}`)
			log.debug(`sig = ${walletSig}`)

			if (wallet.accounts[0] && walletSig) {
				try {
					setIsLoading(true)

					const loginRequest =
						await makeRequest<MeemAPI.v1.Login.IDefinition>(
							MeemAPI.v1.Login.path(),
							{
								method: MeemAPI.v1.Login.method,
								body: {
									address: wallet.accounts[0],
									signature: walletSig
								}
							}
						)

					log.debug(`logged in successfully.`)

					wallet.setJwt(loginRequest.jwt)
					log.debug(loginRequest.jwt)
					log.debug(`saved JWT token as cookie.`)

					router.push({
						pathname: router.query.r
							? (router.query.r as string)
							: '/',
						query: router.query.rq
							? JSON.parse(router.query.rq as string)
							: {}
					})
				} catch (e) {
					log.error(e)
				}
			}
			setIsLoading(false)
		},
		[router, wallet]
	)

	const sign = useCallback(async () => {
		setIsLoading(true)

		try {
			const { nonce } = await getNonceFetcher(
				MeemAPI.v1.GetNonce.path(),
				{
					address: wallet.accounts[0]
				}
			)
			log.debug('got nonce')
			const signature = await wallet.signer?.signMessage(nonce)
			log.debug({ signature })

			if (signature === undefined) {
				log.debug('Unable to authenticate - signature is undefined.')
				showNotification({
					title: 'Oops!',
					message:
						'Unable to authenticate with your wallet. Please try again.'
				})
				setIsLoading(false)
			} else {
				login(signature)
			}
		} catch (e) {
			showNotification({
				title: 'Oops!',
				message:
					'Unable to authenticate with your wallet. Please get in touch!'
			})
			setIsLoading(false)
			log.crit(e)
		}
	}, [getNonceFetcher, login, wallet.signer, wallet.accounts])

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
						onClick={sign}
					>
						Add your signature
					</Button>
				)}
			</div>
		</Container>
	)
}

export default MAuthenticate
