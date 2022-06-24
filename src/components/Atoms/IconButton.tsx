import { createStyles, Tooltip, UnstyledButton } from '@mantine/core'
import cx from 'classnames'
import React from 'react'

export interface IProps {
	className?: string
	icon: React.ReactNode
	onClick?: () => void
	tooltip?: string
}

const useStyles = createStyles(_theme => ({
	icon_button: {
		'&:hover': {
			opacity: 0.7
		}
	}
}))

export const IconButton: React.FC<IProps> = ({
	onClick,
	icon,
	className,
	tooltip
}) => {
	const { classes } = useStyles()

	return (
		<UnstyledButton
			className={cx(classes.icon_button, className)}
			onClick={(e: any) => {
				e.preventDefault()
				if (onClick) {
					onClick()
				}
			}}
		>
			{tooltip && <Tooltip label={tooltip}>{icon}</Tooltip>}
			{!tooltip && icon}
		</UnstyledButton>
	)
}
