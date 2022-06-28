import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { CreateBundleContainer } from '../components/Bundles/CreateBundleContainer'
import { HeaderMenu } from '../components/Header/Header'

const CreatePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Bundle | EPM</title>
			</Head>
			<HeaderMenu />
			<CreateBundleContainer />
		</>
	)
}

export default CreatePage
