import { LoginState, useWallet } from '@meemproject/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export interface IProps {
	children: React.ReactNode
}

export const App: React.FC<IProps> = ({ children }) => {
	const { isConnected, loginState, connectWallet } = useWallet()
	const router = useRouter()

	useEffect(() => {
		const isLoggedOutUrl =
			typeof window !== 'undefined' &&
			['/', '/authenticate'].includes(window.location.pathname)

		if (!isLoggedOutUrl && loginState === LoginState.NotLoggedIn) {
			router.push({
				pathname: '/authenticate',
				query: {
					r: window.location.pathname,
					rq: JSON.stringify(router.query)
				}
			})
		}
	}, [loginState, router, isConnected, connectWallet])

	return (
		<>
			{children}
			{/* {isWalletConnectRequired && (
				<Modal
					opened={isWalletConnectRequired}
					onClose={() => {}}
				>

				</Modal>
			)} */}
		</>
	)
}
