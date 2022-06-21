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
	Group
} from '@mantine/core'
import { formList, useForm } from '@mantine/form'
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
import { ArrowLeft, GripVertical, Upload } from 'tabler-icons-react'
import { useFilePicker } from 'use-file-picker'
import {
	Contracts,
	GetContractsByAddressesQuery,
	GetContractsQuery
} from '../../../generated/graphql'
import { GET_CONTRACTS_BY_ADDRESS } from '../../graphql/contracts'
import { diamondABI } from '../../lib/diamond'
import { CookieKeys } from '../../utils/cookies'
import { SelectChain } from '../Atoms/SelectChain'
import { FindFacet, IProps as IFindFacetProps } from './FindFacet'

const useStyles = createStyles(theme => ({
	header: {
		backgroundColor: 'rgba(160, 160, 160, 0.05)',
		marginBottom: 60,
		display: 'flex',
		alignItems: 'end',
		flexDirection: 'row',
		paddingTop: 24,
		paddingBottom: 24,
		paddingLeft: 32,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			paddingTop: 12,
			paddingBottom: 12,
			paddingLeft: 16
		}
	},
	headerArrow: {
		marginRight: 32,
		cursor: 'pointer',
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			marginRight: 16
		}
	},
	headerPrompt: {
		fontSize: 16,
		fontWeight: 500,
		color: 'rgba(0, 0, 0, 0.6)',
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			marginBottom: 0
		}
	}
}))

export const ManageDiamond: React.FC = () => {
	const router = useRouter()
	const { classes } = useStyles()

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
	const [isOpen, setIsOpen] = useState(false)
	const [fetchedAddress, setFetchedAddress] = useState<string>()
	const [facets, setFacets] = useState<
		{ selectors: string[]; target: string }[]
	>([])
	const { web3Provider, accounts, signer, isConnected, connectWallet } =
		useWallet()

	const handleFacetSelect: IFindFacetProps['onClick'] = async contract => {
		console.log({ contract })
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
				console.log('Fetching', form.values.address)
				const diamond = new ethers.Contract(
					form.values.address,
					diamondABI,
					signer
				)

				const result = await diamond.facets()
				// const bytecode = await web3Provider?.getCode(
				// 	form.values.address
				// )
				// console.log({ result, bytecode })
				form.values.facets.splice(0, form.values.facets.length)
				// form.setFieldValue('facets', formList(result))
				result.forEach((f, i) => form.values.facets.push(f))
				setFacets(result)
				setFetchedAddress(form.values.address)
			} catch (e) {
				form.setErrors({
					address:
						'Address is not a valid Diamond (EIP-2535) contract'
				})
				console.log(e)
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

	return (
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
			<div className={classes.header}>
				<Text className={classes.headerPrompt}>Manage Contract</Text>
			</div>
			<Center>
				<Button
					type="submit"
					loading={isLoading}
					disabled={isLoading}
					onClick={() => setIsOpen(true)}
				>
					Add Facet
				</Button>
			</Center>

			<Container>
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
			<DragDropContext
				onDragEnd={({ destination, source }) => {
					if (destination?.index !== 0) {
						form.reorderListItem('facets', {
							from: source.index,
							to: destination?.index ?? 0
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
							{form.values.facets.map((facet, i) => {
								const contract = data?.ContractInstances.find(
									c =>
										c.address?.toLowerCase() ===
										facet.target.toLowerCase()
								)
								return (
									<Draggable
										key={facet.target}
										index={i}
										draggableId={i.toString()}
										isDragDisabled={
											facet.target === fetchedAddress
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
													ref={p.innerRef}
													mt="xs"
													{...p.draggableProps}
												>
													<Center
														{...p.dragHandleProps}
													>
														<GripVertical
															size={18}
														/>
													</Center>
													<Text>{facet.target}</Text>
													<Text>
														{
															contract?.Contract
																?.name
														}
													</Text>
												</Group>
											)
										}}
									</Draggable>
								)
							})}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
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
			<Modal opened={isOpen} onClose={() => setIsOpen(false)}>
				<FindFacet onClick={handleFacetSelect} />
			</Modal>
		</form>
	)
}
