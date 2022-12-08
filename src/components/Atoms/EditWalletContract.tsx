import log from '@kengoldfarb/log'
import { Text, Button, Space, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { showNotification } from '@mantine/notifications'
import { MeemAPI, makeFetcher } from '@meemproject/sdk'
import React, { useEffect, useState } from 'react'
import { WalletContractInstances } from '../../../generated/graphql'

export interface IProps {
	walletContract?: WalletContractInstances
	onSave?: () => void
}

export const EditWalletContract: React.FC<IProps> = ({
	walletContract,
	onSave
}) => {
	const [isLoading, setIsLoading] = useState(false)

	const { values, setValues, onSubmit, getInputProps } = useForm({
		initialValues: {
			name: '',
			note: ''
		}
		// validate: {}
	})

	const handleSave = async () => {
		try {
			setIsLoading(true)
			const updateWalletContractInstance = makeFetcher<
				MeemAPI.v1.UpdateWalletContractInstance.IQueryParams,
				MeemAPI.v1.UpdateWalletContractInstance.IRequestBody,
				MeemAPI.v1.UpdateWalletContractInstance.IResponseBody
			>({
				method: MeemAPI.v1.UpdateWalletContractInstance.method
			})
			await updateWalletContractInstance(
				MeemAPI.v1.UpdateWalletContractInstance.path({
					contractInstanceId: walletContract?.ContractInstance?.id
				}),
				undefined,
				{
					name: values.name,
					note: values.note
				}
			)
			showNotification({
				title: 'Contract Info Updated!',
				message: 'Contract info has been saved.',
				color: 'green'
			})

			if (onSave) {
				onSave()
			}
		} catch (e) {
			log.warn(e)
			showNotification({
				title: 'Error',
				message: 'There was an error updating contract info',
				color: 'red'
			})
		}
		setIsLoading(false)
	}

	useEffect(() => {
		if (walletContract) {
			setValues({
				name: walletContract.name ?? '',
				note: walletContract.note ?? ''
			})
		}
	}, [walletContract, setValues])

	if (!walletContract) {
		return null
	}

	return (
		<form
			onSubmit={onSubmit(async _values => {
				handleSave()
			})}
		>
			<Text>
				Change the name or set the description of your contract.
			</Text>
			<Space h={8} />
			<TextInput
				label="Name"
				radius="lg"
				size="md"
				maxLength={140}
				placeholder="Meem Permissions"
				required
				{...getInputProps('name')}
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
				{...getInputProps('note')}
			/>
			<Space h={8} />
			<Button type="submit" loading={isLoading}>
				Save
			</Button>
		</form>
	)
}
