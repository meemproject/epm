import type { NextPage } from 'next'
import React from 'react'
import { ContractsContainer } from '../components/Contracts/ContractsContainer'
import { HeaderMenu } from '../components/Header/Header'

const Home: NextPage = () => {
	return (
		<>
			<HeaderMenu />
			<ContractsContainer />
		</>
	)
}

export default Home
