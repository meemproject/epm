import { createStyles, Text, Button, Card, Spoiler } from '@mantine/core'
import React from 'react'
import { Contracts } from '../../../generated/graphql'

const useStyles = createStyles(_theme => ({
	card: {}
}))

export interface IProps {
	contract?: Partial<Contracts>
	ctaText: string
	onClick: (contract: Partial<Contracts>) => void
}

export const ContractCard: React.FC<IProps> = ({
	contract,
	ctaText,
	onClick
}) => {
	const { classes } = useStyles()

	if (!contract) {
		return null
	}

	return (
		<Card key={contract.id} shadow="sm" p="lg" className={classes.card}>
			{/* <Card.Section></Card.Section> */}
			<Text size="xl">{contract.name}</Text>
			<Spoiler maxHeight={120} showLabel="Show more" hideLabel="hide">
				{contract.description}
			</Spoiler>
			<Text>Created By</Text>
			<Text>{contract.Creator?.address}</Text>

			<Button onClick={() => onClick(contract)}>{ctaText}</Button>
		</Card>
	)
}
