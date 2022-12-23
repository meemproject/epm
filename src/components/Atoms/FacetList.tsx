import {
	createStyles,
	Text,
	Center,
	Skeleton,
	Switch,
	Title,
	Space
} from '@mantine/core'
import { formList } from '@mantine/form'
import { UseFormReturnType } from '@mantine/form/lib/use-form'
import { showNotification } from '@mantine/notifications'
import { ethers } from 'ethers'
import React from 'react'
import { CircleX } from 'tabler-icons-react'
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
	contracts,
	isEnabled,
	proxyContract
}) => {
	const { classes } = useStyles()

	const handleToggle = (options: {
		functionName: string
		facet: {
			selectors: string[]
			target: string
			contractId?: string
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

		const updatedFacets: any[] = []

		form.values.facets.forEach((formFacet: any) => {
			const hasSelector = formFacet.selectors.includes(selector)
			let updatedFacet = {
				target: formFacet.target,
				contractId: formFacet.target,
				selectors: [...formFacet.selectors]
			}

			if (formFacet.target === facet.target) {
				if (isChecked) {
					updatedFacet = {
						target: formFacet.target,
						contractId: formFacet.target,
						selectors: [...formFacet.selectors, selector]
					}
				} else {
					const filteredSelectors = formFacet.selectors.filter(
						(s: string) => s !== selector
					)
					updatedFacet = {
						target: formFacet.target,
						contractId: formFacet.target,
						selectors: filteredSelectors
					}
				}
			} else if (hasSelector) {
				const contractInstance = contractInstances?.find(
					c => c.address === formFacet.target
				)
				const contract = contractInstances
					? contractInstance?.Contract
					: contracts?.find(c => c.id === formFacet.contractId)
				const filteredSelectors = formFacet.selectors.filter(
					(s: string) => s !== selector
				)
				updatedFacet = {
					target: formFacet.target,
					contractId: formFacet.target,
					selectors: filteredSelectors
				}

				showNotification({
					title: 'Function implemented by multiple facets',
					message: `${functionName} is also implemented on ${contract?.name} and will be disabled`,
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
					{form.values.facets.length === 0 && (
						<Text size="md" color="dimmed">
							Add facets to your contract to enable additional
							functionality.
						</Text>
					)}
				</>
			)}

			<div>
				{form.values.facets.map(
					(
						facet: {
							selectors: string[]
							target: string
							contractId?: string
						},
						i: number
					) => {
						let contract: Contracts | undefined | null

						if (facet.target) {
							const contractInstance = contractInstances?.find(
								c => c.address === facet.target
							)
							contract = contractInstances
								? contractInstance?.Contract
								: contracts?.find(
										c => c.id === facet.contractId
								  )
						}

						const abiInterface = new ethers.utils.Interface(
							contract?.abi ?? []
						)

						const functions =
							contract?.abi.filter(
								(a: any) => a.type === 'function'
							) ?? []

						const functionSelectorNameHash: Record<string, string> =
							{}

						functions.forEach((f: any) => {
							const functionName = `${f.name}(${f.inputs
								.map(
									(input: { name: string; type: string }) =>
										`${input.type}${
											input.name ? ` ${input.name}` : ''
										}`
								)
								.join(', ')})`

							functionSelectorNameHash[
								abiInterface.getSighash(
									ethers.utils.Fragment.from(f)
								)
							] = functionName
						})

						return (
							<Center
								className={classes.facet_container}
								key={`facet-${facet.target}`}
							>
								{isLoading && (
									<Skeleton width="100%" height={235} />
								)}
								{!isLoading && (
									<>
										<ContractCard
											className={classes.card}
											contract={contract}
										>
											<div>
												<Space h={16} />
												<Title order={4}>
													Functions
												</Title>
												<Space h={8} />
												{contract?.functionSelectors.map(
													(selector: string) => {
														const isInUse =
															facet.selectors.includes(
																selector
															)

														const name =
															functionSelectorNameHash[
																selector
															]

														return (
															<>
																<Switch
																	key={`${contract?.id}-${selector}`}
																	disabled={
																		!isEnabled
																	}
																	checked={
																		isInUse
																	}
																	label={name}
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
																<Space h={8} />
															</>
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
															[i]
														)
													}}
													icon={
														<CircleX color="red" />
													}
												/>
											</div>
										)}
									</>
								)}
								<Space h={16} />
							</Center>
						)
					}
				)}
			</div>
		</div>
	)
}
