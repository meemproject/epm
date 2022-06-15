import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Authenticate from '../components/Authenticate/Authenticate'
import { HeaderMenu } from '../components/Header/Header'

const AuthenticatePage: NextPage = () => {
	return (
		<>
			<HeaderMenu />
			<Authenticate />
		</>
	)
}

export default AuthenticatePage
