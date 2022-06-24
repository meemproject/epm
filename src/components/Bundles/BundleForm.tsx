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
import React, { useState } from 'react'
import { CirclePlus } from 'tabler-icons-react'
import { Contracts } from '../../../generated/graphql'
import { FacetList } from '../Atoms/FacetList'
import { FindFacet, IProps as IFindFacetProps } from '../Atoms/FindFacet'

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
	contracts,
	isLoading
}) => {
	const { classes } = useStyles()
	const [isOpen, setIsOpen] = useState(false)

	const handleFacetSelect: IFindFacetProps['onClick'] = async contract => {
		form.addListItem('facets', {
			selectors: contract.functionSelectors,
			contractId: contract.id
		})
		setIsOpen(false)
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
				contracts={contracts}
				isLoading={isLoading}
			/>
			<Modal
				opened={isOpen}
				onClose={() => setIsOpen(false)}
				size={900}
				title={<Title>Find a Facet</Title>}
			>
				<FindFacet onClick={handleFacetSelect} />
			</Modal>
		</>
	)
}
