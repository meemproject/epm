/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import React, { useContext, useEffect, useState } from 'react'
import {
	Logout,
	ChevronDown,
	Dots,
	BrandDiscord,
	BrandTwitter,
	MessageCircle,
	Mail
} from 'tabler-icons-react'
import { ensWalletAddress, quickTruncate } from '../../utils/truncated_wallet'
import { ChainSelect } from '../Atoms/ChainSelect'

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
		height: 56,
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
		marginRight: 24,
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
	}
}))

export const HeaderMenu: React.FC = () => {
	// eslint-disable-next-line no-unused-vars
	const [isMoreMenuOpened, setMoreMenuOpened] = useState(false)
	const [isUserMenuOpened, setUserMenuOpened] = useState(false)
	const { classes, cx } = useStyles()
	const router = useRouter()

	const [username, setUsername] = useState('')
	const wallet = useWallet()

	useEffect(() => {
		async function getName() {
			try {
				if (wallet.isConnected && wallet.web3Provider) {
					const name = await ensWalletAddress(wallet.accounts[0])
					setUsername(quickTruncate(name))
				}
			} catch (e) {
				// ignore
			}
		}
		getName()
	}, [wallet.accounts, wallet.isConnected, wallet.web3Provider])

	const navigateHome = () => {
		router.push({ pathname: '/' })
	}

	const navigateToMyClubs = () => {
		router.push({ pathname: '/myclubs' })
	}

	const handleJoinClubClub = () => {
		window.open('/clubclub')
	}

	const handlePoweredByMeem = () => {
		window.open('https://meem.wtf')
	}

	const handleTwitter = () => {
		window.open('https://twitter.com/0xmeem')
	}

	const handleDiscord = () => {
		window.open('https://discord.gg/jgxuK6662v')
	}

	const handleContactUs = () => {
		window.open('mailto:hello@weareprosocial.com')
	}

	const handleShareFeedback = () => {
		window.open('https://airtable.com/shrM296vRoDWmK8Rm')
	}

	return (
		<Header height={56}>
			<div className={classes.inner}>
				<div className={classes.headerLeftItems}>
					<a onClick={navigateHome}>
						<Text className={classes.mainLogo}>EPM</Text>
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
									router.reload()
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
									router.reload()
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
						onClose={() => setMoreMenuOpened(false)}
						onOpen={() => setMoreMenuOpened(true)}
						control={
							<UnstyledButton>
								<Dots className={classes.ellipse} />
							</UnstyledButton>
						}
					>
						<Menu.Item
							onClick={handlePoweredByMeem}
							className={classes.menuItem}
						>
							From{' '}
							<span style={{ textDecoration: 'underline' }}>
								Meem
							</span>
						</Menu.Item>

						<Divider />
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

						<Menu.Item
							onClick={handleTwitter}
							className={classes.menuItemWithIcon}
							icon={<BrandTwitter size={20} />}
						>
							Twitter
						</Menu.Item>
						<Menu.Item
							onClick={handleDiscord}
							className={classes.menuItemWithIcon}
							icon={<BrandDiscord size={20} />}
						>
							Discord
						</Menu.Item>
						<Menu.Item
							onClick={handleContactUs}
							className={classes.menuItemWithIcon}
							icon={<Mail size={20} />}
						>
							Contact Us
						</Menu.Item>
						<Menu.Item
							onClick={handleShareFeedback}
							className={classes.redMenuItem}
							icon={<MessageCircle size={20} />}
						>
							Share Feedback
						</Menu.Item>
					</Menu>
				</div>
			</div>
		</Header>
	)
}