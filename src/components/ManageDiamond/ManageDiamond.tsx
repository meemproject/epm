/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@apollo/client'
import log from '@kengoldfarb/log'
import {
	createStyles,
	Container,
	Text,
	Center,
	Image,
	Loader,
	Button,
	Textarea,
	TextInput,
	Space,
	Select,
	JsonInput,
	Modal,
	Group,
	Timeline,
	ThemeIcon,
	Title
} from '@mantine/core'
import { formList, useForm } from '@mantine/form'
import { useClipboard } from '@mantine/hooks'
import { showNotification } from '@mantine/notifications'
import { MeemAPI } from '@meemproject/api'
import * as meemContracts from '@meemproject/meem-contracts'
import { IVersion, upgrade } from '@meemproject/meem-contracts'
import { makeFetcher, useWallet } from '@meemproject/react'
import { base64StringToBlob } from 'blob-util'
import { ethers } from 'ethers'
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState
} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Resizer from 'react-image-file-resizer'
import {
	ArrowLeft,
	Bulb,
	BulbOff,
	Check,
	CirclePlus,
	Diamond,
	DiamondOff,
	FaceIdError,
	GripVertical,
	Upload
} from 'tabler-icons-react'
import { useFilePicker } from 'use-file-picker'
import {
	Contracts,
	GetContractsByAddressesQuery,
	GetContractsQuery
} from '../../../generated/graphql'
import { GET_CONTRACTS_BY_ADDRESS } from '../../graphql/contracts'
import { diamondABI } from '../../lib/diamond'
import { CookieKeys } from '../../utils/cookies'
import { ContractCard } from '../Atoms/ContractCard'
import { SelectChain } from '../Atoms/SelectChain'
import { FindFacet, IProps as IFindFacetProps } from './FindFacet'

const useStyles = createStyles(theme => ({
	section_wrapper: {
		display: 'flex'
	}
}))

