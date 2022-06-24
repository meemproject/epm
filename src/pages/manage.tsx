import type { NextPage } from 'next'
import React from 'react'
import { HeaderMenu } from '../components/Header/Header'
import { ManageDiamondContainer } from '../components/ManageDiamond/ManageDiamondContainer'

const CreatePage: NextPage = () => {
	return (
		<>
			<HeaderMenu />
			<ManageDiamondContainer />
		</>
	)
}

export default CreatePage
