import { Text, Button, Card, Accordion, Title, Space } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { Bundles } from '../../../generated/graphql'
import { Address } from './Address'
import { ContractCard } from './ContractCard'

export interface IProps {
	bundle?: Bundles | null

	ctaText?: string
	onClick?: (bundle: Bundles) => void
	href?: string
	children?: React.ReactNode
}

export const BundleCard: React.FC<IProps> = ({
	bundle,
	children,
	ctaText,
	onClick
}) => {
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
