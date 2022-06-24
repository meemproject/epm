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
	Skeleton
} from '@mantine/core'
import { formList, useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { MeemAPI } from '@meemproject/api'
import { getCuts, IVersion, upgrade } from '@meemproject/meem-contracts'
import { useWallet } from '@meemproject/react'
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
import { GetContractsByAddressesQuery } from '../../../generated/graphql'
import { GET_CONTRACTS_BY_ADDRESS } from '../../graphql/contracts'
import { diamondABI } from '../../lib/diamond'
import { Page } from '../../styles/Page'
import { Address } from '../Atoms/Address'
import { ContractCard } from '../Atoms/ContractCard'
import { IconButton } from '../Atoms/IconButton'
import { FindFacet, IProps as IFindFacetProps } from './FindFacet'

const useStyles = createStyles(_theme => ({
	section_wrapper: {
		display: 'flex'
	},
	facet_container: {
		width: '100%'
	}
}))

export const ManageDiamondContainer: React.FC = () => {
	const router = useRouter()
	const { classes } = useStyles()

	const form = useForm({
		initialValues: {
			address: '',
			chainId: '4',
			facets: formList<{ selectors: string[]; target: string }>([])
		},
		validate: {
			address: val =>
				ethers.utils.isAddress(val)
					? null
					: 'A valid address is required'
		}
	})

	const [isDiamond, setIsDiamond] = useState(false)
	const [isDirty, setIsDirty] = useState(false)
	const [hasInitialized, setHasInitialized] = useState(false)
	const [isSaving, setIsSaving] = useState(false)
	const [bytecode, setBytecode] = useState<string>()

	const [isOpen, setIsOpen] = useState(false)
	const [fetchedAddress, setFetchedAddress] = useState<string>()
	const [fetchedChainId, setFetchedChainId] = useState<number>()
	const [facets, setFacets] = useState<
		{ selectors: string[]; target: string }[]
	>([])
	const { web3Provider, signer, chainId, setChain } = useWallet()

	const {
		loading: isLoading,
		data,
		refetch
	} = useQuery<GetContractsByAddressesQuery>(GET_CONTRACTS_BY_ADDRESS, {
		variables: {
			addresses: [...form.values.facets]
				.sort((a, b) => {
					if (a.target < b.target) {
						return -1
					}
					if (a.target > b.target) {
						return 1
					}
					return 0
				})
				.map(f => f.target)
		}
	})

	const handleFacetSelect: IFindFacetProps['onClick'] = async contract => {
		const instance = contract.ContractInstances.find(
			c => c.chainId === chainId
		)
		if (!instance) {
			showNotification({
				title: 'Contract Not Deployed',
				message: 'The contract has not been deployed yet!'
			})

			return
		}

		const existingFacet = form.values.facets.find(
			f => f.target === instance.address
		)

		if (existingFacet) {
			showNotification({
				title: 'Facet already added!',
				message: 'That facet has already been added.'
			})

			return
		}

		form.addListItem('facets', {
			selectors: contract.functionSelectors,
			target: contract.ContractInstances[0].address
		})
		setIsOpen(false)
	}

	const handleSave = async () => {
		try {
			if (!signer || !fetchedAddress) {
				return
			}
			setIsSaving(true)
			const fromVersion: IVersion = {}
			facets.forEach(facet => {
				if (facet.target !== fetchedAddress) {
					fromVersion[facet.target] = {
						address: facet.target,
						functionSelectors: facet.selectors
					}
				}
			})
			const toVersion: IVersion = {}
			form.values.facets.forEach(facet => {
				if (facet.target !== fetchedAddress) {
					toVersion[facet.target] = {
						address: facet.target,
						functionSelectors: facet.selectors
					}
				}
			})

			await upgrade({
				chain: MeemAPI.Chain.Rinkeby,
				signer,
				proxyContractAddress: fetchedAddress,
				fromVersion,
				toVersion
			})
			refetch()
			showNotification({
				title: 'Success!',
				message: 'The contract has been upgraded.',
				color: 'green'
			})
		} catch (e) {
			log.crit(e)
		}
		setIsSaving(false)
	}

	useEffect(() => {
		const fetchDiamondInfo = async () => {
			try {
				const diamond = new ethers.Contract(
					form.values.address,
					diamondABI,
					signer
				)

				const [facetResult, bytecodeResult] = await Promise.allSettled([
					diamond.facets(),
					web3Provider?.getCode(form.values.address)
				])

				const result =
					facetResult.status === 'fulfilled' && facetResult.value

				const bc =
					bytecodeResult.status === 'fulfilled' &&
					bytecodeResult.value

				form.values.facets.splice(0, form.values.facets.length)
				// form.setFieldValue('facets', formList(result))
				if (Array.isArray(result)) {
					result.forEach((f, i) => {
						if (
							f.target.toLowerCase() !==
							form.values.address.toLowerCase()
						)
							form.values.facets.push(f)
					})
				}

				setFacets(result)
				setBytecode(bc && bc !== '0x' ? bc : undefined)
				setFetchedAddress(form.values.address)
				setFetchedChainId(chainId)
				setIsDiamond(!!result)
			} catch (e) {
				setIsDiamond(false)
				setFetchedAddress(form.values.address)
			}
		}

		log.debug('checking...', {
			address: form.values.address,
			fetchedAddress,
			chainId,
			fetchedChainId,
			isAddress: ethers.utils.isAddress(form.values.address),
			signer: !!signer,
			diffAddress: form.values.address !== fetchedAddress
		})

		if (
			ethers.utils.isAddress(form.values.address) &&
			!!signer &&
			(form.values.address !== fetchedAddress ||
				chainId !== fetchedChainId)
		) {
			log.debug('Fetching diamond info')
			fetchDiamondInfo()
		}
	}, [form, fetchedAddress, signer, web3Provider, chainId, fetchedChainId])

	useEffect(() => {
		if (!hasInitialized) {
			if (
				typeof router.query.address === 'string' &&
				router.query.address !== form.values.address
			) {
				form.setFieldValue('address', router.query.address)
			}
			if (
				typeof router.query.chainId === 'string' &&
				+router.query.chainId !== chainId
			) {
				setChain(+router.query.chainId)
			}

			if (
				typeof router.query.chainId === 'string' ||
				typeof router.query.address === 'string'
			) {
				setHasInitialized(true)
			}
		} else if (
			// router.query.address !== form.values.address ||
			!router.query.chainId ||
			+router.query.chainId !== chainId
		) {
			router.push(
				{
					pathname: '/manage',
					query: {
						address: form.values.address ?? '',
						chainId
					}
				},
				undefined,
				{ shallow: true }
			)
		}
	}, [router, form, setChain, chainId, hasInitialized])

	useEffect(() => {
		if (!facets) {
			return
		}
		const fromVersion: IVersion = {}
		facets.forEach(facet => {
			if (facet.target !== fetchedAddress) {
				fromVersion[facet.target] = {
					address: facet.target,
					functionSelectors: facet.selectors
				}
			}
		})
		const toVersion: IVersion = {}
		form.values.facets.forEach(facet => {
			if (facet.target !== fetchedAddress) {
				toVersion[facet.target] = {
					address: facet.target,
					functionSelectors: facet.selectors
				}
			}
		})

		const cuts = getCuts({
			proxyContractAddress: form.values.address,
			toVersion,
			fromVersion
		})

		if (cuts.length > 0) {
			setIsDirty(true)
		} else {
			setIsDirty(false)
		}
	}, [facets, fetchedAddress, form.values.facets, form.values.address])

	const isValidAddress = fetchedAddress
		? ethers.utils.isAddress(fetchedAddress)
		: false

	return (
		<Page>
			<form onSubmit={form.onSubmit(() => handleSave())}>
				<Space h={24} />

				<Title>Contract Info</Title>
				<Space h={12} />
				<TextInput
					label="Contract Address"
					radius="lg"
					size="md"
					maxLength={42}
					placeholder="0x..."
					onBlur={() => {
						router.push(
							{
								pathname: '/manage',
								query: {
									address: form.values.address ?? '',
									chainId
								}
							},
							undefined,
							{ shallow: true }
						)
					}}
					// disabled={!!router.query.address}
					// required
					{...form.getInputProps('address')}
				/>
				<Space h={48} />

				{isValidAddress && !fetchedAddress && (
					<>
						<Skeleton width="100%" height={300} />
						<Space h={12} />
						<Skeleton width="100%" height={100} />
						<Space h={12} />
						<Skeleton width="100%" height={200} />
						<Skeleton width="100%" height={200} />
					</>
				)}

				{fetchedAddress && (
					<>
						<Text size="xl">Features</Text>
						<Space h={12} />
						<Timeline bulletSize={24} lineWidth={2}>
							<Timeline.Item
								active
								bullet={
									<ThemeIcon
										color={isValidAddress ? 'green' : 'red'}
									>
										{isValidAddress ? (
											<Check size={20} />
										) : (
											<FaceIdError size={20} />
										)}
									</ThemeIcon>
								}
								title={
									isValidAddress
										? 'Valid Address Format'
										: 'Not a Valid Address Format'
								}
							>
								{!isValidAddress && (
									<Text color="dimmed" size="sm">
										This
									</Text>
								)}
							</Timeline.Item>
							<Timeline.Item
								active
								bullet={
									<ThemeIcon
										color={bytecode ? 'green' : 'red'}
									>
										{bytecode ? (
											<Bulb size={20} />
										) : (
											<BulbOff size={20} />
										)}
									</ThemeIcon>
								}
								title={
									bytecode
										? 'Smart Contract'
										: 'Not a Smart Contract'
								}
							>
								{!bytecode && (
									<Text color="dimmed" size="sm">
										This address is not a smart contract.
									</Text>
								)}

								<Address
									address={fetchedAddress}
									chainId={chainId}
								/>
							</Timeline.Item>
							{bytecode && (
								<Timeline.Item
									active
									bullet={
										<ThemeIcon
											color={isDiamond ? 'green' : 'red'}
										>
											{isDiamond ? (
												<Diamond size={20} />
											) : (
												<DiamondOff size={20} />
											)}
										</ThemeIcon>
									}
									title={
										isDiamond
											? 'Upgradeable Contract'
											: 'Not Upgradeable'
									}
								>
									{isDiamond && (
										<Text color="dimmed" size="sm">
											This is a{' '}
											<a href="https://eips.ethereum.org/EIPS/eip-2535">
												Diamond Proxy Contract
											</a>
										</Text>
									)}
								</Timeline.Item>
							)}
						</Timeline>
						{isDiamond && (
							<>
								<Space h={48} />

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
								{form.values.facets.length > 1 && (
									<Text size="md" color="dimmed">
										Drag &amp; drop facets to re-order.
										Facets closest to the top will take
										priority over those below
									</Text>
								)}
								{form.values.facets.length === 1 && (
									<Text size="md" color="dimmed">
										Add facets to your contract to enable
										additional functionality.
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
									<Droppable
										droppableId="dnd-list"
										direction="vertical"
									>
										{provided => (
											<div
												{...provided.droppableProps}
												ref={provided.innerRef}
											>
												{form.values.facets.map(
													(facet, i) => {
														const contract =
															data?.ContractInstances.find(
																c =>
																	c.address?.toLowerCase() ===
																	facet.target.toLowerCase()
															)
														return (
															<Draggable
																key={i}
																index={i}
																draggableId={i.toString()}
															>
																{p => {
																	return (
																		<Group
																			ref={
																				p.innerRef
																			}
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
																						size={
																							18
																						}
																					/>
																				</div>
																				{isLoading && (
																					<Skeleton
																						width="100%"
																						height={
																							235
																						}
																					/>
																				)}
																				<ContractCard
																					contract={
																						contract?.Contract
																					}
																				/>
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
								{isDirty && (
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
							</>
						)}
					</>
				)}
				<Modal
					opened={isOpen}
					onClose={() => setIsOpen(false)}
					size={900}
					title={<Title>Find a Facet</Title>}
				>
					<FindFacet onClick={handleFacetSelect} />
				</Modal>
			</form>
		</Page>
	)
}
