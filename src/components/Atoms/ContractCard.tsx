import {
	createStyles,
	Text,
	Button,
	Card,
	Spoiler,
	Accordion,
	Title,
	Space
} from '@mantine/core'
import cx from 'classnames'
import Link from 'next/link'
import React from 'react'
import { SearchContractsQuery } from '../../../generated/graphql'
import { ArrayElement } from '../../lib/utils'
import { Address } from './Address'

const useStyles = createStyles(_theme => ({
	card: {}
}))

export interface IProps {
	contract?: ArrayElement<SearchContractsQuery['Contracts']> | null
	ctaText?: string
	onClick?: (
		contract: ArrayElement<SearchContractsQuery['Contracts']>
	) => void
	href?: string
	children?: React.ReactNode
	className?: string
}

export const ContractCard: React.FC<IProps> = ({
	className,
	contract,
	ctaText,
	onClick,
	children,
	href
}) => {
	const { classes } = useStyles()

	if (!contract) {
		return null
	}

	return (
		<Card
			key={contract.id}
			shadow="sm"
			p="lg"
			className={cx(classes.card, className)}
		>
			{href && (
				<Link href={href}>
					<a>
						<Text size="xl">{contract.name}</Text>
					</a>
				</Link>
			)}
			{!href && <Text size="xl">{contract.name}</Text>}
			<Spoiler maxHeight={50} showLabel="Show more" hideLabel="hide">
				{contract.description}
			</Spoiler>
			<Accordion>
				<Accordion.Item label="Details">
					<Title order={4}>Deployments</Title>
					<Space h={16} />
					{contract.ContractInstances.length === 0 && (
						<Text color="dimmed">
							This contract has not been deployed yet
						</Text>
					)}
					{contract.ContractInstances.map(ci => {
						return (
							<Address
								key={ci.address}
								address={ci.address}
								chainId={ci.chainId}
							/>
						)
					})}
					<Space h={32} />
					<Title order={4}>Contract Creator</Title>
					<Space h={16} />
					<Address address={contract.Creator?.address} />
				</Accordion.Item>
			</Accordion>

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
	)
}
