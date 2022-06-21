import { Select } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form/lib/use-form'
import { MeemAPI } from '@meemproject/api'
import React from 'react'

export interface IProps {
	form: UseFormReturnType<any>
}

export const SelectChain: React.FC<IProps> = ({ form }) => {
	return (
		<Select
			label="Chain"
			placeholder="Select chain"
			data={[
				{
					value: MeemAPI.NetworkChainId.Polygon.toString(),
					label: 'Polygon Mainnet'
				},
				{
					value: MeemAPI.NetworkChainId.Rinkeby.toString(),
					label: 'Rinkeby'
				}
			]}
			{...form.getInputProps('chain')}
		/>
	)
}
