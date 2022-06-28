import { Modal } from '@mantine/core'
import { LoginState, useWallet } from '@meemproject/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

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

		// console.log({
		// 	isLoggedOutUrl,
		// 	isConnected
		// })

		// if (!isLoggedOutUrl && !isConnected) {
		// 	console.log('CONNECT WALLET!!!')
		// 	setTimeout(() => {
		// 		connectWallet()
		// 	}, 700)
		// }

		if (!isLoggedOutUrl && loginState === LoginState.NotLoggedIn) {
			router.push({
				pathname: '/authenticate',
				query: {
					return: `${window.location.pathname}${encodeURIComponent(
						window.location.search
					)}`
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
