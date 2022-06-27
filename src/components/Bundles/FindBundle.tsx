import { useQuery } from '@apollo/client'
import { TextInput, Space, Skeleton, Grid } from '@mantine/core'
import { useForm } from '@mantine/form'
import React from 'react'
import { Bundles, SearchBundlesQuery } from '../../../generated/graphql'
import { SEARCH_BUNDLES } from '../../graphql/contracts'
import { BundleCard } from '../Atoms/BundleCard'

export interface IProps {
	onSelect: (bundle: Bundles) => void
	ctaText?: string
}

export const FindBundle: React.FC<IProps> = ({ onSelect, ctaText }) => {
	const form = useForm({
		initialValues: {
			searchTerm: ''
		},
		validate: {}
	})

	const { loading: isLoading, data } = useQuery<SearchBundlesQuery>(
		SEARCH_BUNDLES,
		{
			variables: {
				searchTerm: `${form.values.searchTerm}%`
			}
		}
	)

	return (
		<>
			<form onSubmit={form.onSubmit(_values => {})}>
				<TextInput
					radius="lg"
					size="md"
					placeholder="My Bundle"
					{...form.getInputProps('searchTerm')}
				/>
			</form>
			<Grid>
				{isLoading &&
					[...Array(6)].map((_, i) => (
						<Grid.Col md={6} key={`col-${i}`}>
							<Space h={8} />
							<Skeleton height="290px" width="100%" />
						</Grid.Col>
					))}

				{data?.Bundles.map(b => (
					<>
						<Grid.Col md={6} key={`col-${b.id}`}>
							<BundleCard
								key={`bundle-${b.id}`}
								bundle={b}
								ctaText={ctaText ?? 'Select'}
								onClick={() => onSelect(b)}
							/>
						</Grid.Col>
						<Space h={16} />
					</>
				))}
			</Grid>
		</>
	)
}
