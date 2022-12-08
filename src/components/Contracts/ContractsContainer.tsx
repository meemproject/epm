import { useSubscription } from '@apollo/client'
import {
	Text,
	Select,
	Space,
	Grid,
	Title,
	TextInput,
	Skeleton
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useMeemApollo, useWallet } from '@meemproject/react'
import { MeemAPI } from '@meemproject/sdk'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {
	Contracts,
	SubGetContractsByIdSubscription,
	SubSearchContractsSubscription
} from '../../../generated/graphql'
import {
	SUB_GET_CONTRACTS_BY_ID,
	SUB_SEARCH_CONTRACTS
} from '../../graphql/contracts'
import { Page } from '../../styles/Page'
import { ContractCard } from '../Atoms/ContractCard'
import { DeployContract } from './DeployContract'

export const ContractsContainer: React.FC = () => {
	const { anonClient } = useMeemApollo()
	const [isOpen, setIsOpen] = useState(false)
	const [selectedContract, setSelectedContract] = useState<Contracts>()
	const { chainId } = useWallet()
	const router = useRouter()

	const form = useForm({
		initialValues: {
			contractType: '',
			searchText: ''
		},
		validate: {},
		client: anonClient
	})

	const { loading: isContractsLoading, data: contracts } =
		useSubscription<SubSearchContractsSubscription>(SUB_SEARCH_CONTRACTS, {
			variables: {
				contractType: form.values.contractType,
				searchTerm: `${form.values.searchText}%`
			}
		})

	const { data: singleContractData } =
		useSubscription<SubGetContractsByIdSubscription>(
			SUB_GET_CONTRACTS_BY_ID,
			{
				skip: !router.query.contractId,
				variables: {
					ids: [router.query.contractId]
				}
			}
		)

	const handleDeploy = async (c: Contracts) => {
		setIsOpen(true)
		setSelectedContract(c)
	}

	useEffect(() => {
		if (singleContractData) {
			setSelectedContract(singleContractData.Contracts[0] as Contracts)
			setIsOpen(true)
			router.push({
				pathname: '/contracts'
			})
		}
	}, [singleContractData, router])

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
			<DeployContract
				contract={selectedContract}
				onDeployed={tx => {
					router.push({
						pathname: `/manage`,
						query: {
							address: tx.address,
							chainId
						}
					})
				}}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</Page>
	)
}
