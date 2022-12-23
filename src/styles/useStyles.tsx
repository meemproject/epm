import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
	page_wrapper: {
		position: 'relative',
		paddingTop: 0,
		paddingBottom: 120,
		marginTop: 24,

		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			paddingBottom: 80,
			paddingTop: 0,
			marginTop: theme.spacing.md
		}
	}
}))
