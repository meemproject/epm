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
	TextInput
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { MeemAPI } from '@meemproject/api'
import { makeFetcher, useWallet } from '@meemproject/react'
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
	GetMyContractsQuery
} from '../../../generated/graphql'
import { GET_MY_CONTRACTS } from '../../graphql/contracts'
import { ContractCard } from '../Atoms/ContractCard'
import { SelectChain } from '../Atoms/SelectChain'

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
			address: accounts[0]
		}
	})

	console.log({ contractQueryResult })

	const form = useForm({
		initialValues: {
			address: '',
			chain: MeemAPI.NetworkChainId.Rinkeby.toString()
		},
		validate: {
			address: val =>
				ethers.utils.isAddress(val)
					? null
					: 'A valid address is required'
		}
	})

	return (
		<div className={classes.wrapper}>
			<Container size={900} className={classes.inner}>
				<Button onClick={() => setIsOpen(true)}>Add Contract</Button>
			</Container>
			<Container>
				{contractQueryResult?.Wallets[0].WalletContractInstances.map(
					instance => (
						<Text key={instance.id}>
							{instance.ContractInstance?.address}
						</Text>
					)
				)}
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
									chainId: +values.chain
								}
							)
							setIsOpen(false)
						} catch (e) {
							log.warn(e)
						}
					})}
				>
					<Container>
						<SelectChain form={form} />
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
		</div>
	)
}
