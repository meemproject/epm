import log from '@kengoldfarb/log'
import {
	createStyles,
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
import React, { useState } from 'react'
import { Contracts } from '../../../generated/graphql'

const useStyles = createStyles(_theme => ({}))

export interface IProps {
	contract?: Contracts
	onDeployed?: (contract: ethers.Contract) => void
}

export const DeployContract: React.FC<IProps> = ({ contract, onDeployed }) => {
	const { classes } = useStyles()
	const { signer, chainId } = useWallet()
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm({
		initialValues: {},
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
			if (onDeployed) {
				onDeployed(tx)
			}
		} catch (e) {
			log.warn(e)
		}

		setIsLoading(false)
	}

	const chain = chains.find(c => c.chainId === chainId)

	return (
		<div>
			<Title order={3}>{contract.name}</Title>
			<Text>{contract.description}</Text>
			<Space h={24} />
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
		</div>
	)
}
