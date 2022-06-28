import { useQuery } from '@apollo/client'
import { Button, TextInput, Space, Grid, Skeleton } from '@mantine/core'
import { useForm } from '@mantine/form'
import { MeemAPI } from '@meemproject/api'
import React from 'react'
import { SearchContractsQuery } from '../../../generated/graphql'
import { SEARCH_CONTRACTS } from '../../graphql/contracts'
import { ArrayElement } from '../../lib/utils'
import { ContractCard } from './ContractCard'

export interface IProps {
	onClick: (contract: ArrayElement<SearchContractsQuery['Contracts']>) => void
	contractType?: MeemAPI.ContractType
}

export const FindContract: React.FC<IProps> = ({ contractType, onClick }) => {
	const form = useForm({
		initialValues: {
			searchTerm: ''
		},
		validate: {}
	})

	const { loading: isLoading, data: facets } = useQuery<SearchContractsQuery>(
		SEARCH_CONTRACTS,
		{
			variables: {
				contractType: contractType ?? MeemAPI.ContractType.DiamondFacet,
				searchTerm: `%${form.values.searchTerm}%`
			}
		}
	)

	return (
		<form onSubmit={form.onSubmit(async _values => {})}>
			<TextInput
				// label="Find a Contract"
				radius="lg"
				size="md"
				placeholder="Access Control"
				// required
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
							<Button onClick={() => onClick(facet)}>
								Select
							</Button>
						</ContractCard>
					</Grid.Col>
				))}
			</Grid>
		</form>
	)
}
