import {
	Button,
	Chip,
	Chips,
	createStyles,
	Space,
	Text,
	Tooltip,
	UnstyledButton
} from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { showNotification } from '@mantine/notifications'
import { chains } from '@meemproject/api'
import Link from 'next/link'
import React from 'react'
import { ClipboardText, ExternalLink } from 'tabler-icons-react'
import { quickTruncate } from '../../utils/truncated_wallet'
import { IconButton } from './IconButton'

export interface IProps {
	address?: string | null
	chainId?: number
}

const useStyles = createStyles(_theme => ({
	row: {
		display: 'flex',
		flexDirection: 'row'
	}
}))

export const Address: React.FC<IProps> = ({ address, chainId }) => {
	const { classes } = useStyles()
	const clipboard = useClipboard({ timeout: 500 })
	if (!address) {
		return null
	}

	const handleClipboardClick = () => {
		clipboard.copy(address)
		showNotification({
			title: 'Copied Address!',
			message: `${address} copied to clipboard`,
			color: 'green'
		})
	}

	const chain = chains.find(c => c.chainId === chainId)
	const href =
		chain?.explorers && chain?.explorers[0]
			? `${chain?.explorers[0].url}/address/${address}`
			: ''

	const inner = (
		<>
			{chain && <Text weight={500}>{chain.name}</Text>}
			<Space w={8} />
			<Text>{quickTruncate(address)}</Text>
		</>
	)

	return (
		<div className={classes.row}>
			{href && (
				<Link href={href}>
					<a target="_blank" className={classes.row}>
						{inner}
					</a>
				</Link>
			)}
			{!href && inner}
			<Space w={8} />
			<Tooltip label="Copy Address" withArrow>
				<IconButton
					icon={<ClipboardText size={24} />}
					onClick={handleClipboardClick}
				/>
			</Tooltip>
			{chain && (
				<Tooltip label="View on Block Explorer" withArrow>
					<Link
						href={`${
							chain?.explorers && chain?.explorers[0].url
						}/address/${address}`}
					>
						<a target="_blank">
							<ExternalLink size={24} />
						</a>
					</Link>
				</Tooltip>
			)}
		</div>
	)
}
