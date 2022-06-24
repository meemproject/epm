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
	SearchBundlesQuery,
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
	bundle?: ArrayElement<SearchBundlesQuery['Bundles']> | null

	ctaText?: string
	onClick?: (
		contract: ArrayElement<SearchContractsQuery['Contracts']>
	) => void
	href?: string
	children?: React.ReactNode
}

export const BundleCard: React.FC<IProps> = ({
	bundle,
	children,
	ctaText,
	onClick
}) => {
	const { classes } = useStyles()

	if (!bundle) {
		return null
	}

	return (
		<>
			<Card key={bundle.id} shadow="sm" p="lg">
				<Title order={2}>
					<Link href={`/bundles/${bundle.id}`}>
						<a>{bundle.name}</a>
					</Link>
				</Title>
				<Space h={16} />
				<Text>{bundle.description}</Text>
				<Space h={16} />
				<Title order={4}>Bundle Creator</Title>
				<Address address={bundle.Creator?.address} />
				<Space h={16} />
				<Accordion>
					<Accordion.Item label="Contracts">
						<Title order={4}>Contracts</Title>
						<Space h={16} />
						<Text color="dimmed">
							All the contracts in this bundle
						</Text>
						{bundle.BundleContracts.map(bc => (
							<>
								<ContractCard
									key={`cc-${bc.Contract?.id}`}
									contract={bc.Contract}
								/>
								<Space h={16} />
							</>
						))}
					</Accordion.Item>
				</Accordion>
				{ctaText && (
					<>
						<Space h={24} />
						<Button
							onClick={() => {
								if (onClick) {
									onClick(bundle)
								}
							}}
						>
							{ctaText}
						</Button>
					</>
				)}
				{children}
			</Card>
		</>
	)
}
