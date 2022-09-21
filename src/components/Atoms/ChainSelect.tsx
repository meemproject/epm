import { Select } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form/lib/use-form'
import { chains } from '@meemproject/react'
import React from 'react'

export interface IProps {
	onChange?: (chainId: number) => void
	form?: UseFormReturnType<any>
	chainId?: number
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

export const ChainSelect: React.FC<IProps> = ({ chainId, onChange, form }) => {
	const formProps = form?.getInputProps('chainId')
	const props = {
		...formProps,
		onChange: (val: string) => {
			form?.setFieldValue('chainId', val)

			if (onChange && val) {
				onChange(+val)
			}
		},
		value: chainId?.toString() ?? form?.values.chainId
	}

	return (
		<>
			<Select
				// value={chainId?.toString() ?? form?.values.chainId.toString()}
				placeholder="Select Network"
				data={chains.map(c => ({
					label: c.name,
					value: c.chainId.toString()
				}))}
				searchable
				{...props}
				// {...form?.getInputProps('chainId')}
				// onChange={val => {
				// 	if (onChange && val) {
				// 		onChange(+val)
				// 	}
				// 	if (val) {
				// 		setChain(+val)
				// 	}
				// }}
				// {...formProps}
			/>
		</>
	)
}
