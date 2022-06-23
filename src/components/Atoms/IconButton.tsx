import { createStyles, UnstyledButton } from '@mantine/core'
import cx from 'classnames'
import React from 'react'

export interface IProps {
	className?: string
	icon: React.ReactNode
	onClick?: () => void
}

const useStyles = createStyles(_theme => ({
	icon_button: {
		// padding: '8px'
	}
}))

export const IconButton: React.FC<IProps> = ({ onClick, icon, className }) => {
	const { classes } = useStyles()

	return (
		<UnstyledButton
			className={cx(classes.icon_button, className)}
			onClick={e => {
				e.preventDefault()
				if (onClick) {
					onClick()
				}
			}}
		>
			{icon}
		</UnstyledButton>
	)
}
