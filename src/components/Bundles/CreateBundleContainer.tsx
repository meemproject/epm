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
	Title,
	Textarea
} from '@mantine/core'
import { formList, useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { MeemAPI } from '@meemproject/api'
import { makeFetcher } from '@meemproject/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { CirclePlus } from 'tabler-icons-react'
import { Contracts, GetContractsByIdQuery } from '../../../generated/graphql'
import { GET_CONTRACTS_BY_ID } from '../../graphql/contracts'
import { Page } from '../../styles/Page'
import { FacetList } from '../Atoms/FacetList'
import {
	FindContract,
	IProps as IFindContractProps
} from '../Atoms/FindContract'

const useStyles = createStyles(_theme => ({
	section_wrapper: {
		display: 'flex'
	},
	facet_container: {
		width: '100%'
	}
}))

export const CreateBundleContainer: React.FC = () => {
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

	const [isSaving, setIsSaving] = useState(false)

	const [isOpen, setIsOpen] = useState(false)

	const { loading: isLoading, data } = useQuery<GetContractsByIdQuery>(
		GET_CONTRACTS_BY_ID,
		{
			variables: {
				ids: form.values.facets.map(facet => facet.contractId)
			}
		}
	)

	const handleFacetSelect: IFindContractProps['onClick'] = async contract => {
		form.addListItem('facets', {
			selectors: contract.functionSelectors,
			contractId: contract.id
		})
		setIsOpen(false)
	}

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

			const createBundle = makeFetcher<
				MeemAPI.v1.CreateBundle.IQueryParams,
				MeemAPI.v1.CreateBundle.IRequestBody,
				MeemAPI.v1.CreateBundle.IResponseBody
			>({
				method: MeemAPI.v1.CreateBundle.method
			})

			const { bundleId } = await createBundle(
				MeemAPI.v1.CreateBundle.path(),
				undefined,
				{
					name: values.name,
					description: values.description,
					contractIds: values.facets.map(f => f.contractId)
				}
			)

			showNotification({
				title: 'Bundle Created!',
				message: 'The bundle has been created.',
				color: 'green'
			})

			router.push('/bundles', {
				query: {
					bundleId
				}
			})
		} catch (e) {
			log.crit(e)
			showNotification({
				title: 'Error',
				message: 'An error occurred while creating the bundle.',
				color: 'red'
			})
		}
		setIsSaving(false)
	}

	return (
		<Page>
			<form onSubmit={form.onSubmit(values => handleSave(values))}>
				<Title>Create Bundle</Title>
				<Space h={12} />
				<Text color="dimmed">
					Create a bundle of facets that you can easily deploy
					together
				</Text>
				<Space h={12} />
				<TextInput
					label="Name"
					radius="lg"
					size="md"
					placeholder="My Bundle"
					{...form.getInputProps('name')}
				/>
				<Space h={12} />
				<Textarea
					label="Description"
					radius="lg"
					size="md"
					minRows={3}
					maxRows={5}
					maxLength={5000}
					placeholder="This bundle combines blah blah..."
					{...form.getInputProps('description')}
				/>
				<Space h={24} />
				<div className={classes.section_wrapper}>
					<Text size="xl">Facets</Text>
					<Space w={12} />
					<Button
						disabled={isLoading || isSaving}
						onClick={() => setIsOpen(true)}
						leftIcon={<CirclePlus />}
					>
						Add Facet
					</Button>
				</div>
				<Space h={12} />
				<FacetList
					form={form}
					contracts={data?.Contracts as Contracts[]}
					isLoading={isLoading}
					isEnabled
				/>

				{form.values.facets.length > 0 && (
					<div>
						<Space h={24} />
						<Center>
							<Button
								type="submit"
								loading={isSaving}
								disabled={isLoading || isSaving}
							>
								Save
							</Button>
						</Center>
					</div>
				)}

				<Modal
					opened={isOpen}
					onClose={() => setIsOpen(false)}
					size={900}
					title={<Title>Find a Facet</Title>}
				>
					<FindContract onClick={handleFacetSelect} />
				</Modal>
			</form>
		</Page>
	)
}
