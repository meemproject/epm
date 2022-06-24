import { Container } from '@mantine/core'
import React from 'react'
import { useStyles } from './useStyles'

export interface IProps {
	children: React.ReactNode
}

export const Page: React.FC<IProps> = ({ children }) => {
	const { classes } = useStyles()
	return <Container className={classes.page_wrapper}>{children}</Container>
}
