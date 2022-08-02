import log from '@kengoldfarb/log'
import {
	Text,
	Button,
	TextInput,
	Space,
	Title,
	Modal,
	Textarea
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { chains, MeemAPI } from '@meemproject/api'
import { makeFetcher, useWallet } from '@meemproject/react'
import { ethers } from 'ethers'
import React, { useEffect, useState } from 'react'
import { Contracts } from '../../../generated/graphql'

export interface IProps {
	contract?: Contracts
	onDeployed?: (contract: ethers.Contract) => void
	onClose?: () => void
	isOpen?: boolean
	title?: string
}

export const DeployContract: React.FC<IProps> = ({
	contract,
	onDeployed,
	isOpen: isRequestedOpen,
	title,
	onClose
}) => {
	const { signer, chainId } = useWallet()
	const [isLoading, setIsLoading] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	const form = useForm({
		initialValues: {},
		validate: {}
	})

	useEffect(() => {
		if (!isLoading) {
			setIsOpen(!!isRequestedOpen)
		}

		if (!isRequestedOpen && onClose) {
			onClose()
		}
	}, [isRequestedOpen, isLoading, onClose])

	if (!contract || !chainId) {
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

	const handleDeploy = async () => {
		const args: any[] = []
		for (let i = 0; i < inputs.length; i += 1) {
			const input = inputs[i]
			switch (input.type) {
				case 'address[]': {
					// @ts-ignore
					const vals = form.values[`args${i}`].split('\n')
					console.log({ formVal: form.values[`args${i}`], vals })
					args.push(vals.map(item => item.trim()))
					break
				}

				case 'address':
				default: {
					// @ts-ignore
					args.push(form.values[`args${i}`])
					break
				}
			}
		}

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

			showNotification({
				title: 'Contract Deployed!',
				message: `${contract.name} was deployed to ${tx.address}.`,
				color: 'green'
			})

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
		<Modal
			title={
				<Title order={3}>{title || `Deploy ${contract.name}`}</Title>
			}
			opened={isOpen}
			onClose={() => {
				if (isLoading) {
					showNotification({
						title: 'Contract Deployment In Progress',
						message: 'Please wait for the contract to deploy.',
						color: 'yellow'
					})
				} else {
					setIsOpen(false)
					if (onClose) {
						onClose()
					}
				}
			}}
		>
			<div>
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
						console.log({ input, i })

						switch (input.type) {
							case 'address[]':
								return (
									<Textarea
										key={`input-${name}`}
										label={input.name}
										placeholder={
											input.type === 'address[]'
												? '0x...\n0x...'
												: ''
										}
										// @ts-ignore
										{...form.getInputProps(`args${i}`)}
									/>
								)
							case 'address':
							default: {
								return (
									<TextInput
										key={`input-${name}`}
										label={input.name}
										placeholder={
											input.type === 'address'
												? '0x...'
												: ''
										}
										// @ts-ignore
										{...form.getInputProps(`args${i}`)}
									/>
								)
							}
						}
					})}
					<Space h={8} />
					<Button
						loading={isLoading}
						type="submit"
					>{`Deploy to ${chain?.name}`}</Button>
				</form>
			</div>
		</Modal>
	)
}
