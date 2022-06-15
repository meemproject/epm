import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { HeaderMenu } from '../components/Header/Header'
import { HomeComponent } from '../components/Home/Home'

const Home: NextPage = () => {
	return (
		<>
			<HeaderMenu />

			<HomeComponent />
		</>
	)
}

export default Home
