/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/named */
import { ApolloClient, HttpLink, InMemoryCache, useQuery } from '@apollo/client'
import log from '@kengoldfarb/log'
import {
	createStyles,
	Container,
	Text,
	Button,
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
import { useWallet } from '@meemproject/react'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import React, {
	forwardRef,
	useContext,
	useEffect,
	useRef,
	useState
} from 'react'
import {
	GetContractsQuery,
	Contracts,
	SearchContractsQuery
} from '../../../generated/graphql'
import { SEARCH_CONTRACTS } from '../../graphql/contracts'
import { ContractCard } from '../Atoms/ContractCard'
import { DeployContract } from './DeployContract'

const useStyles = createStyles(theme => ({
	wrapper: {
		position: 'relative',
		boxSizing: 'border-box',
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
	},

	inner: {
		position: 'relative',
		paddingTop: 0,
		paddingBottom: 120,
		marginTop: 24,

		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			paddingBottom: 80,
			paddingTop: 0,
			marginTop: 80
		}
	}
}))

export function ContractsPage() {
	const { classes } = useStyles()
	const router = useRouter()
	const { web3Provider, signer } = useWallet()
	const [isLoading, setIsLoading] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [selectedContract, setSelectedContract] = useState<Contracts>()

	const form = useForm({
		initialValues: {
			contractType: '',
			searchText: ''
		},
		validate: {}
	})

	// const handleFormChange = async () => {
	// 	console.log(form.values)
	// }

	useEffect(() => {
		console.log(form.values)
	}, [form.values])

	const {
		loading,
		error,
		data: contracts
	} = useQuery<SearchContractsQuery>(SEARCH_CONTRACTS, {
		variables: {
			contractType: form.values.contractType,
			searchTerm: `${form.values.searchText}%`
		}
	})

	const handleDeploy = async (c: Partial<Contracts>) => {
		// try {
		// 	setIsLoading(true)
		// 	console.log(contract)
		// 	const c = new ethers.ContractFactory(
		// 		contract.abi,
		// 		contract.bytecode,
		// 		signer
		// 	)
		// 	console.log(c)
		// 	const tx = await c.deploy()
		// 	console.log(tx)
		// 	await tx.deployed()
		// } catch (e) {
		// 	console.log(e)
		// }

		// setIsLoading(false)
		setIsOpen(true)
		setSelectedContract(c)
	}

	console.log({ contracts })

	return (
		<>
			<Container size={900} className={classes.inner}>
				<form onSubmit={form.onSubmit(async values => {})}>
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
					{loading &&
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
								onClick={handleDeploy}
								ctaText="Deploy Contract"
							/>
							<Space h={8} />
						</Grid.Col>
					))}
				</Grid>
			</Container>
			<Modal opened={isOpen} onClose={() => setIsOpen(false)}>
				<DeployContract contract={selectedContract} />
			</Modal>
		</>
	)
}
