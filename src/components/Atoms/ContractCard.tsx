import {
	createStyles,
	Text,
	Button,
	Card,
	Spoiler,
	Accordion
} from '@mantine/core'
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
	children?: React.ReactNode
}

export const ContractCard: React.FC<IProps> = ({
	contract,
	ctaText,
	onClick,
	children
}) => {
	const { classes } = useStyles()

	if (!contract) {
		return null
	}

	return (
		<Card key={contract.id} shadow="sm" p="lg" className={classes.card}>
			{/* <Card.Section></Card.Section> */}
			<Text size="xl">{contract.name}</Text>
			<Spoiler maxHeight={50} showLabel="Show more" hideLabel="hide">
				{contract.description}
			</Spoiler>
			<Accordion>
				<Accordion.Item label="Contract Info">
					<Text>Created By</Text>
					<Address address={contract.Creator?.address} />
				</Accordion.Item>
				<Accordion.Item label="Creator">
					<Text>Created By</Text>
					<Address address={contract.Creator?.address} />
				</Accordion.Item>
			</Accordion>

			{ctaText && (
				<Button
					onClick={() => {
						if (onClick) {
							onClick(contract)
						}
					}}
				>
					{ctaText}
				</Button>
			)}
			{children}
		</Card>
	)
}
