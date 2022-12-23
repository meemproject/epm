import { Text, Space, Grid, Title, Card, createStyles } from '@mantine/core'
import { useWallet } from '@meemproject/react'
import Link from 'next/link'
import React from 'react'
import {
	Adjustments,
	BoxMultiple,
	Bulb,
	LayoutDashboard,
	Rocket,
	Upload
} from 'tabler-icons-react'
import { Page } from '../../styles/Page'

const useStyles = createStyles(_theme => ({
	row: {
		alignItems: 'center',
		display: 'flex',
		width: '100%'
	},
	card_link: {
		textDecoration: 'none',

		'&:hover': {
			textDecoration: 'none'
		}
	}
}))

export const HomeContainer: React.FC = () => {
	const { classes } = useStyles()

	const { accounts } = useWallet()

	return (
		<Page>
			<Title>Ethereum Package Manager</Title>
			<Space h={8} />

			<Grid>
				<Grid.Col md={12}>
					<Card shadow="sm" p="lg">
						<Link href="https://paragraph.xyz/@ken/ethereum-package-manager">
							<a className={classes.card_link} target="_blank">
								<div className={classes.row}>
									<Rocket color="green" />
									<Space w={8} />
									<Title order={3}>Introducing EPM</Title>
									<Space w={8} />
									<Rocket color="green" />
								</div>
								<Space h={16} />
								<Text color="dimmed">WTF is this?</Text>
							</a>
						</Link>
					</Card>
				</Grid.Col>
				<Grid.Col md={6}>
					<Card shadow="sm" p="lg">
						<Link href="/contracts">
							<a className={classes.card_link}>
								<div className={classes.row}>
									<Bulb color="green" />
									<Space w={8} />
									<Title order={3}>
										Deploy Smart Contract
									</Title>
								</div>
								<Space h={16} />
								<Text color="dimmed">
									Choose from a library of smart contracts and
									deploy to the network of your choice.
								</Text>
							</a>
						</Link>
					</Card>
				</Grid.Col>
				<Grid.Col md={6}>
					<Card shadow="sm" p="lg">
						<Link href="/create">
							<a className={classes.card_link}>
								<div className={classes.row}>
									<Upload color="green" />
									<Space w={8} />
									<Title order={3}>
										Upload Smart Contract
									</Title>
								</div>
								<Space h={16} />
								<Text color="dimmed">
									Upload smart contract bytecode and ABI. Once
									added to the EPM library, anyone can easily
									deploy it!
								</Text>
							</a>
						</Link>
					</Card>
				</Grid.Col>
				<Grid.Col md={6}>
					<Card shadow="sm" p="lg">
						<Link href="/manage">
							<a className={classes.card_link}>
								<div className={classes.row}>
									<Adjustments color="green" />
									<Space w={8} />
									<Title order={3}>
										Manage Smart Contract
									</Title>
								</div>
								<Space h={16} />
								<Text color="dimmed">
									View contract information and upgrade
									contracts (if contract is compatible).
								</Text>
							</a>
						</Link>
					</Card>
				</Grid.Col>
				<Grid.Col md={6}>
					<Card shadow="sm" p="lg">
						<Link href="/bundles">
							<a className={classes.card_link}>
								<div className={classes.row}>
									<BoxMultiple color="green" />
									<Space w={8} />
									<Title order={3}>Bundles</Title>
								</div>
								<Space h={16} />
								<Text color="dimmed">
									Deploy or create bundles of smart contracts
									that can be attached to an upgradable proxy
									contract!
								</Text>
							</a>
						</Link>
					</Card>
				</Grid.Col>
				<Grid.Col md={6}>
					<Card shadow="sm" p="lg">
						<Link href={`/tracked/${accounts[0]}`}>
							<a className={classes.card_link}>
								<div className={classes.row}>
									<LayoutDashboard color="green" />
									<Space w={8} />
									<Title order={3}>My Contracts</Title>
								</div>
								<Space h={16} />
								<Text color="dimmed">
									Keep track of contracts you&apos;ve deployed
								</Text>
							</a>
						</Link>
					</Card>
				</Grid.Col>
			</Grid>
		</Page>
	)
}
