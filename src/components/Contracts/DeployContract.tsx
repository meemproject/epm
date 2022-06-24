import log from '@kengoldfarb/log'
import {
	createStyles,
	Container,
	Text,
	Button,
	TextInput,
	Space,
	Title
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { chains, MeemAPI } from '@meemproject/api'
import { makeFetcher, useWallet } from '@meemproject/react'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Contracts } from '../../../generated/graphql'

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
	const { signer, chainId } = useWallet()
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm({
		initialValues: {},
		validate: {}
	})

	if (!contract) {
		return null
	}

	console.log({ signer, chainId })

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
		const args: any[] = []
		for (let i = 0; i < inputs.length; i += 1) {
			// @ts-ignore
			args.push(form.values[`args${i}`])
		}

		// console.log(args)
		try {
			setIsLoading(true)
			const c = new ethers.ContractFactory(
				contract.abi,
				{
					object: contract.bytecode
				},
				signer
			)
			const tx = await c.deploy(...args)
			await tx.deployed()

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
					address: tx.address,
					chainId
				}
			)
			router.push(`/manage`, {
				query: {
					address: tx.address,
					chainId
				}
			})
		} catch (e) {
			log.warn(e)
		}

		setIsLoading(false)
	}

	const chain = chains.find(c => c.chainId === chainId)

	return (
		<div className={classes.wrapper}>
			<Title order={2}>Deploy Contract</Title>
			<Title order={3}>{contract.name}</Title>
			<Text>{contract.description}</Text>
			<Container size={900} className={classes.inner}>
				{inputs.length > 0 && (
					<Title order={3}>Constructor Arguments</Title>
				)}
				<form
					onSubmit={form.onSubmit(async _values => {
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
					<Button
						loading={isLoading}
						type="submit"
					>{`Deploy to ${chain?.name}`}</Button>
				</form>
			</Container>
		</div>
	)
}
