/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/named */
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	useQuery,
	useSubscription
} from '@apollo/client'
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
	TextInput,
	Title,
	Skeleton
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { MeemAPI } from '@meemproject/api'
import { makeFetcher, useWallet } from '@meemproject/react'
import { ethers } from 'ethers'
import Link from 'next/link'
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
	GetMyContractsQuery
} from '../../../generated/graphql'
import { GET_MY_CONTRACTS } from '../../graphql/contracts'
import { ChainSelect } from '../Atoms/ChainSelect'
import { ContractCard } from '../Atoms/ContractCard'
import { WalletContractCard } from '../Atoms/WalletContractCard'

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

export const MyContracts: React.FC = () => {
	const { classes } = useStyles()
	const router = useRouter()
	const { web3Provider, signer, accounts } = useWallet()
	const [isLoading, setIsLoading] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [selectedContract, setSelectedContract] = useState<Contracts>()

	const {
		loading,
		error,
		data: contractQueryResult
	} = useQuery<GetMyContractsQuery>(GET_MY_CONTRACTS, {
		variables: {
			address: accounts && accounts[0]
		}
	})

	// console.log({ account: accounts[0], loading, error, contractQueryResult })

	const form = useForm({
		initialValues: {
			address: '',
			chainId: 4
		},
		validate: {
			address: val =>
				ethers.utils.isAddress(val)
					? null
					: 'A valid address is required'
		}
	})

	return (
		<>
			<Container size={900} className={classes.inner}>
				<Title>My Contracts</Title>
				<Space h={8} />
				<Text>All the contracts you&apos;ve deployed or tracked</Text>
				<Space h={8} />
				<Button onClick={() => setIsOpen(true)}>Track Contract</Button>

				{contractQueryResult?.Wallets[0].WalletContractInstances
					.length === 0 && (
					<>
						<Space h={24} />
						<Text>
							You&apos;re not tracking any contracts yet. You can
							either manually input a contract address in
							&quot;Track Contract&quot; or{' '}
							<Link href="/contracts">
								<a>find a contract to deploy</a>
							</Link>
						</Text>
					</>
				)}
				<Space h={24} />
				<Grid>
					{loading &&
						[...Array(6)].map((_, i) => (
							<Grid.Col md={6} key={`col-${i}`}>
								<Skeleton height="380px" width="100%" />
								<Space h={8} />
							</Grid.Col>
						))}
					{contractQueryResult?.Wallets[0].WalletContractInstances.map(
						instance => (
							<Grid.Col md={6} key={instance.id}>
								<WalletContractCard
									walletContract={instance}
									href={`/manage?address=${instance.ContractInstance?.address}&chainId=${instance.ContractInstance?.chainId}`}
								/>
								{/* <ContractCard
									key={instance.id}
									contract={
										instance.ContractInstance?.Contract
									}
									href={`/manage?address=${instance.ContractInstance?.address}&chainId=${instance.ContractInstance?.chainId}`}
								/> */}
								<Space h={16} />
							</Grid.Col>
						)
					)}
				</Grid>
			</Container>
			<Modal opened={isOpen} onClose={() => setIsOpen(false)}>
				<form
					onSubmit={form.onSubmit(async values => {
						try {
							const trackContract = makeFetcher<
								MeemAPI.v1.TrackContractInstance.IQueryParams,
								MeemAPI.v1.TrackContractInstance.IRequestBody,
								MeemAPI.v1.TrackContractInstance.IResponseBody
							>({
								method: MeemAPI.v1.TrackContractInstance.method
							})
							await trackContract(
								MeemAPI.v1.TrackContractInstance.path(),
								undefined,
								{
									...values,
									chainId: +values.chainId
								}
							)
							setIsOpen(false)
						} catch (e) {
							log.warn(e)
						}
					})}
				>
					<Container>
						<ChainSelect form={form} />
						<Space h={12} />
						<TextInput
							label="Contract Address"
							placeholder="0x..."
							onBlur={() => form.validate()}
							{...form.getInputProps('address')}
						/>
						<Space h={12} />
						<Button
							type="submit"
							disabled={
								form.values.address.length === 0 ||
								Object.values(form.values).length === 0
							}
						>
							Add
						</Button>
					</Container>
				</form>
			</Modal>
		</>
	)
}
