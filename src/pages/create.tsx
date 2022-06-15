import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { CreateComponent } from '../components/Create/Create'
import { HeaderMenu } from '../components/Header/Header'

const CreatePage: NextPage = () => {
	return (
		<>
			<HeaderMenu />
			<CreateComponent />
		</>
	)
}

export default CreatePage
