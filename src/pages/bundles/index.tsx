import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { BundlesContainer } from '../../components/Bundles/BundlesContainer'
import { HeaderMenu } from '../../components/Header/Header'

const CreatePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Bundles | EPM</title>
			</Head>
			<HeaderMenu />
			<BundlesContainer />
		</>
	)
}

export default CreatePage
