import log from '@kengoldfarb/log'
import {
	Text,
	Center,
	Button,
	Textarea,
	TextInput,
	Space,
	Select,
	JsonInput,
	Title
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { MeemAPI } from '@meemproject/api'
import { makeFetcher } from '@meemproject/react'
import React, { useState } from 'react'
import { Page } from '../../styles/Page'

export const CreateContainer: React.FC = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const form = useForm({
		initialValues: {
			name: '',
			description: '',
			address: '',
			abi: '',
			bytecode: '',
			chainId: '',
			contractType: ''
		},
		validate: {
			name: val => (val.length > 0 ? null : 'Name is required')
		}
	})

	return (
		<Page>
			<Title>Create Contract</Title>
			<Space h={8} />
			<Text>
				Upload your contract to easily deploy and manage instances of
				it.
			</Text>
			<Space h={8} />
			<form
				onSubmit={form.onSubmit(async values => {
					try {
						setIsSubmitting(true)
						const createContract = makeFetcher<
							MeemAPI.v1.CreateContract.IQueryParams,
							MeemAPI.v1.CreateContract.IRequestBody,
							MeemAPI.v1.CreateContract.IResponseBody
						>({
							method: MeemAPI.v1.CreateContract.method
						})

						await createContract(
							MeemAPI.v1.CreateContract.path(),
							undefined,
							{
								...values,
								contractType:
									values.contractType as MeemAPI.ContractType,
								abi: JSON.parse(values.abi)
							}
						)

						form.reset()

						showNotification({
							title: 'Contract created',
							message:
								'The contract was saved and can now be deployed.',
							color: 'green'
						})
					} catch (e) {
						log.crit(e)
					}
					setIsSubmitting(false)
				})}
			>
				<Select
					label="Contract Type"
					placeholder="Pick one"
					required
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

				<TextInput
					label="Name"
					radius="lg"
					size="md"
					maxLength={140}
					placeholder="Meem Permissions"
					required
					{...form.getInputProps('name')}
				/>

				<Space h={8} />

				<Textarea
					label="Description"
					radius="lg"
					size="md"
					autosize
					minRows={3}
					maxRows={5}
					maxLength={5000}
					placeholder="This contract does something..."
					required
					{...form.getInputProps('description')}
				/>

				<JsonInput
					radius="lg"
					label="ABI"
					size="md"
					autosize
					required
					minRows={5}
					maxRows={6}
					placeholder={`[
	{
		"inputs": [
		{
			"internalType": "address",
			"name": "owner",
			"type": "address"
		}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]`}
					{...form.getInputProps('abi')}
				/>

				<Textarea
					label="Bytecode"
					required
					radius="lg"
					size="md"
					autosize
					minRows={5}
					maxRows={6}
					placeholder="0x..."
					{...form.getInputProps('bytecode')}
				/>
				<Space h={24} />

				<Center>
					<Button type="submit" loading={isSubmitting}>
						Continue
					</Button>
				</Center>
			</form>
		</Page>
	)
}
