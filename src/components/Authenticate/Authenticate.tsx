import log from '@kengoldfarb/log'
import {
	Text,
	Button,
	Space,
	Container,
	Loader,
	Center,
	createStyles
} from '@mantine/core'
import { LoginForm, useAuth, useSDK } from '@meemproject/react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import { showErrorNotification } from '../../utils/notifications'

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
	},
	centered: {}
}))

const MAuthenticate: React.FC = () => {
	const wallet = useAuth()
	const router = useRouter()
	const { login } = useSDK()

	const styles = useStyles()

	const [isLoading, setIsLoading] = useState(false)
	const sign = useCallback(async () => {
		setIsLoading(true)

		try {
			if (wallet.signer && wallet.chainId) {
				await login({
					message: process.env.NEXT_PUBLIC_LOGIN_MESSAGE ?? '',
					signer: wallet.signer,
					chainId: wallet.chainId,
					uri: window.location.href
				})

				Cookies.set('redirectPath', JSON.stringify(router.asPath ?? ''))

				if (router.query.return) {
					router.push({
						pathname: router.query.return.toString()
					})
				} else {
					router.push({
						pathname: '/'
					})
				}
			}
		} catch (e) {
			setIsLoading(false)
			showErrorNotification(
				'Oops!',
				'Unable to sign into Meem with your wallet. Contact us using the top-right link on this page.'
			)
			log.crit(e)
		}
	}, [wallet, router, login])

	return (
		<Center>
			<Container>
				<div className={styles.centered}>
					<Space h={80} />
					<Text
						className={styles.tLargeBold}
					>{`Sign in with Meem`}</Text>
					<Space h={16} />

					<div>
						<Text>
							{wallet.isConnected
								? `Please sign the message below.`
								: `Connect with your wallet or email address.`}
						</Text>
					</div>

					<Space h={40} />

					{isLoading && <Loader variant="oval" color={'cyan'} />}
					<div>
						{!isLoading && !wallet.isConnected && <LoginForm />}
						{!isLoading && wallet.isConnected && (
							<Button
								className={styles.buttonBlack}
								onClick={sign}
							>
								Sign Message
							</Button>
						)}
					</div>
				</div>
			</Container>
		</Center>
	)
}

export default MAuthenticate
