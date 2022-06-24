import type { NextPage } from 'next'
import React from 'react'
import { BundlesContainer } from '../../components/Bundles/BundlesContainer'
import { HeaderMenu } from '../../components/Header/Header'

const CreatePage: NextPage = () => {
	return (
		<>
			<HeaderMenu />
			<BundlesContainer />
		</>
	)
}

export default CreatePage
