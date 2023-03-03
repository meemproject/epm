import { Button, createStyles, Modal, Space, Text, Title } from '@mantine/core'
import React, { useState, ReactElement, useEffect } from 'react'

export interface IModalCTAProps {
	title: string
	body: string | ReactElement
	buttonThatOpensModal?: ReactElement
	isOpen?: boolean
	onClose?: () => void
	onConfirm: () => void
	ctaButton: ReactElement
	modalWidth?: number
	modalHeight?: number
	className?: string
}

const useStyles = createStyles(_theme => ({
	ctaWrapper: {
		display: 'flex',
		flexDirection: 'row'
	}
}))

export const ModalCTA: React.FC<IModalCTAProps> = ({
	title,
	body,
	onConfirm,
	buttonThatOpensModal,
	ctaButton,
	modalWidth = 400,
	modalHeight,
	isOpen,
	onClose,
	className
}) => {
	const [isModalOpen, setIsModalOpen] = useState(isOpen ?? false)

	const { classes } = useStyles()

	const handleModalClose = () => {
		setIsModalOpen(false)
		if (onClose) {
			onClose()
		}
	}

	useEffect(() => {
		setIsModalOpen(isOpen ?? false)
	}, [isOpen])

	return (
		<>
			{buttonThatOpensModal &&
				React.cloneElement(buttonThatOpensModal, {
					style: {
						cursor: 'pointer'
					},
					onClick: () => setIsModalOpen(true)
				})}

			<Modal
				onClose={handleModalClose}
				opened={isModalOpen}
				title={<Title>{title}</Title>}
				className={className}
			>
				{typeof body !== 'string' && body}
				{typeof body == 'string' && <Text>{body}</Text>}
				<Space h={16} />
				<div className={classes.ctaWrapper}>
					<Button onClick={handleModalClose} color="gray">
						Cancel
					</Button>
					<Space w={8} />
					{React.cloneElement(ctaButton, {
						onClick: () => {
							onConfirm()
							handleModalClose()
						}
					})}
				</div>
			</Modal>
		</>
	)
}
