import type { NextPage } from 'next'
import React from 'react'
import { BundleContainer } from '../../components/Bundles/BundleContainer'
import { HeaderMenu } from '../../components/Header/Header'

const CreatePage: NextPage = () => {
	return (
		<>
			<HeaderMenu />
			<BundleContainer />
		</>
	)
}

export default CreatePage
