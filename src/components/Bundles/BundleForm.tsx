import { useSubscription } from '@apollo/client'
import {
	createStyles,
	Text,
	Button,
	TextInput,
	Space,
	Textarea,
	Modal,
	Title
} from '@mantine/core'
import { UseFormReturnType } from '@mantine/form/lib/use-form'
import { showNotification } from '@mantine/notifications'
import React, { useState } from 'react'
import { CirclePlus } from 'tabler-icons-react'
import {
	Contracts,
	SubGetContractsByIdSubscription
} from '../../../generated/graphql'
import { SUB_GET_CONTRACTS_BY_ID } from '../../graphql/contracts'
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

export interface IProps {
	form: UseFormReturnType<any>
	contracts: Contracts[]
	isLoading?: boolean
}

export const BundleForm: React.FC<IProps> = ({
	form,
	isLoading: isParentLoading
}) => {
	const { classes } = useStyles()
	const [isOpen, setIsOpen] = useState(false)

	const { loading: isContractsLoading, data } =
		useSubscription<SubGetContractsByIdSubscription>(
			SUB_GET_CONTRACTS_BY_ID,
			{
				variables: {
					ids: form.values.facets.map(
						(facet: { selectors: string[]; contractId: string }) =>
							facet.contractId
					)
				}
			}
		)

	const isLoading = isParentLoading || isContractsLoading

	const handleFacetSelect: IFindContractProps['onClick'] = async contract => {
		const existingFacet = form.values.facets.find(
			(f: any) => f.contractId === contract.id
		)

		if (existingFacet) {
			showNotification({
				title: 'Facet already added!',
				message: 'That facet has already been added.'
			})

			return
		}

		const usedSelectors: Record<string, string> = {}

		form.values.facets.forEach((f: any) => {
			f.selectors.forEach((s: any) => {
				usedSelectors[s] = f.target
			})
		})

		form.addListItem('facets', {
			selectors: contract.functionSelectors.filter(
				(fs: string) => !usedSelectors[fs]
			),
			target: contract.id,
			contractId: contract.id
		})

		showNotification({
			title: 'Contract added!',
			message: `${contract.name} has been added to the bundle.`,
			color: 'green'
		})
		// setIsOpen(false)
	}

	return (
		<>
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
					disabled={isLoading}
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
			<Modal
				opened={isOpen}
				onClose={() => setIsOpen(false)}
				size={900}
				title={<Title>Find a Facet</Title>}
			>
				<FindContract
					onClick={handleFacetSelect}
					disabledContractIds={form.values.facets.map(
						(f: { contractId: string }) => f.contractId
					)}
				/>
			</Modal>
		</>
	)
}
