import log from '@kengoldfarb/log'
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
import React, { useEffect, useState } from 'react'
import {
	Logout,
	ChevronDown,
	Dots,
	BrandDiscord,
	BrandTwitter,
	BrandGithub
} from 'tabler-icons-react'
import { ensWalletAddress, quickTruncate } from '../../utils/truncated_wallet'
import { ChainSelect } from '../Atoms/ChainSelect'
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
		[theme.fn.smallerThan('md')]: {
			marginLeft: 0,
			marginRight: 0
		},
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
		height: 36,
		paddingLeft: theme.spacing.xs,
		paddingTop: 2
	},
	githubIcon: {
		fill: '#151513',
		color: '#fff',
		position: 'absolute',
		top: 0,
		border: 0,
		right: 0
	}
}))

export const HeaderMenu: React.FC = () => {
	const [isUserMenuOpened, setUserMenuOpened] = useState(false)
	const [hasFetchedENS, setHasFetchedENS] = useState(false)
	const { classes, cx } = useStyles()
	const router = useRouter()

	const [username, setUsername] = useState('')
	const wallet = useWallet()

	useEffect(() => {
		async function getName() {
			try {
				if (
					!hasFetchedENS &&
					wallet.isConnected &&
					wallet.web3Provider
				) {
					const name = await ensWalletAddress(wallet.accounts[0])
					setUsername(quickTruncate(name))
					setHasFetchedENS(true)
				}
			} catch (e) {
				log.warn(e)
				setUsername(quickTruncate('0x...'))
				setHasFetchedENS(true)
			}
		}
		getName()
	}, [
		wallet.accounts,
		wallet.isConnected,
		wallet.web3Provider,
		hasFetchedENS
	])

	const navigateHome = () => {
		router.push({ pathname: '/' })
	}

	return (
		<Header height={76}>
			<div className={classes.inner}>
				<div className={classes.headerLeftItems}>
					<a onClick={navigateHome} className={classes.logoLink}>
						<svg
							className={classes.logo}
							viewBox="0 0 190 70"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M56 33.04V-3.8147e-06H0V56H56V45.92H10.08V33.04H56ZM10.08 10.08H45.92V22.96H10.08V10.08ZM116 56V-3.8147e-06H60V69.04H70.08V56H116ZM70.08 10.08H105.92V45.92H70.08V10.08ZM190 56V-3.8147e-06H120V56H130.08V10.08H150V56H160V10.08H180V56H190Z"
								fill="#D0FF6C"
							/>
						</svg>
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
											{username}
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
									await wallet.connectWallet()
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
						<Menu.Item className={classes.menuItem}>
							<Link href={`/tracked/${wallet.accounts[0]}`}>
								<a>My Contracts</a>
							</Link>
						</Menu.Item>
						<Menu.Item className={classes.menuItem}>
							<Link href="/create">
								<a>Create Contract</a>
							</Link>
						</Menu.Item>
						<Menu.Item className={classes.menuItem}>
							<Link href="/manage">
								<a>Manage Contract</a>
							</Link>
						</Menu.Item>
						<Menu.Item className={classes.menuItem}>
							<Link href="/contracts">
								<a>Deploy Contract</a>
							</Link>
						</Menu.Item>
						<Menu.Item className={classes.menuItem}>
							<Link href="/bundles">
								<a>Bundles</a>
							</Link>
						</Menu.Item>
						<Menu.Item className={classes.menuItem}>
							<Link href="/createbundle">
								<a>Create Bundle</a>
							</Link>
						</Menu.Item>
						<Divider />
						<Menu.Item
							onClick={() =>
								window.open(
									'https://github.com/meemproject/epm',
									'_blank'
								)
							}
							className={classes.menuItemWithIcon}
							icon={<BrandGithub size={20} />}
						>
							Github
						</Menu.Item>
						<Menu.Item
							onClick={() =>
								window.open('https://meem.wtf', '_blank')
							}
							className={classes.menuItemWithIcon}
							icon={<BrandTwitter size={20} />}
						>
							Twitter
						</Menu.Item>
						<Menu.Item
							onClick={() =>
								window.open(
									'https://twitter.com/0xmeem',
									'_blank'
								)
							}
							className={classes.menuItemWithIcon}
							icon={<BrandDiscord size={20} />}
						>
							Discord
						</Menu.Item>

						<Menu.Item
							onClick={() =>
								window.open(
									'https://discord.gg/jgxuK6662v',
									'_blank'
								)
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
