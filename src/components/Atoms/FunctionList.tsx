import { Space, Spoiler } from '@mantine/core'
import React from 'react'

export interface IProps {
	abi: any
}

export const FunctionList: React.FC<IProps> = ({ abi }) => {
	return (
		<Spoiler showLabel="show" hideLabel="hide" maxHeight={0}>
			<ul>
				{abi.map(a =>
					a.type === 'function' ? (
						<li>
							<p>
								{`${a.name}(${a.inputs
									.map(
										(input: any) =>
											`${input.type}${
												input.name
													? ` ${input.name}`
													: ''
											}`
									)
									.join(', ')})`}
							</p>
						</li>
					) : null
				)}
				<Space h={32} />
			</ul>
		</Spoiler>
	)
}
