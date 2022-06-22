import Link from 'next/link'
import React from 'react'

export interface IProps {
	address?: string | null
	chainId?: number
}

export const Address: React.FC<IProps> = ({ address }) => {
	if (!address) {
		return null
	}

	return (
		<Link href="">
			<a>{address}</a>
		</Link>
	)
}
