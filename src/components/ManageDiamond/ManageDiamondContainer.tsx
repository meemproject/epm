import { useSubscription } from '@apollo/client'
import log from '@kengoldfarb/log'
import {
	createStyles,
	Text,
	Center,
	Button,
	TextInput,
	Space,
	Modal,
	Timeline,
	ThemeIcon,
	Title,
	Skeleton,
	Tooltip
} from '@mantine/core'
import { formList, useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import {
	getCuts,
	IFacetVersion,
	upgrade,
	diamondABI
} from '@meemproject/meem-contracts'
import { useMeemApollo, useWallet } from '@meemproject/react'
import { MeemAPI, makeFetcher } from '@meemproject/sdk'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import {
	Bulb,
	BulbOff,
	Check,
	CirclePlus,
	Diamond,
	DiamondOff,
	Download,
	FaceIdError,
	Pencil
} from 'tabler-icons-react'
import {
	Bundles,
	ContractInstances,
	SubGetContractsByAddressesSubscription,
	WalletContractInstances
} from '../../../generated/graphql'
import { SUB_GET_CONTRACTS_BY_ADDRESS } from '../../graphql/contracts'
import { downloadFile, formatFilename } from '../../lib/utils'
import { Page } from '../../styles/Page'
import { Address } from '../Atoms/Address'
import { DemoCode } from '../Atoms/DemoCode'
import { EditWalletContract } from '../Atoms/EditWalletContract'
import { FacetList } from '../Atoms/FacetList'
import {
	FindContract,
	IProps as IFindContractProps
} from '../Atoms/FindContract'
import { IconButton } from '../Atoms/IconButton'
import { FindBundle } from '../Bundles/FindBundle'

const useStyles = createStyles(_theme => ({
	row: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row'
	},
	section_wrapper: {
		display: 'flex'
	},
	facet_container: {
		width: '100%'
	},
	save_button: {
		position: 'fixed',
		bottom: '32px',
		right: '32px',
		zIndex: 100
	}
}))

