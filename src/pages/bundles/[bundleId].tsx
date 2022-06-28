import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { BundleContainer } from '../../components/Bundles/BundleContainer'
import { HeaderMenu } from '../../components/Header/Header'

const CreatePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Manage Bundle | EPM</title>
			</Head>
			<HeaderMenu />
			<BundleContainer />
		</>
	)
}

export default CreatePage
