import { useSubscription } from '@apollo/client'
import { Button, TextInput, Space, Grid, Skeleton } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useMeemApollo } from '@meemproject/react'
import { MeemAPI } from '@meemproject/sdk'
import React from 'react'
import { SubSearchContractsSubscription } from '../../../generated/graphql'
import { SUB_SEARCH_CONTRACTS } from '../../graphql/contracts'
import { ArrayElement } from '../../lib/utils'
import { ContractCard } from './ContractCard'

export interface IProps {
	onClick: (
		contract: ArrayElement<SubSearchContractsSubscription['Contracts']>
	) => void
	contractType?: MeemAPI.ContractType
	disabledContractIds?: string[]
	children?: React.ReactNode
}

export const FindContract: React.FC<IProps> = ({
	contractType,
	onClick,
	disabledContractIds,
	children
}) => {
	const { anonClient } = useMeemApollo()

	const form = useForm({
		initialValues: {
			searchTerm: ''
		},
		validate: {}
	})

	const { loading: isLoading, data: facets } =
		useSubscription<SubSearchContractsSubscription>(SUB_SEARCH_CONTRACTS, {
			variables: {
				contractType: contractType ?? MeemAPI.ContractType.DiamondFacet,
				searchTerm: `%${form.values.searchTerm}%`
			},
			client: anonClient
		})

	return (
		<form onSubmit={form.onSubmit(async _values => {})}>
			<TextInput
				radius="lg"
				size="md"
				placeholder="Access Control"
				{...form.getInputProps('searchTerm')}
			/>
			<Grid>
				{isLoading &&
					[...Array(6)].map((_, i) => (
						<Grid.Col md={6} key={`col-${i}`}>
							<Space h={8} />
							<Skeleton height="290px" width="100%" />
						</Grid.Col>
					))}
				{facets?.Contracts.map(facet => (
					<Grid.Col key={facet.id} md={6}>
						<ContractCard contract={facet}>
							<Space h={8} />
							<Button
								onClick={() => onClick(facet)}
								disabled={disabledContractIds?.includes(
									facet.id
								)}
							>
								Select
							</Button>
						</ContractCard>
					</Grid.Col>
				))}
			</Grid>
			{children}
		</form>
	)
}
