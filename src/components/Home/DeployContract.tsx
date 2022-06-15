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
	Center,
	Image,
	Autocomplete,
	Loader,
	Avatar,
	SelectItemProps,
	MantineColor,
	AutocompleteItem,
	Group,
	Button,
	Modal,
	Select,
	TextInput,
	Space,
	Title
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

const useStyles = createStyles(theme => ({
	wrapper: {
		position: 'relative',
		boxSizing: 'border-box',
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
	},

	inner: {
		display: 'flex',
		flexDirection: 'column',
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

export interface IProps {
	contract?: Contracts
}

export const DeployContract: React.FC<IProps> = ({ contract }) => {
	const { classes } = useStyles()
	const router = useRouter()
	const { web3Provider, signer } = useWallet()
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm({
		initialValues: {},
		// initialValues: {
		// 	args: []
		// },
		validate: {}
	})

	if (!contract) {
		return null
	}

	const constructorAbi =
		contract.abi &&
		Array.isArray(contract.abi) &&
		contract.abi.find(item => item.type === 'constructor')

	const inputs: {
		internalType: string
		name: string
		type: string
	}[] = constructorAbi?.inputs ?? []

	// console.log({ constructorAbi })

	const handleDeploy = async () => {
		// console.log({ form, contract })
		const args: any[] = []
		for (let i = 0; i < inputs.length; i += 1) {
			args.push(form.values[`args${i}`])
		}

		// console.log(args)
		try {
			setIsLoading(true)
			console.log(contract)
			const c = new ethers.ContractFactory(
				contract.abi,
				{
					object: contract.bytecode
				},
				signer
			)
			console.log(c)
			const tx = await c.deploy(...args)
			// const tx = await c.deploy()
			// const tx = await c.deploy()
			console.log(tx)
			await tx.deployed()
		} catch (e) {
			console.log(e)
		}

		setIsLoading(false)
	}

	// console.log({ contract })

	return (
		<div className={classes.wrapper}>
			<Title order={2}>Deploy Contract</Title>
			<Title order={3}>{contract.name}</Title>
			<Text>{contract.description}</Text>
			<Container size={900} className={classes.inner}>
				<Title order={3}>Constructor Arguments</Title>
				<form
					onSubmit={form.onSubmit(async values => {
						handleDeploy()
					})}
				>
					{inputs.map((input, i) => {
						return (
							<TextInput
								key={`input-${name}`}
								label={input.name}
								placeholder={
									input.type === 'address' ? '0x...' : ''
								}
								// @ts-ignore
								{...form.getInputProps(`args${i}`)}
							/>
						)
					})}
					<Space h={8} />
					<Button type="submit">Deploy</Button>
				</form>
			</Container>
		</div>
	)
}