export const ManageDiamond: React.FC = () => {
	const router = useRouter()
	const { classes } = useStyles()
	const clipboard = useClipboard({ timeout: 500 })

	console.log({ query: router.query })

	const form = useForm({
		initialValues: {
			address: '',
			chain: MeemAPI.NetworkName.Rinkeby.toString(),
			facets: formList<{ selectors: string[]; target: string }>([])
		},
		validate: {
			address: val =>
				ethers.utils.isAddress(val)
					? null
					: 'A valid address is required'
		}
	})

	const [isLoading, setIsLoading] = useState(false)
	const [isDiamond, setIsDiamond] = useState(false)
	const [bytecode, setBytecode] = useState<string>()

	const [isOpen, setIsOpen] = useState(false)
	const [fetchedAddress, setFetchedAddress] = useState<string>()
	const [facets, setFacets] = useState<
		{ selectors: string[]; target: string }[]
	>([])
	const { web3Provider, accounts, signer, isConnected, connectWallet } =
		useWallet()

	const handleFacetSelect: IFindFacetProps['onClick'] = async contract => {
		const instance = contract.ContractInstances.find(
			c => c.chainId === +form.values.chain
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

		form.values.facets.push({
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
			// Compare facets
			await upgrade({
				chain: MeemAPI.Chain.Rinkeby,
				signer,
				proxyContractAddress: fetchedAddress,
				fromVersion,
				toVersion
			})
			form.values.facets.forEach(facet => {})
		} catch (e) {
			log.crit(e)
		}
	}

	const { loading, error, data } = useQuery<GetContractsByAddressesQuery>(
		GET_CONTRACTS_BY_ADDRESS,
		{
			variables: {
				addresses: form.values.facets.map(f => f.target)
			}
		}
	)

	console.log({ data })

	useEffect(() => {
		const fetchDiamondInfo = async () => {
			try {
				// return
				console.log('Fetching', form.values.address)
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

				const bytecode =
					bytecodeResult.status === 'fulfilled' &&
					bytecodeResult.value

				form.values.facets.splice(0, form.values.facets.length)
				// form.setFieldValue('facets', formList(result))
				result.forEach((f, i) => form.values.facets.push(f))
				setFacets(result)
				setBytecode(bytecode)
				setFetchedAddress(form.values.address)
				setIsDiamond(true)
			} catch (e) {
				setIsDiamond(false)
				setFetchedAddress(form.values.address)
			}
		}

		if (
			ethers.utils.isAddress(form.values.address) &&
			form.values.address !== fetchedAddress &&
			signer
		) {
			fetchDiamondInfo()
		}
	}, [form, fetchedAddress, signer, web3Provider])

	useEffect(() => {
		if (
			typeof router.query.address === 'string' &&
			router.query.address !== form.values.address
		) {
			form.setFieldValue('address', router.query.address)
		}
		if (
			typeof router.query.chain === 'string' &&
			router.query.chain !== form.values.chain
		) {
			form.setFieldValue('chain', router.query.chain)
		}
	}, [router, form])

	const isValidAddress = fetchedAddress
		? ethers.utils.isAddress(fetchedAddress)
		: false

	return (
		<Container size="md">
			<form
				onSubmit={form.onSubmit(async values => {
					try {
						const createContract = makeFetcher<
							MeemAPI.v1.CreateContract.IQueryParams,
							MeemAPI.v1.CreateContract.IRequestBody,
							MeemAPI.v1.CreateContract.IResponseBody
						>({
							method: MeemAPI.v1.CreateContract.method
						})
						await createContract(
							MeemAPI.v1.CreateContract.path(),
							undefined,
							{
								...values,
								contractType:
									values.contractType as MeemAPI.ContractType,
								chainId: +values.chainId,
								abi: JSON.parse(values.abi),
								functionSelectors:
									values.functionSelectors.length > 0
										? values.functionSelectors
												.split('\n')
												.map(v => v.trim())
										: []
							}
						)
						console.log(values)
					} catch (e) {
						console.log(e)
					}
				})}
			>
				<Space h={24} />
				<Container>
					<Text size="xl">Contract Info</Text>
					<Space h={12} />
					<SelectChain form={form} />
					<TextInput
						label="Contract Address"
						radius="lg"
						size="md"
						maxLength={42}
						placeholder="0x..."
						// required
						{...form.getInputProps('address')}
					/>
				</Container>
				<Space h={48} />
				<Container>
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
								<ThemeIcon color={bytecode ? 'green' : 'red'}>
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
				</Container>
				{isDiamond && (
					<>
						<Space h={48} />
						<Container>
							<div className={classes.section_wrapper}>
								<Text size="xl">Facets</Text>
								<Space w={12} />
								<Button
									type="submit"
									loading={isLoading}
									disabled={isLoading}
									onClick={() => setIsOpen(true)}
									leftIcon={<CirclePlus />}
								>
									Add Facet
								</Button>
							</div>
							<Space h={12} />
							<Text size="md" color="dimmed">
								Drag &amp; drop facets to re-order. Facets
								closest to the top will take priority over those
								below
							</Text>

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
													if (
														facet.target ===
														form.values.address
													) {
														return null
													}
													return (
														<Draggable
															key={facet.target}
															index={i}
															draggableId={i.toString()}
															isDragDisabled={
																facet.target ===
																fetchedAddress
															}
														>
															{p => {
																// const pr = form.getListInputProps(
																// 	'facets',
																// 	i,
																// 	'target'
																// )

																// console.log({ pr })

																return (
																	<Group
																		ref={
																			p.innerRef
																		}
																		mt="xs"
																		{...p.draggableProps}
																	>
																		<Center
																			{...p.dragHandleProps}
																		>
																			<div>
																				<GripVertical
																					size={
																						18
																					}
																				/>
																			</div>
																			<ContractCard
																				contract={
																					contract?.Contract
																				}
																			/>
																		</Center>
																		{/* <Text>{facet.target}</Text>
													<Text>
														{
															contract?.Contract
																?.name
														}
													</Text> */}
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
						</Container>
					</>
				)}
				{/* <Container>
				{facets.map(facet => {
					const contract = data?.ContractInstances.find(
						c =>
							c.address?.toLowerCase() ===
							facet.target.toLowerCase()
					)
					console.log({ contract })
					return <Text key={facet.target}>{facet.target}</Text>
				})}
			</Container> */}
				{/* <Container>
				<Select
					label="Facets"
					searchable
					data={
						facets?.Contracts.map(facet => ({
							value: facet.id,
							label: facet.name
						})) ?? []
					}
					// onSelect
					{...form.getInputProps('facets')}
				/>
			</Container> */}

				{isDiamond && (
					<Center>
						<Button
							type="submit"
							loading={isLoading}
							disabled={isLoading}
							onClick={handleSave}
						>
							Save
						</Button>
					</Center>
				)}
				<Modal
					opened={isOpen}
					onClose={() => setIsOpen(false)}
					size={900}
				>
					<FindFacet onClick={handleFacetSelect} />
				</Modal>
			</form>
		</Container>
	)
}
