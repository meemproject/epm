import type { NextPage } from 'next'
import React from 'react'
import { CreateBundleContainer } from '../components/Bundles/CreateBundleContainer'
import { HeaderMenu } from '../components/Header/Header'

const CreatePage: NextPage = () => {
	return (
		<>
			<HeaderMenu />
			<CreateBundleContainer />
		</>
	)
}

export default CreatePage
