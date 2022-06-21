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
	Grid
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
import { GetContractsQuery, Contracts } from '../../../generated/graphql'
import { GET_CONTRACTS_BY_TYPE } from '../../graphql/contracts'
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
		marginTop: 120,

		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			paddingBottom: 80,
			paddingTop: 0,
			marginTop: 80
		}
	}
}))

export function HomeComponent() {
	const { classes } = useStyles()
	const router = useRouter()
	const { web3Provider, signer } = useWallet()
	const [isLoading, setIsLoading] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [selectedContract, setSelectedContract] = useState<Contracts>()

	const form = useForm({
		initialValues: {
			contractType: ''
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
	} = useQuery<GetContractsQuery>(GET_CONTRACTS_BY_TYPE, {
		variables: { contractType: form.values.contractType }
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
		<div className={classes.wrapper}>
			<Container size={900} className={classes.inner}>
				<form onSubmit={form.onSubmit(async values => {})}>
					<Container>
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
					</Container>
				</form>
				<Grid>
					{contracts?.Contracts.map(contract => (
						<Grid.Col span={4} key={contract.id}>
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
		</div>
	)
}
