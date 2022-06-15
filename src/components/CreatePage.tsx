/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/named */
import log from '@kengoldfarb/log'
import { Button, Select, Switch, TextInput } from '@mantine/core'
import { MeemAPI } from '@meemproject/api'
import * as meemContracts from '@meemproject/meem-contracts'
import { IVersion } from '@meemproject/meem-contracts'
import {
	Chain,
	MeemType,
	UriSource
} from '@meemproject/meem-contracts/dist/src/lib/meemStandard'
import meemABI from '@meemproject/meem-contracts/types/Meem.json'
import { useWallet } from '@meemproject/react'
import { Contract } from 'ethers'
// import { Contract } from 'ethers'
import React, { useEffect, useState } from 'react'

export const CreatePage: React.FC = () => {
	// const [proxyContract, setProxyContract] = useState<Contract | undefined>()
	const [proxyAddress, setProxyAddress] = useState<string>('')
	// const [fromVersion, setFromVersion] = useState<string>('latest')
	const [toVersion, setToVersion] = useState<string>('latest')
	const [status, setStatus] = useState<string>('Not created')
	const [txLog, setTxLog] = useState<string[]>([])
	const [shouldShowUpgrade, setShouldShowUpgrade] = useState(false)

	const { web3Provider, accounts, signer } = useWallet()

	const handleCreate = async () => {
		if (!web3Provider) {
			return
		}

		setTxLog([...txLog, 'Creating proxy...'])

		const contract = await meemContracts.deployProxy({
			signer: web3Provider.getSigner()
		})
		// setProxyContract(contract)
		setProxyAddress(contract.address)
		setTxLog([...txLog, `Deployed proxy at ${contract.address}`])
		log.debug(
			`Deployed proxy at ${contract.address} w/ tx: ${contract.deployTransaction.hash}`
		)
		setStatus('Created')
	}

	const handleInit = async () => {
		if (!web3Provider || !proxyAddress) {
			return
		}

		setTxLog([...txLog, `Initializing proxy...`])

		const tx = await meemContracts.initProxy({
			signer: web3Provider.getSigner(),
			proxyContractAddress: proxyAddress,
			name: 'Test',
			symbol: 'TEST',
			contractURI:
				'{"name": "Test","description": "testing","image": "","external_link": ""}',
			chain: Chain.Rinkeby,
			version: toVersion
		})

		log.debug(tx)

		setTxLog([...txLog, `Initialized proxy w/ tx: ${tx.hash}`])

		setStatus('Created and initialized')
	}

	const handleUpgrade = async () => {
		try {
			if (!web3Provider) {
				return
			}

			setTxLog([...txLog, `Upgrading proxy to version: ${toVersion}...`])

			const contract = await meemContracts.getMeemContract({
				contractAddress: proxyAddress,
				signer
			})

			const result = await contract.facets()
			const from: IVersion = {}
			result.forEach(facet => {
				const facetAddress = facet[0]
				const functionSelectors = facet[1]
				from[facetAddress] = {
					functionSelectors,
					address: facetAddress
				}
			})

			const tx = await meemContracts.upgrade({
				signer: web3Provider.getSigner(),
				proxyContractAddress: proxyAddress,
				chain: Chain.Rinkeby,
				fromVersion: from,
				toVersion
			})

			setTxLog([...txLog, `Upgraded proxy w/ tx ${tx?.hash}`])
		} catch (e) {
			log.crit(e)
		}
	}

	const handleMint = async () => {
		try {
			const meemContract = new Contract(
				proxyAddress,
				meemABI,
				signer
			) as unknown as meemContracts.Meem

			await meemContract?.mint(
				{
					to: accounts[0],
					tokenURI: 'ipfs://example',
					parentChain: Chain.Polygon,
					parent: MeemAPI.zeroAddress,
					parentTokenId: 0,
					meemType: MeemType.Original,
					isURILocked: false,
					reactionTypes: ['upvote', 'downvote', 'heart'],
					uriSource: UriSource.Json,
					mintedBy: accounts[0]
				},
				meemContracts.defaultMeemProperties,
				meemContracts.defaultMeemProperties,
				{ gasLimit: '1000000' }
			)
		} catch (e) {
			log.crit(e)
		}
	}

	const handleAcceptOwnership = async () => {
		try {
			const meemContract = new Contract(
				proxyAddress,
				meemABI,
				signer
			) as unknown as meemContracts.Meem

			await meemContract?.acceptOwnership()
		} catch (e) {
			log.crit(e)
		}
	}

	const displayVersions = [
		{
			version: 'latest',
			displayName: `latest (${
				meemContracts.versions[Chain.Rinkeby].latest
			})`
		},
		{
			version: 'beta',
			displayName: `beta (${meemContracts.versions[Chain.Rinkeby].beta})`
		},
		{
			version: 'alpha',
			displayName: `alpha (${
				meemContracts.versions[Chain.Rinkeby].alpha
			})`
		},
		...meemContracts.versionList().map(v => ({
			version: v,
			displayName: v
		}))
	]

	return (
		<>
			<h1>{shouldShowUpgrade ? 'Upgrade a club' : 'Create a club'}</h1>
			<Switch
				label={shouldShowUpgrade ? 'Create a club' : 'Upgrade a club'}
				checked={shouldShowUpgrade}
				onChange={event =>
					setShouldShowUpgrade(event.currentTarget.checked)
				}
				size="lg"
			/>
			<div>
				<Select
					label={shouldShowUpgrade ? 'To version' : 'Version'}
					onChange={v => setToVersion(v ?? 'latest')}
					data={displayVersions.map(dv => ({
						value: dv.version,
						label: dv.displayName
					}))}
					defaultValue="latest"
				/>
			</div>
			<div>
				<Button
					onClick={shouldShowUpgrade ? handleUpgrade : handleCreate}
				>
					{shouldShowUpgrade ? 'Upgrade Club' : '1. Create Club'}
				</Button>
			</div>
			{!shouldShowUpgrade && (
				<div>
					<Button
						onClick={handleInit}
						disabled={proxyAddress.length === 0}
					>
						2. Initialize Club
					</Button>
				</div>
			)}
			<div>
				<TextInput
					label="Contract Address"
					placeholder="0x..."
					value={proxyAddress}
					onChange={event =>
						setProxyAddress(event.currentTarget.value)
					}
				/>
			</div>
			<Button onClick={handleMint} disabled={proxyAddress.length === 0}>
				3. Mint
			</Button>
			<Button
				onClick={handleAcceptOwnership}
				disabled={proxyAddress.length === 0}
			>
				Accept ownership
			</Button>
			<p>Club status: {status}</p>
			{txLog.map(l => (
				<p key={l}>{l}</p>
			))}
		</>
	)
}
