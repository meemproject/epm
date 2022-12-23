import { useSubscription } from '@apollo/client'
import { TextInput, Space, Skeleton, Grid } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useMeemApollo } from '@meemproject/react'
import React from 'react'
import {
	Bundles,
	SubSearchBundlesSubscription
} from '../../../generated/graphql'
import { SUB_SEARCH_BUNDLES } from '../../graphql/contracts'
import { BundleCard } from '../Atoms/BundleCard'

export interface IProps {
	onSelect: (bundle: Bundles) => void
	ctaText?: string
}

export const FindBundle: React.FC<IProps> = ({ onSelect, ctaText }) => {
	const { anonClient } = useMeemApollo()
	const form = useForm({
		initialValues: {
			searchTerm: ''
		},
		validate: {}
	})

	const { loading: isLoading, data } =
		useSubscription<SubSearchBundlesSubscription>(SUB_SEARCH_BUNDLES, {
			variables: {
				searchTerm: `${form.values.searchTerm}%`
			},
			client: anonClient
		})

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
								bundle={b as Bundles}
								ctaText={ctaText ?? 'Select'}
								onClick={() => onSelect(b as Bundles)}
							/>
						</Grid.Col>
						<Space h={16} />
					</>
				))}
			</Grid>
		</>
	)
}
