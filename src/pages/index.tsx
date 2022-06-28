import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { HeaderMenu } from '../components/Header/Header'
import { HomeContainer } from '../components/Home/HomeContainer'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Home | EPM</title>
			</Head>
			<HeaderMenu />

			<HomeContainer />
		</>
	)
}

export default Home