export const ManageDiamondContainer: React.FC = () => {
	const { anonClient } = useMeemApollo()
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
	const [isEditing, setIsEditing] = useState(false)
	const [hasInitialized, setHasInitialized] = useState(false)
	const [isSaving, setIsSaving] = useState(false)
	const [bytecode, setBytecode] = useState<string>()

	const [isOpen, setIsOpen] = useState(false)
	const [isBundleOpen, setIsBundleOpen] = useState(false)
	const [fetchedAddress, setFetchedAddress] = useState<string>()
	const [fetchedChainId, setFetchedChainId] = useState<number>()
	const [contractOwner, setContractOwner] = useState<string>()
	const [isUpgrader, setIsUpgrader] = useState<boolean>(false)
	const [hasFoundAllFacets, setHasFoundAllFacets] = useState(true)
	const [facets, setFacets] = useState<
		{ selectors: string[]; target: string }[]
	>([])
	const { web3Provider, signer, chainId, setChain, accounts } = useWallet()

	const { loading: isLoading, data } =
		useSubscription<SubGetContractsByAddressesSubscription>(
			SUB_GET_CONTRACTS_BY_ADDRESS,
			{
				variables: {
					addresses: [
						...form.values.facets,
						{ target: form.values.address }
					]
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
				},
				fetchPolicy: 'no-cache',
				client: anonClient
			}
		)

	const isValidAddress = fetchedAddress
		? ethers.utils.isAddress(fetchedAddress)
		: false

	const isContractOwner = !!(
		accounts &&
		contractOwner &&
		accounts[0] &&
		accounts[0].toLowerCase() === contractOwner?.toLowerCase()
	)

	const proxyContract = data?.ContractInstances.find(
		ci => ci.address.toLowerCase() === form.values.address.toLowerCase()
	)

	const walletContract = proxyContract?.WalletContractInstances[0]

	const facetContractInstances = data?.ContractInstances.filter(
		ci => ci.address.toLowerCase() !== form.values.address.toLowerCase()
	)

	let abi = proxyContract?.Contract?.abi ?? []
	facetContractInstances?.forEach(fc => {
		if (fc?.Contract?.abi) {
			abi = [...abi, ...fc.Contract.abi]
		}
	})

	const handleFacetSelect: IFindContractProps['onClick'] = async contract => {
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

		const usedSelectors: Record<string, string> = {}

		proxyContract?.Contract?.functionSelectors.forEach((s: any) => {
			usedSelectors[s] = proxyContract.address
		})

		form.values.facets.forEach(f => {
			f.selectors.forEach(s => {
				usedSelectors[s] = f.target
			})
		})

		form.addListItem('facets', {
			selectors: contract.functionSelectors.filter(
				(fs: string) => !usedSelectors[fs]
			),
			target: contract.ContractInstances[0].address
		})
		setIsOpen(false)
	}

	const handleBundleSelect = async (bundle: Bundles) => {
		const updatedFacets = form.values.facets.map(f => ({
			selectors: f.selectors,
			target: f.target
		}))

		bundle.BundleContracts.forEach(bc => {
			const contract = bc.Contract
			if (contract) {
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

				const existingFacet = updatedFacets.find(
					f => f.target === instance.address
				)

				if (!existingFacet) {
					const usedSelectors: Record<string, string> = {}

					updatedFacets.forEach(f => {
						f.selectors.forEach(s => {
							usedSelectors[s] = f.target
						})
					})

					updatedFacets.push({
						selectors: contract.functionSelectors.filter(
							(fs: string) => !usedSelectors[fs]
						),
						target: contract.ContractInstances[0].address
					})
				}
			}
		})

		form.setFieldValue('facets', formList(updatedFacets))

		setIsBundleOpen(false)
	}

	const handleDownloadTypes = async () => {
		try {
			if (!signer || !fetchedAddress) {
				return
			}
			const genTypes = makeFetcher<
				MeemAPI.v1.GenerateTypes.IQueryParams,
				MeemAPI.v1.GenerateTypes.IRequestBody,
				MeemAPI.v1.GenerateTypes.IResponseBody
			>({
				method: MeemAPI.v1.GenerateTypes.method
			})

			const fileName = proxyContract?.Contract?.name ?? 'MyContract'

			const { types } = await genTypes(
				MeemAPI.v1.GenerateTypes.path(),
				undefined,
				{
					abi,
					name: fileName
				}
			)

			downloadFile(`${fileName}.ts`, types)
			showNotification({
				title: 'Success!',
				message: 'Types file generated.',
				color: 'green'
			})
		} catch (e) {
			log.crit(e)
		}
		setIsSaving(false)
	}

	const handleDownloadABI = async () => {
		try {
			const fileName = proxyContract?.Contract?.name ?? 'MyContract'

			let facetABI: Record<string, any>[] = []
			facetContractInstances?.forEach(fc => {
				if (fc.Contract?.abi) {
					facetABI = facetABI.concat(fc.Contract?.abi)
				}
			})

			downloadFile(
				`${formatFilename(fileName)}.json`,
				JSON.stringify(facetABI)
			)
			showNotification({
				title: 'Success!',
				message: 'ABI file generated.',
				color: 'green'
			})
		} catch (e) {
			log.crit(e)
		}
		setIsSaving(false)
	}

	const fetchDiamondInfo = useCallback(async () => {
		try {
			const diamond = new ethers.Contract(
				form.values.address,
				diamondABI,
				signer
			)

			const [facetResult, bytecodeResult, ownerResult, hasRoleResult] =
				await Promise.allSettled([
					diamond.facets(),
					web3Provider?.getCode(form.values.address),
					diamond.owner(),
					diamond.hasRole(
						'0x189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e3',
						signer?.getAddress()
					)
				])

			const result =
				facetResult.status === 'fulfilled' && facetResult.value

			const bc =
				bytecodeResult.status === 'fulfilled' && bytecodeResult.value

			const owner =
				ownerResult.status === 'fulfilled' && ownerResult.value

			const hasRole =
				hasRoleResult.status === 'fulfilled' && hasRoleResult.value

			form.values.facets.splice(0, form.values.facets.length)

			if (Array.isArray(result)) {
				result.forEach(f => {
					if (
						f.target.toLowerCase() !==
						form.values.address.toLowerCase()
					)
						form.values.facets.push(f)
				})
			}

			setFacets(result)
			setBytecode(bc && bc !== '0x' ? bc : undefined)
			setContractOwner(owner)
			setIsUpgrader(hasRole)
			setFetchedAddress(form.values.address)
			setFetchedChainId(chainId)
			setIsDiamond(!!result)

			log.debug('Diamond Fetched')
		} catch (e) {
			log.crit(e)
			setIsDiamond(false)
			setFetchedAddress(form.values.address)
		}
	}, [form, signer, web3Provider, chainId])

	useEffect(() => {
		if (
			ethers.utils.isAddress(form.values.address) &&
			!!signer &&
			(form.values.address !== fetchedAddress ||
				chainId !== fetchedChainId)
		) {
			log.debug('Fetching diamond info')
			fetchDiamondInfo()
		}
	}, [
		form,
		fetchedAddress,
		signer,
		web3Provider,
		chainId,
		fetchedChainId,
		fetchDiamondInfo
	])

	const handleSave = async () => {
		try {
			if (!signer || !fetchedAddress) {
				return
			}
			setIsSaving(true)
			const fromVersion: IFacetVersion[] = []
			facets.forEach(facet => {
				fromVersion.push({
					address: facet.target,
					functionSelectors: facet.selectors
				})
			})
			const toVersion: IFacetVersion[] = []

			form.values.facets.forEach(facet => {
				if (facet.target !== fetchedAddress) {
					const contractInstance = data?.ContractInstances.find(
						ci => ci.address === facet.target
					)

					if (contractInstance) {
						toVersion.push({
							address: facet.target,
							functionSelectors: facet.selectors
						})
					}
				}
			})

			await upgrade({
				signer,
				proxyContractAddress: fetchedAddress,
				fromVersion,
				toVersion
			})

			fetchDiamondInfo()
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
		if (!hasInitialized && chainId) {
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
			hasInitialized &&
			(!router.query.chainId || +router.query.chainId !== chainId)
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
		if (!facets || isLoading) {
			return
		}

		const fromVersion: IFacetVersion[] = []
		facets.forEach(facet => {
			if (facet.target !== fetchedAddress) {
				fromVersion.push({
					address: facet.target,
					functionSelectors: facet.selectors
				})
			}
		})
		const toVersion: IFacetVersion[] = []
		form.values.facets.forEach(facet => {
			if (facet.target !== fetchedAddress) {
				const contractInstance = data?.ContractInstances.find(
					ci => ci.address === facet.target
				)

				if (contractInstance) {
					toVersion.push({
						address: facet.target,
						functionSelectors: facet.selectors
					})
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
	}, [
		facets,
		fetchedAddress,
		form.values.facets,
		form.values.address,
		data,
		isLoading
	])

	useEffect(() => {
		if (!isLoading && data && data.ContractInstances.length > 0) {
			for (let i = 0; i < facets.length; i += 1) {
				const facet = facets[i]
				const contractInstance = data.ContractInstances.find(
					ci => ci.address === facet.target
				)

				if (!contractInstance) {
					setHasFoundAllFacets(false)
					break
				}
			}

			setHasFoundAllFacets(true)
		}
	}, [data, isLoading, facets])

	const shouldShowUpgradeControls = isContractOwner || isUpgrader

	return (
		<Page>
			<form onSubmit={form.onSubmit(() => handleSave())}>
				{!walletContract && <Title>Contract Info</Title>}
				{walletContract && (
					<>
						<div className={classes.row}>
							<Title>{walletContract.name ?? 'Contract'}</Title>
							<Space w={8} />
							<Tooltip label="Edit name / note" withArrow>
								<IconButton
									icon={<Pencil size={24} />}
									onClick={() => setIsEditing(true)}
								/>
							</Tooltip>
						</div>
						<Text>{walletContract.note}</Text>
					</>
				)}

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
					{...form.getInputProps('address')}
				/>
				<Space h={48} />

				{!fetchedAddress && (
					<Title order={4}>
						Enter a contract address to continue
					</Title>
				)}

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
										This address is not valid
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
								{bytecode && (
									<>
										<Text color="dimmed" size="sm">
											This address is a smart contract.
											Generate types and take a peek at
											the example code!
										</Text>
										<Space h={16} />
										<Title order={4}>Generate Code</Title>
										<Space h={8} />
										<div className={classes.row}>
											<Button
												disabled={isLoading || isSaving}
												onClick={handleDownloadTypes}
												leftIcon={<Download />}
											>
												Download Types
											</Button>
											<Space w={16} />
											<Button
												disabled={isLoading || isSaving}
												onClick={handleDownloadABI}
												leftIcon={<Download />}
											>
												Download ABI
											</Button>
										</div>
										<Space h={16} />
										<DemoCode
											name={
												proxyContract?.Contract?.name ??
												'MyContract'
											}
										/>
										<Space h={16} />
									</>
								)}
								{/* <Title order={4}>Functions</Title>
								<Space h={8} />
								<Text color="dimmed" size="sm">
									All functions that can be called on this
									contract
								</Text>
								<Space h={8} />
								<FunctionList abi={abi} /> */}
								<Space h={16} />

								<Title order={4}>Info</Title>
								<Space h={8} />
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
											color={
												isContractOwner
													? 'green'
													: 'red'
											}
										>
											{isContractOwner ? (
												<Check size={20} />
											) : (
												<FaceIdError size={20} />
											)}
										</ThemeIcon>
									}
									title={
										isContractOwner
											? 'Contract Owner'
											: 'Not Contract Owner'
									}
								>
									{isContractOwner && (
										<Text color="dimmed" size="sm">
											You are the owner of this contract.
										</Text>
									)}
									{isContractOwner && !isUpgrader && (
										<Text color="dimmed" size="sm">
											You are not listed as an upgrader on
											the contract
										</Text>
									)}
									{!isContractOwner && (
										<Text color="dimmed" size="sm">
											The connected account is not the
											owner of the contract
										</Text>
									)}
								</Timeline.Item>
							)}
							{bytecode && isUpgrader && (
								<Timeline.Item
									active
									bullet={
										<ThemeIcon
											color={isUpgrader ? 'green' : 'red'}
										>
											{isUpgrader ? (
												<Check size={20} />
											) : (
												<FaceIdError size={20} />
											)}
										</ThemeIcon>
									}
									title={
										isUpgrader
											? 'Contract Upgrader'
											: 'Not Contract Upgrader'
									}
								>
									{isUpgrader && (
										<Text color="dimmed" size="sm">
											You have the upgrader role on this
											contract
										</Text>
									)}
									{!isUpgrader && !isContractOwner && (
										<Text color="dimmed" size="sm">
											{`You can't upgrade this contract`}
										</Text>
									)}
								</Timeline.Item>
							)}
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
								{shouldShowUpgradeControls && (
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
										<Space w={12} />
										<Button
											disabled={isLoading || isSaving}
											onClick={() =>
												setIsBundleOpen(true)
											}
											leftIcon={<CirclePlus />}
										>
											Add Bundle
										</Button>
									</div>
								)}
								<Space h={12} />
								{hasFoundAllFacets && (
									<FacetList
										form={form}
										contractInstances={
											facetContractInstances as ContractInstances[]
										}
										proxyContract={
											proxyContract as ContractInstances
										}
										isLoading={isLoading}
										isEnabled={shouldShowUpgradeControls}
									/>
								)}
								{!hasFoundAllFacets && (
									<Title order={4}>
										Not all facets are tracked in DB
									</Title>
								)}

								{isDirty && (
									<div>
										<Space h={24} />
										<Center>
											<Button
												className={classes.save_button}
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
					<FindContract
						onClick={handleFacetSelect}
						disabledContractIds={data?.ContractInstances.map(
							ci => ci.Contract?.id
						)}
					/>
				</Modal>
				<Modal
					opened={isBundleOpen}
					onClose={() => setIsOpen(false)}
					size={900}
					title={<Title>Find a Bundle</Title>}
				>
					<FindBundle onSelect={handleBundleSelect} />
				</Modal>
				<Modal
					opened={isEditing}
					onClose={() => setIsEditing(false)}
					size={900}
					title={<Title>Edit Contract Info</Title>}
				>
					<EditWalletContract
						walletContract={
							walletContract as WalletContractInstances
						}
						onSave={() => setIsEditing(false)}
					/>
				</Modal>
			</form>
		</Page>
	)
}
