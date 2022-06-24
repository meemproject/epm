import { useQuery } from '@apollo/client'
import log from '@kengoldfarb/log'
import {
	createStyles,
	Text,
	Center,
	Button,
	TextInput,
	Space,
	Modal,
	Group,
	Timeline,
	ThemeIcon,
	Title,
	Skeleton,
	Textarea
} from '@mantine/core'
import { formList, useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { MeemAPI } from '@meemproject/api'
import { getCuts, IVersion, upgrade } from '@meemproject/meem-contracts'
import { makeFetcher, useWallet } from '@meemproject/react'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import {
	Bulb,
	BulbOff,
	Check,
	CirclePlus,
	CircleX,
	Diamond,
	DiamondOff,
	FaceIdError,
	GripVertical
} from 'tabler-icons-react'
import {
	Contracts,
	GetBundleByIdQuery,
	GetContractsByAddressesQuery,
	GetContractsByIdQuery
} from '../../../generated/graphql'
import { GET_BUNDLE_BY_ID, GET_CONTRACTS_BY_ID } from '../../graphql/contracts'
import { diamondABI } from '../../lib/diamond'
import { Page } from '../../styles/Page'
import { Address } from '../Atoms/Address'
import { ContractCard } from '../Atoms/ContractCard'
import { FacetList } from '../Atoms/FacetList'
import { FindFacet, IProps as IFindFacetProps } from '../Atoms/FindFacet'
import { IconButton } from '../Atoms/IconButton'
import { BundleForm } from './BundleForm'

const useStyles = createStyles(_theme => ({
	section_wrapper: {
		display: 'flex'
	},
	facet_container: {
		width: '100%'
	}
}))

export const BundleContainer: React.FC = () => {
	const router = useRouter()
	const { classes } = useStyles()

	const form = useForm({
		initialValues: {
			facets: formList<{ selectors: string[]; contractId: string }>([]),
			name: '',
			description: ''
		},
		validate: {}
	})

	const [hasInitialized, setHasInitialized] = useState(false)
	const [isSaving, setIsSaving] = useState(false)

	const [isOpen, setIsOpen] = useState(false)
	const { signer, chainId, setChain } = useWallet()

	const {
		loading: isLoading,
		data,
		refetch
	} = useQuery<GetBundleByIdQuery>(GET_BUNDLE_BY_ID, {
		variables: {
			id: router.query.bundleId
		}
	})

	const {
		loading: isContractsLoading,
		data: contractsData,
		refetch: refetchContracts
	} = useQuery<GetContractsByIdQuery>(GET_CONTRACTS_BY_ID, {
		variables: {
			ids: form.values.facets.map(f => f.contractId)
		}
	})

	// const handleFacetSelect: IFindFacetProps['onClick'] = async contract => {
	// 	form.addListItem('facets', {
	// 		selectors: contract.functionSelectors,
	// 		contractId: contract.id
	// 	})
	// 	setIsOpen(false)
	// }

	const handleSave = async (values: typeof form.values) => {
		try {
			if (values.facets.length === 0) {
				showNotification({
					title: 'No Facets Added!',
					message: 'Add some facets to your bundle before saving',
					color: 'green'
				})
				return
			}

			const updateBundle = makeFetcher<
				MeemAPI.v1.UpdateBundle.IQueryParams,
				MeemAPI.v1.UpdateBundle.IRequestBody,
				MeemAPI.v1.UpdateBundle.IResponseBody
			>({
				method: MeemAPI.v1.UpdateBundle.method
			})

			await updateBundle(
				MeemAPI.v1.UpdateBundle.path({
					bundleId: router.query.bundleId as string
				}),
				undefined,
				{
					name: values.name,
					description: values.description,
					contractIds: values.facets.map(f => f.contractId)
				}
			)

			refetch()

			showNotification({
				title: 'Bundle Saved!',
				message: 'The bundle has been saved.',
				color: 'green'
			})
		} catch (e) {
			log.crit(e)
			showNotification({
				title: 'Error',
				message: 'An error occurred while saving the bundle.',
				color: 'red'
			})
		}
		setIsSaving(false)
	}

	useEffect(() => {
		if (!hasInitialized && data?.Bundles[0]) {
			form.setValues({
				name: data?.Bundles[0].name,
				description: data?.Bundles[0].description,
				facets: formList(
					data?.Bundles[0].BundleContracts.map(bc => ({
						selectors: bc.Contract?.functionSelectors,
						contractId: bc.Contract?.id
					}))
				)
			})

			setHasInitialized(true)
		}
	}, [hasInitialized, form, data])

	return (
		<Page>
			<form onSubmit={form.onSubmit(values => handleSave(values))}>
				<Title>Bundle</Title>
				<Space h={12} />
				<Text color="dimmed">
					Create a bundle of facets that you can easily deploy
					together
				</Text>
				<Space h={12} />
				{!hasInitialized && (
					<>
						<Skeleton width="100%" height={200} />
						<Space h={24} />
						<Skeleton width="100%" height={500} />
					</>
				)}
				{hasInitialized && (
					<>
						<BundleForm
							contracts={contractsData?.Contracts as Contracts[]}
							form={form}
							isLoading={isLoading || isContractsLoading}
						/>
						<Space h={24} />
						<Center>
							<Button
								type="submit"
								loading={isSaving}
								disabled={
									isLoading || isSaving || isContractsLoading
								}
							>
								Save
							</Button>
						</Center>
					</>
				)}
			</form>
		</Page>
	)
}
