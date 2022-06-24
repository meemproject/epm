import { useQuery } from '@apollo/client'
import {
	Text,
	Modal,
	Select,
	Space,
	Grid,
	Title,
	TextInput,
	Skeleton
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { MeemAPI } from '@meemproject/api'
import React, { useState } from 'react'
import { Contracts, SearchContractsQuery } from '../../../generated/graphql'
import { SEARCH_CONTRACTS } from '../../graphql/contracts'
import { Page } from '../../styles/Page'
import { ContractCard } from '../Atoms/ContractCard'
import { DeployContract } from './DeployContract'

export const ContractsContainer: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedContract, setSelectedContract] = useState<Contracts>()

	const form = useForm({
		initialValues: {
			contractType: '',
			searchText: ''
		},
		validate: {}
	})

	const { loading: isContractsLoading, data: contracts } =
		useQuery<SearchContractsQuery>(SEARCH_CONTRACTS, {
			variables: {
				contractType: form.values.contractType,
				searchTerm: `${form.values.searchText}%`
			}
		})

	const handleDeploy = async (c: Contracts) => {
		setIsOpen(true)
		setSelectedContract(c)
	}

	return (
		<Page>
			<form onSubmit={form.onSubmit(async _values => {})}>
				<Title>Contracts</Title>
				<Space h={8} />
				<Text>Search for contracts and deploy.</Text>
				<Space h={8} />
				<Select
					label="Contract Type"
					placeholder="Pick one"
					data={[
						{
							value: MeemAPI.ContractType.Regular,
							label: 'Regular Contract'
						},
						{
							value: MeemAPI.ContractType.DiamondProxy,
							label: 'Diamond Proxy (EIP-2535)'
						},
						{
							value: MeemAPI.ContractType.DiamondFacet,
							label: 'Diamond Facet (EIP-2535)'
						}
					]}
					{...form.getInputProps('contractType')}
				/>
				<Space h={8} />
				<TextInput
					{...form.getInputProps('searchText')}
					disabled={form.values.contractType.length === 0}
					placeholder="Access Control"
				/>
			</form>
			<Space h={24} />
			<Grid>
				{isContractsLoading &&
					[...Array(6)].map((_, i) => (
						<Grid.Col md={6} key={`col-${i}`}>
							<Skeleton height="295px" width="100%" />
							<Space h={8} />
						</Grid.Col>
					))}
				{contracts?.Contracts.map(contract => (
					<Grid.Col md={6} key={contract.id}>
						<ContractCard
							contract={contract}
							onClick={c => handleDeploy(c as Contracts)}
							ctaText="Deploy Contract"
						/>
						<Space h={8} />
					</Grid.Col>
				))}
			</Grid>
			<Modal
				title={<Title>Deploy Contract</Title>}
				opened={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<DeployContract contract={selectedContract} />
			</Modal>
		</Page>
	)
}
