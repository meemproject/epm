import {
	createStyles,
	Header,
	Text,
	Menu,
	UnstyledButton,
	Group,
	Avatar,
	Divider
} from '@mantine/core'
import { useWallet } from '@meemproject/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Logout, ChevronDown, Dots } from 'tabler-icons-react'
import { quickTruncate } from '../../utils/truncated_wallet'
import { ChainSelect } from '../Atoms/ChainSelect'
import { Logo } from '../Atoms/Logo'
import { GithubCorner } from './GithubCorner'

const useStyles = createStyles(theme => ({
	headerLeftItems: {
		marginLeft: 4,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},

	headerRightItems: {
		marginBottom: 4,
		marginRight: 0,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			marginRight: 20
		}
	},

	mainLogo: {
		fontSize: 32,
		marginLeft: 16,
		marginRight: 8,
		paddingBottom: 4,
		cursor: 'pointer'
	},

	inner: {
		height: 76,
		marginTop: 8,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none'
		}
	},

	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none'
		}
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.gray[0]
		}
	},

	linkLabel: {
		marginRight: 5
	},

	ellipse: {
		marginRight: 104,
		marginLeft: 24
	},

	connectWallet: {
		marginBottom: 4,
		marginRight: 16,
		fontWeight: 'bold',
		color: 'rgba(255, 102, 81, 1)',
		cursor: 'pointer'
	},

	userMenu: {
		marginBottom: 6
	},

	user: {
		color:
			theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
		padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
		borderRadius: theme.radius.sm,
		transition: 'background-color 100ms ease',

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[8]
					: theme.white
		}
	},

	userActive: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
	},

	menuItem: {
		fontWeight: 600
	},
	lastMenuItem: {
		paddingRight: 80
	},
	menuItemWithIcon: {
		fontWeight: 600,
		marginBottom: '-2px',
		marginTop: '-2px'
	},

	redMenuItem: {
		fontWeight: 600,
		color: 'rgba(255, 102, 81, 1)',
		marginBottom: '-2px',
		marginTop: '-2px'
	},
	logoLink: {
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		marginRight: theme.spacing.md
	},
	logo: {
		paddingLeft: theme.spacing.xs,
		paddingTop: 2,
		width: '120px'
	}
}))

export const HeaderMenu: React.FC = () => {
	const [isUserMenuOpened, setUserMenuOpened] = useState(false)
	const { classes, cx } = useStyles()
	const router = useRouter()
	const wallet = useWallet()

	const navigateHome = () => {
		router.push({ pathname: '/' })
	}

	return (
		<Header height={76}>
			<div className={classes.inner}>
				<div className={classes.headerLeftItems}>
					<a onClick={navigateHome} className={classes.logoLink}>
						<Logo className={classes.logo} />
					</a>
					<ChainSelect
						chainId={wallet.chainId}
						onChange={chainId => wallet.setChain(chainId)}
					/>
				</div>

				<div className={classes.headerRightItems}>
					{wallet.isConnected && (
						<Menu
							size={150}
							placement="end"
							transition="pop-top-right"
							className={classes.userMenu}
							onClose={() => setUserMenuOpened(false)}
							onOpen={() => setUserMenuOpened(true)}
							control={
								<UnstyledButton
									className={cx(classes.user, {
										[classes.userActive]: isUserMenuOpened
									})}
								>
									<Group spacing={7}>
										<Avatar
											src={''}
											alt={'user.name'}
											radius="xl"
											size={24}
										/>
										<Text
											weight={500}
											size="sm"
											sx={{ lineHeight: 1 }}
											mr={3}
										>
											{wallet.me?.user.DefaultWallet
												.ens ??
												quickTruncate(
													wallet.me?.user
														.DefaultWallet.address
												) ??
												'0x...'}
										</Text>
										<ChevronDown size={12} />
									</Group>
								</UnstyledButton>
							}
						>
							<Menu.Item
								className={classes.menuItem}
								onClick={async () => {
									await wallet.disconnectWallet()
								}}
								color="red"
								icon={<Logout size={14} />}
							>
								Disconnect
							</Menu.Item>
						</Menu>
					)}
					{!wallet.isConnected && (
						<Text className={classes.connectWallet}>
							<a
								onClick={async () => {
									router.push('/authenticate')
								}}
							>
								Connect wallet
							</a>
						</Text>
					)}

					<Menu
						size={260}
						placement="end"
						transition="pop-top-right"
						control={
							<UnstyledButton>
								<Dots className={classes.ellipse} />
							</UnstyledButton>
						}
					>
						<Link href={`/tracked/${wallet.accounts[0]}`}>
							<Menu.Item className={classes.menuItem}>
								<a>My Contracts</a>
							</Menu.Item>
						</Link>
						<Link href="/create">
							<Menu.Item className={classes.menuItem}>
								<a>Create Contract</a>
							</Menu.Item>
						</Link>
						<Link href="/manage">
							<Menu.Item className={classes.menuItem}>
								<a>Manage Contract</a>
							</Menu.Item>
						</Link>
						<Link href="/contracts">
							<Menu.Item className={classes.menuItem}>
								<a>Deploy Contract</a>
							</Menu.Item>
						</Link>
						<Link href="/bundles">
							<Menu.Item className={classes.menuItem}>
								<a>Bundles</a>
							</Menu.Item>
						</Link>
						<Link href="/createbundle">
							<Menu.Item className={classes.menuItem}>
								<a>Create Bundle</a>
							</Menu.Item>
						</Link>
						<Divider />
						<Menu.Item
							onClick={() =>
								window.open('https://meem.wtf', '_blank')
							}
							className={cx(classes.menuItem)}
						>
							From{' '}
							<span style={{ textDecoration: 'underline' }}>
								Meem
							</span>
						</Menu.Item>
					</Menu>
				</div>
			</div>
			<GithubCorner />
		</Header>
	)
}
