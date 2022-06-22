import { createStyles, Select } from '@mantine/core'
import { useWallet } from '@meemproject/react'
import React, { useEffect, useState } from 'react'
import request from 'superagent'
import { SearchContractsQuery } from '../../../generated/graphql'
import { ArrayElement } from '../../lib/utils'

const useStyles = createStyles(_theme => ({
	card: {}
}))

export interface IProps {
	onChange?: (chainId: number) => void
}

export interface IChain {
	name: string
	chain: string
	rpc: string[]
	faucets: string[]
	nativeCurrency: {
		name: string
		symbol: string
		decimals: number
	}
	infoUrl: string
	shortName: string
	chainId: number
	ens?: {
		registry?: string
	}
	explorers: {
		name: string
		url: string
		standard: string
	}[]
}

export const NetworkSwitcher: React.FC<IProps> = ({ onChange }) => {
	const { classes } = useStyles()
	const [chains, setChains] = useState<IChain[]>([])

	const { setChain, chainId } = useWallet()

	useEffect(() => {
		const fetchChains = async () => {
			const { body } = await request.get(
				'https://chainid.network/chains.json'
			)

			setChains(body)
		}

		fetchChains()
	}, [])

	return (
		<>
			<Select
				value={chainId.toString()}
				placeholder="Select Network"
				data={chains.map(c => ({
					label: c.name,
					value: c.chainId.toString()
				}))}
				searchable
				onChange={val => {
					if (onChange && val) {
						// onChange(+val)
						setChain(val)
					}
				}}
			/>
		</>
	)
}
