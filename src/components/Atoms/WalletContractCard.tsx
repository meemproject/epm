import log from '@kengoldfarb/log'
import {
	createStyles,
	Text,
	Button,
	Card,
	Spoiler,
	Accordion,
	Title,
	Space,
	Tooltip,
	Modal,
	Textarea,
	TextInput
} from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { MeemAPI } from '@meemproject/api'
import { makeFetcher } from '@meemproject/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Pencil } from 'tabler-icons-react'
import {
	GetMyContractsQuery,
	SearchContractsQuery
} from '../../../generated/graphql'
import { ArrayElement } from '../../lib/utils'
import { Address } from './Address'
import { ContractCard } from './ContractCard'
import { IconButton } from './IconButton'

const useStyles = createStyles(_theme => ({
	row: {
		display: 'flex'
	}
}))

export interface IProps {
	walletContract?: ArrayElement<
		ArrayElement<GetMyContractsQuery['Wallets']>['WalletContractInstances']
	> | null
	ctaText?: string
	onClick?: (
		contract: ArrayElement<SearchContractsQuery['Contracts']>
	) => void
	href?: string
	children?: React.ReactNode
}

export const WalletContractCard: React.FC<IProps> = ({
	walletContract,
	ctaText,
	onClick,
	children,
	href
}) => {
	const { classes } = useStyles()

	const [isEditing, setIsEditing] = useState(false)

	const form = useForm({
		initialValues: {
			name: '',
			note: ''
		},
		validate: {}
	})

	const handleSave = async () => {
		try {
			const updateWalletContractInstance = makeFetcher<
				MeemAPI.v1.UpdateWalletContractInstance.IQueryParams,
				MeemAPI.v1.UpdateWalletContractInstance.IRequestBody,
				MeemAPI.v1.UpdateWalletContractInstance.IResponseBody
			>({
				method: MeemAPI.v1.UpdateWalletContractInstance.method
			})
			await updateWalletContractInstance(
				MeemAPI.v1.UpdateWalletContractInstance.path({
					contractInstanceId: walletContract?.ContractInstance.id
				}),
				undefined,
				{
					name: form.values.name,
					note: form.values.note
				}
			)
		} catch (e) {
			log.warn(e)
		}
	}

	useEffect(() => {
		form.setValues({
			name: walletContract.name ?? '',
			note: walletContract.note ?? ''
		})
	}, [walletContract, form])

	if (!walletContract) {
		return null
	}

	return (
		<>
			<Card
				key={walletContract.id}
				shadow="sm"
				p="lg"
				className={classes.card}
			>
				<div className={classes.row}>
					<Link
						href={`/manage?address=${walletContract.ContractInstance?.address}&chainId=${walletContract.ContractInstance?.chainId}`}
					>
						<a>
							<Text size="xl">
								{walletContract.name ??
									`My ${walletContract.ContractInstance?.Contract?.name}`}
							</Text>
						</a>
					</Link>
					<Space w={8} />
					<Tooltip label="Edit name / note" withArrow>
						<IconButton
							icon={<Pencil size={24} />}
							onClick={() => setIsEditing(true)}
						/>
					</Tooltip>
				</div>
				<Text size="md">{walletContract.note}</Text>
				<Address
					address={walletContract.ContractInstance?.address}
					chainId={walletContract.ContractInstance?.chainId}
				/>

				<ContractCard
					contract={walletContract.ContractInstance?.Contract}
				/>

				{ctaText && (
					<>
						<Space h={24} />
						<Button
							onClick={() => {
								if (onClick) {
									onClick(contract)
								}
							}}
						>
							{ctaText}
						</Button>
					</>
				)}
				{children}
			</Card>
			<Modal
				title={<Title>Edit Contract</Title>}
				opened={isEditing}
				onClose={() => setIsEditing(false)}
			>
				<form onSubmit={form.onSubmit(async _values => {})}>
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
						{...form.getInputProps('note')}
					/>
					<Space h={8} />
					<Button type="submit" onClick={handleSave}>
						Save
					</Button>
				</form>
			</Modal>
		</>
	)
}
