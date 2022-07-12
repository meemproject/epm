import {
	createStyles,
	Text,
	Center,
	Group,
	Skeleton,
	Checkbox,
	Switch,
	Title,
	Space
} from '@mantine/core'
import { formList } from '@mantine/form'
import { UseFormReturnType } from '@mantine/form/lib/use-form'
import { showNotification } from '@mantine/notifications'
import { ethers } from 'ethers'
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
	proxyContract?: ContractInstances
	contracts?: Contracts[]
	isLoading?: boolean
	isEnabled?: boolean
}

export const FacetList: React.FC<IProps> = ({
	form,
	isLoading,
	contractInstances,
	isEnabled,
	proxyContract
}) => {
	const { classes } = useStyles()

	const handleToggle = (options: {
		functionName: string
		facet: {
			selectors: string[]
			target: string
		}
		isChecked: boolean
		selector: string
	}) => {
		const { functionName, facet, isChecked, selector } = options

		if (proxyContract?.Contract?.functionSelectors.includes(selector)) {
			showNotification({
				title: 'Function implemented on proxy',
				message: `${functionName} is implemented on the diamond contract and therefore is immutable.`,
				color: 'red'
			})
			return
		}

		// console.log({ facet, contractInstances })
		const updatedFacets: any[] = []

		form.values.facets.forEach((formFacet: any) => {
			const hasSelector = formFacet.selectors.includes(selector)
			let updatedFacet = {
				target: formFacet.target,
				selectors: [...formFacet.selectors]
			}

			if (formFacet.target === facet.target) {
				if (isChecked) {
					updatedFacet = {
						target: formFacet.target,
						selectors: [...formFacet.selectors, selector]
					}
				} else {
					const filteredSelectors = formFacet.selectors.filter(
						(s: string) => s !== selector
					)
					updatedFacet = {
						target: formFacet.target,
						selectors: filteredSelectors
					}
				}
			} else if (hasSelector) {
				const contractInstance = contractInstances?.find(
					c => c.address === formFacet.target
				)
				const filteredSelectors = formFacet.selectors.filter(
					(s: string) => s !== selector
				)
				updatedFacet = {
					target: formFacet.target,
					selectors: filteredSelectors
				}

				showNotification({
					title: 'Function implemented by multiple facets',
					message: `${functionName} is also implemented on ${contractInstance?.Contract?.name} and will be disabled`,
					color: 'yellow'
				})
			}

			updatedFacets.push(updatedFacet)
		})

		form.setFieldValue('facets', formList(updatedFacets))
	}

	return (
		<div className="facet_container">
			{isEnabled && (
				<>
					{form.values.facets.length > 1 && (
						<Text size="md" color="dimmed">
							Drag &amp; drop facets to re-order. Facets closest
							to the top will take priority over those below
						</Text>
					)}
					{form.values.facets.length === 1 && (
						<Text size="md" color="dimmed">
							Add facets to your contract to enable additional
							functionality.
						</Text>
					)}
				</>
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

									const abiInterface =
										new ethers.utils.Interface(
											contract?.abi ?? []
										)

									const functions =
										contract?.abi.filter(
											a => a.type === 'function'
										) ?? []

									const functionSelectorNameHash: Record<
										string,
										string
									> = {}

									functions.forEach(f => {
										const functionName = `${
											f.name
										}(${f.inputs
											.map(
												input =>
													`${input.type}${
														input.name
															? ` ${input.name}`
															: ''
													}`
											)
											.join(', ')})`

										functionSelectorNameHash[
											abiInterface.getSighash(
												ethers.utils.Fragment.from(f)
											)
										] = functionName
									})

									console.log({ abi: contract?.abi })

									return (
										<Draggable
											key={i}
											index={i}
											draggableId={i.toString()}
											isDragDisabled={!isEnabled}
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
															{isEnabled && (
																<div>
																	<GripVertical
																		size={
																			18
																		}
																	/>
																</div>
															)}
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
															>
																<div>
																	<Space
																		h={16}
																	/>
																	<Title
																		order={
																			4
																		}
																	>
																		Functions
																	</Title>
																	<Space
																		h={8}
																	/>
																	{contract?.functionSelectors.map(
																		(
																			selector: string
																		) => {
																			const isInUse =
																				facet.selectors.includes(
																					selector
																				)

																			const name =
																				functionSelectorNameHash[
																					selector
																				]

																			return (
																				<Switch
																					key={`${contract?.id}-${selector}`}
																					checked={
																						isInUse
																					}
																					label={
																						name
																					}
																					onChange={e => {
																						handleToggle(
																							{
																								functionName:
																									name,
																								facet,
																								isChecked:
																									e
																										.target
																										.checked,
																								selector
																							}
																						)
																					}}
																				/>
																			)
																		}
																	)}
																</div>
															</ContractCard>
															{isEnabled && (
																<div>
																	<IconButton
																		tooltip="Remove Facet"
																		onClick={() => {
																			form.removeListItem(
																				'facets',
																				[
																					i
																				]
																			)
																		}}
																		icon={
																			<CircleX color="red" />
																		}
																	/>
																</div>
															)}
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
