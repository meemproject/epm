import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { HeaderMenu } from '../components/Header/Header'
import { MyContractsContainer } from '../components/MyContracts/MyContractsContainer'

const CreatePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>My Contracts | Meem</title>
			</Head>
			<HeaderMenu />
			<MyContractsContainer />
		</>
	)
}

export default CreatePage
