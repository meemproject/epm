import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { AddressContractsContainer } from '../../components/AddressContracts/AddressContractsContainer'
import { HeaderMenu } from '../../components/Header/Header'

const CreatePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Tracked Contracts | EPM</title>
			</Head>
			<HeaderMenu />
			<AddressContractsContainer />
		</>
	)
}

export default CreatePage
