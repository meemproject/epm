import { useSubscription } from '@apollo/client'
import log from '@kengoldfarb/log'
import {
	Text,
	Button,
	Space,
	Title,
	Timeline,
	ThemeIcon,
	Modal
} from '@mantine/core'
import { chains, MeemAPI } from '@meemproject/api'
import { IVersion, upgrade } from '@meemproject/meem-contracts'
import { useWallet } from '@meemproject/react'
import { ethers } from 'ethers'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Check, CircleX } from 'tabler-icons-react'
import {
	Bundles,
	Contracts,
	SearchContractsQuery,
	SubGetBundleByIdSubscription
} from '../../../generated/graphql'
import { SUB_GET_BUNDLE_BY_ID } from '../../graphql/contracts'
import { ArrayElement } from '../../lib/utils'
import { Address } from '../Atoms/Address'
import { ContractCard } from '../Atoms/ContractCard'
import { FindContract } from '../Atoms/FindContract'
import { DeployContract } from '../Contracts/DeployContract'

export interface IProps {
	bundleId?: string | null
}

export const DeployBundle: React.FC<IProps> = ({ bundleId }) => {
	const router = useRouter()
	const { signer, chainId } = useWallet()
	const [isLoading, setIsLoading] = useState(false)
	const [isInitialized, setIsInitialized] = useState(false)
	const [deployedProxy, setDeployedProxy] = useState<ethers.Contract>()
	const [isOpen, setIsOpen] = useState(false)
	const [isDeployProxyOpen, setIsDeployProxyOpen] = useState(false)
	const [selectedContract, setSelectedContract] =
		useState<ArrayElement<SearchContractsQuery['Contracts']>>()

	const { loading: isLoadingBundle, data } =
		useSubscription<SubGetBundleByIdSubscription>(SUB_GET_BUNDLE_BY_ID, {
			variables: {
				id: bundleId
			}
		})

	const bundle = data?.Bundles[0]

	if (!bundle) {
		return null
	}

	const handleAttachFacets = async () => {
		try {
			if (!deployedProxy || !signer) {
				return
			}
			const toVersion: IVersion = []
			bundle.BundleContracts.forEach(bc => {
				const contract = bc.Contract
				const contractInstance = bc.Contract?.ContractInstances.find(
					ci => ci.chainId === chainId
				)
				if (contract && contractInstance) {
					toVersion.push({
						address: contractInstance.address,
						functionSelectors: bc.functionSelectors
					})
				}
			})

			setIsLoading(true)
			await upgrade({
				signer,
				proxyContractAddress: deployedProxy.address,
				fromVersion: [],
				toVersion
			})
			setIsInitialized(true)
			router.push({
				pathname: `/manage`,
				query: {
					address: deployedProxy.address,
					chainId
				}
			})
		} catch (e) {
			log.warn(e)
		}

		setIsLoading(false)
	}

	const chain = chains.find(c => c.chainId === chainId)

	let isAllFacetsDeployed = true

	bundle.BundleContracts.forEach(bc => {
		const isDeployedOnCurrentChain = !!bc.Contract?.ContractInstances.find(
			ci => ci.chainId === chainId
		)

		if (!isDeployedOnCurrentChain) {
			isAllFacetsDeployed = false
		}
	})

	return (
		<div>
			<Title order={3}>{bundle.name}</Title>
			<Text>{bundle.description}</Text>
			<Space h={16} />
			{/* {inputs.length > 0 && (
				<Title order={3}>Constructor Arguments</Title>
			)} */}
			<Text color="dimmed" size="xs">
				Already deployed a proxy or want to upgrade? You can{' '}
				<Link href="/manage">
					<a>manage an existing contract</a>
				</Link>
			</Text>
			<Space h={24} />
			<Title order={4}>Bundle Facets</Title>
			<Space h={8} />
			<Text color="dimmed" size="sm">
				This bundle contains the facets below. Each one must be deployed
				to the same chain as your proxy contract.
			</Text>
			<Space h={16} />
			{bundle.BundleContracts.map(bc => (
				<ContractCard
					key={`contract-card${bc.id}`}
					contract={bc.Contract}
					isCompact
					shouldShowDeployOnCurrentChain
				/>
			))}
			<Space h={24} />

			<Title order={4}>Deployment Steps</Title>
			<Space h={24} />

			<Timeline title="Steps" bulletSize={24} lineWidth={2}>
				<Timeline.Item
					active
					bullet={
						<ThemeIcon
							color={isAllFacetsDeployed ? 'green' : 'red'}
						>
							{isAllFacetsDeployed ? (
								<Check size={20} />
							) : (
								<CircleX size={20} />
							)}
						</ThemeIcon>
					}
					title={
						isAllFacetsDeployed
							? 'All Facets Deployed'
							: 'Some Facets Not Deployed'
					}
				>
					{!isAllFacetsDeployed && (
						<Text color="dimmed" size="sm">
							Some facets have not been deployed to your current
							chain ({chain?.name}). Deploy each of the missing
							facets or switch chains to continue.
						</Text>
					)}
				</Timeline.Item>
				<Timeline.Item
					active
					bullet={
						<ThemeIcon color={selectedContract ? 'green' : 'red'}>
							{selectedContract ? (
								<Check size={20} />
							) : (
								<CircleX size={20} />
							)}
						</ThemeIcon>
					}
					title={
						selectedContract ? (
							'Proxy Selected'
						) : (
							<Button
								loading={isLoading}
								disabled={!isAllFacetsDeployed}
								onClick={() => {
									setIsOpen(true)
								}}
								variant="outline"
							>
								Select Proxy
							</Button>
						)
					}
				>
					<ContractCard isCompact contract={selectedContract} />
				</Timeline.Item>
				<Timeline.Item
					active
					bullet={
						<ThemeIcon color={deployedProxy ? 'green' : 'red'}>
							{deployedProxy ? (
								<Check size={20} />
							) : (
								<CircleX size={20} />
							)}
						</ThemeIcon>
					}
					title={
						deployedProxy ? (
							'Proxy Deployed'
						) : (
							<Button
								loading={isLoading}
								disabled={!selectedContract}
								onClick={() => {
									setIsDeployProxyOpen(true)
								}}
							>
								Deploy Proxy
							</Button>
						)
					}
				>
					<Address
						address={deployedProxy?.address}
						chainId={chainId}
					/>
					{/* <Text color="dimmed" size="sm">
						Deploy your proxy contract
					</Text> */}
				</Timeline.Item>
				<Timeline.Item
					active
					bullet={
						<ThemeIcon color={isInitialized ? 'green' : 'red'}>
							{isInitialized ? (
								<Check size={20} />
							) : (
								<CircleX size={20} />
							)}
						</ThemeIcon>
					}
					title={
						isInitialized ? (
							'Proxy Initialized'
						) : (
							<Button
								loading={isLoading}
								disabled={!deployedProxy}
								onClick={() => {
									handleAttachFacets()
								}}
							>
								Attach Facets
							</Button>
						)
					}
				>
					{/* <Text color="dimmed" size="sm">
						Deploy your proxy contract
					</Text> */}
				</Timeline.Item>
			</Timeline>
			<Space h={24} />
			<Modal
				title="Select Proxy Contract"
				opened={isOpen}
				onClose={() => setIsOpen(false)}
				size="xl"
			>
				<FindContract
					contractType={MeemAPI.ContractType.DiamondProxy}
					onClick={contract => {
						setSelectedContract(contract)
						setIsOpen(false)
						log.debug(contract)
					}}
				/>
			</Modal>
			<DeployContract
				isOpen={isDeployProxyOpen}
				onClose={() => setIsDeployProxyOpen(false)}
				contract={selectedContract as Contracts}
				onDeployed={c => {
					setDeployedProxy(c)
					setIsDeployProxyOpen(false)
				}}
			/>
		</div>
	)
}
