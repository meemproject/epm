import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { HeaderMenu } from '../components/Header/Header'
import { MyClubsComponent } from '../components/MyContracts/MyContracts'

const CreatePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>My Contracts | Meem</title>
				<meta name="title" content="My Contracts | Meem" />
				<meta name="description" content="" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://meem.wtf/" />
				<meta property="og:title" content="Meem" />
				<meta property="og:description" content="" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://meem.wtf/" />
				<meta property="twitter:title" content="Meem" />
				<meta property="twitter:title" content="" />

				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
				<meta property="twitter:image" content="/link-preview.png" />
				<meta property="og:image" content="/link-preview.png" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon.png"
				/>
			</Head>
			<HeaderMenu />
			<MyClubsComponent />
		</>
	)
}

export default CreatePage
