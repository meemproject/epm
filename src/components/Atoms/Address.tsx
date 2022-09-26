import { createStyles, Space, Text, Title, Tooltip } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { showNotification } from '@mantine/notifications'
import { chains } from '@meemproject/react'
import Link from 'next/link'
import React from 'react'
import { ClipboardText, ExternalLink } from 'tabler-icons-react'
import { quickTruncate } from '../../utils/truncated_wallet'
import { IconButton } from './IconButton'

export interface IProps {
	address?: string | null
	chainId?: number
	label?: string | null
	labelLink?: string | null
}

const useStyles = createStyles(_theme => ({
	row: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row'
	}
}))

export const Address: React.FC<IProps> = ({
	address,
	chainId,
	label,
	labelLink
}) => {
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

	return (
		<div className={classes.row}>
			<Tooltip label="Copy Address" withArrow>
				<IconButton
					icon={<ClipboardText size={24} />}
					onClick={handleClipboardClick}
				/>
			</Tooltip>
			<Space w={8} />
			<div>
				{label && !labelLink && <Title order={6}>{label}</Title>}
				{label && labelLink && (
					<Link href={labelLink}>
						<a target="_blank" className={classes.row}>
							<Tooltip
								label="Manage Contract"
								withArrow
								className={classes.row}
							>
								<Title order={6}>{label}</Title>
							</Tooltip>
						</a>
					</Link>
				)}
				{href && (
					<Link href={href}>
						<a target="_blank" className={classes.row}>
							<Tooltip
								label="View on Block Explorer"
								withArrow
								className={classes.row}
							>
								{chain && (
									<Text weight={500}>{chain.name}</Text>
								)}
								<Space w={8} />
								<Text>{quickTruncate(address)}</Text>
								<ExternalLink size={24} />
							</Tooltip>
						</a>
					</Link>
				)}
				{!href && <Text>{quickTruncate(address)}</Text>}
			</div>
		</div>
	)
}
