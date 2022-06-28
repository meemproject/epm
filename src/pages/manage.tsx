import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { HeaderMenu } from '../components/Header/Header'
import { ManageDiamondContainer } from '../components/ManageDiamond/ManageDiamondContainer'

const CreatePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Manage Contract | EPM</title>
			</Head>
			<HeaderMenu />
			<ManageDiamondContainer />
		</>
	)
}

export default CreatePage
