import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { ContractsContainer } from '../components/Contracts/ContractsContainer'
import { HeaderMenu } from '../components/Header/Header'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Contracts | EPM</title>
			</Head>
			<HeaderMenu />
			<ContractsContainer />
		</>
	)
}

export default Home
