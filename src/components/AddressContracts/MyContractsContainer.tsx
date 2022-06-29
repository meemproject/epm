import { Text, Button, Space, Title } from '@mantine/core'
import { useWallet } from '@meemproject/react'
import React, { useState } from 'react'
import { Page } from '../../styles/Page'
import { AddressContracts } from './AddressContracts'

export interface IProps {
	address: string
	title: string
	description: string
}

export const MyContractsContainer: React.FC<IProps> = () => {
	const { accounts } = useWallet()

	return (
		<Page>
			<Title>My Contracts</Title>
			<Space h={8} />
			<Text>All the contracts you&apos;ve deployed or tracked</Text>
			<Space h={8} />
			<AddressContracts address={accounts && accounts[0]} />
		</Page>
	)
}
