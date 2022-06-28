import {
	createStyles,
	Text,
	Button,
	Card,
	Title,
	Space,
	Tooltip,
	Modal
} from '@mantine/core'
import { useForm } from '@mantine/hooks'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Pencil } from 'tabler-icons-react'
import {
	GetMyContractsQuery,
	SearchContractsQuery,
	WalletContractInstances
} from '../../../generated/graphql'
import { ArrayElement } from '../../lib/utils'
import { Address } from './Address'
import { ContractCard } from './ContractCard'
import { EditWalletContract } from './EditWalletContract'
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
	children
}) => {
	const { classes } = useStyles()

	const [isEditing, setIsEditing] = useState(false)

	const { setValues } = useForm({
		initialValues: {
			name: '',
			note: ''
		}
		// validate: {}
	})

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
		<>
			<Card key={walletContract.id} shadow="sm" p="lg">
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
					isCompact
				/>

				{ctaText && (
					<>
						<Space h={24} />
						<Button
							onClick={() => {
								if (
									onClick &&
									walletContract.ContractInstance?.Contract
								) {
									onClick(
										walletContract.ContractInstance.Contract
									)
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
				<EditWalletContract
					walletContract={walletContract as WalletContractInstances}
					onSave={() => setIsEditing(false)}
				/>
			</Modal>
		</>
	)
}
