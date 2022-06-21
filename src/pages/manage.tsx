import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { HeaderMenu } from '../components/Header/Header'
import { ManageDiamond } from '../components/ManageDiamond/ManageDiamond'

const CreatePage: NextPage = () => {
	return (
		<>
			<HeaderMenu />
			<ManageDiamond />
		</>
	)
}

export default CreatePage
