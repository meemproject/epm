import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { ContractsPage } from '../components/Contracts/ContractsPage'
import { HeaderMenu } from '../components/Header/Header'

const Home: NextPage = () => {
	return (
		<>
			<HeaderMenu />
			<ContractsPage />
		</>
	)
}

export default Home
