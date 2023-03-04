import { showNotification } from '@mantine/notifications'
import { CheckCircle, DeleteCircle } from 'iconoir-react'
import React from 'react'

export function showSuccessNotification(title: string, message: string) {
	showNotification({
		title,
		color: 'green',
		icon: <CheckCircle color="white" />,
		message
	})
}

export function showErrorNotification(title: string, message: string) {
	showNotification({
		title,
		color: 'red',
		icon: <DeleteCircle color="white" />,
		message
	})
}
