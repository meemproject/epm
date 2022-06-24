import { createStyles, Text, Center, Group, Skeleton } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form/lib/use-form'
import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { CircleX, GripVertical } from 'tabler-icons-react'
import { ContractInstances, Contracts } from '../../../generated/graphql'
import { ContractCard } from './ContractCard'
import { IconButton } from './IconButton'

const useStyles = createStyles(_theme => ({
	section_wrapper: {
		display: 'flex'
	},
	facet_container: {
		width: '100%'
	},
	card: {
		width: '100%'
	}
}))

export interface IProps {
	// form: UseFormReturnType<{
	// 	facets: FormList<{
	// 		selectors: string[]
	// 		target: string
	// 	}>
	// }>
	form: UseFormReturnType<any>
	contractInstances?: ContractInstances[]
	contracts?: Contracts[]
	isLoading?: boolean
}

export const FacetList: React.FC<IProps> = ({
	form,
	isLoading,
	contractInstances,
	contracts
}) => {
	const { classes } = useStyles()

	console.log('FACETLIST', { contracts, v: form.values })

	return (
		<div className="facet_container">
			{form.values.facets.length > 1 && (
				<Text size="md" color="dimmed">
					Drag &amp; drop facets to re-order. Facets closest to the
					top will take priority over those below
				</Text>
			)}
			{form.values.facets.length === 1 && (
				<Text size="md" color="dimmed">
					Add facets to your contract to enable additional
					functionality.
				</Text>
			)}

			<DragDropContext
				onDragEnd={({ destination, source }) => {
					if (destination) {
						form.reorderListItem('facets', {
							from: source.index,
							to: destination.index
						})
					}
				}}
			>
				<Droppable droppableId="dnd-list" direction="vertical">
					{provided => (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{form.values.facets.map(
								(
									facet: {
										selectors: string[]
										target: string
										contractId: string
									},
									i: number
								) => {
									let contract: Contracts | undefined | null

									if (facet.target) {
										contract = contractInstances?.find(
											c =>
												c.address?.toLowerCase() ===
												facet.target.toLowerCase()
										)?.Contract
									} else if (facet.contractId) {
										contract = contracts?.find(
											c =>
												c.id?.toLowerCase() ===
												facet.contractId.toLowerCase()
										)
									}

									return (
										<Draggable
											key={i}
											index={i}
											draggableId={i.toString()}
										>
											{p => {
												return (
													<Group
														ref={p.innerRef}
														mt="xs"
														{...p.draggableProps}
													>
														<Center
															className={
																classes.facet_container
															}
															{...p.dragHandleProps}
														>
															<div>
																<GripVertical
																	size={18}
																/>
															</div>
															{isLoading && (
																<Skeleton
																	width="100%"
																	height={235}
																/>
															)}
															<ContractCard
																className={
																	classes.card
																}
																contract={
																	contract
																}
															/>
															<div>
																<IconButton
																	tooltip="Remove Facet"
																	onClick={() => {
																		form.removeListItem(
																			'facets',
																			[i]
																		)
																	}}
																	icon={
																		<CircleX color="red" />
																	}
																/>
															</div>
														</Center>
													</Group>
												)
											}}
										</Draggable>
									)
								}
							)}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	)
}
