/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/named */
import { useQuery } from '@apollo/client'
import log from '@kengoldfarb/log'
import {
	createStyles,
	Container,
	Text,
	Image,
	Button,
	Space,
	Center,
	Loader,
	Grid
} from '@mantine/core'
import { useWallet } from '@meemproject/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ArrowLeft } from 'tabler-icons-react'
import { MeemContracts, MyClubsQuery } from '../../../generated/graphql'
import { GET_MY_CLUBS } from '../../graphql/clubs'
import clubFromMeemContract, {
	Club,
	clubSummaryFrommeemContract
} from '../../model/club/club'

const useStyles = createStyles(theme => ({
	header: {
		marginBottom: 60,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingTop: 32,
		borderBottomColor: 'rgba(0, 0, 0, 0.08)',
		borderBottomWidth: '1px',
		borderBottomStyle: 'solid',
		paddingBottom: 32,
		paddingLeft: 32,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			marginBottom: 32,
			paddingBottom: 16,
			paddingLeft: 8,
			paddingTop: 16
		}
	},
	headerLeftItems: {
		display: 'flex',
		alignItems: 'center'
	},
	headerArrow: {
		marginRight: 32,
		marginTop: 6,
		cursor: 'pointer',
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			marginRight: 16,
			marginLeft: 16
		}
	},
	headerClubName: {
		fontWeight: 600,
		fontSize: 24,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			fontSize: 20
		}
	},
	buttonCreate: {
		backgroundColor: 'black',
		'&:hover': {
			backgroundColor: theme.colors.gray[8]
		},
		borderRadius: 24,
		marginRight: 32
	},
	createClubLink: {
		marginTop: 24,
		a: {
			color: 'rgba(255, 102, 81, 1)',
			textDecoration: 'underline',
			fontWeight: 'bold'
		}
	},
	clubItem: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 24,
		fontSize: 16,
		fontWeight: 600,
		cursor: 'pointer'
	},
	clubLogoImage: {
		imageRendering: 'pixelated'
	},

	myClubsPrompt: { fontSize: 18, marginBottom: 16 }
}))

export const MyClubsComponent: React.FC = () => {
	const { classes } = useStyles()
	const router = useRouter()
	const wallet = useWallet()

	const {
		loading,
		error,
		data: clubData
	} = useQuery<MyClubsQuery>(GET_MY_CLUBS, {
		variables: { walletAddress: wallet.accounts[0] }
	})

	const [clubs, setClubs] = useState<Club[]>([])

	useEffect(() => {
		if (error) {
			log.warn(error)
		}

		if (!loading && !error && clubs.length === 0 && clubData) {
			const tempClubs: Club[] = []

			clubData.Meems.forEach(meem => {
				const possibleClub = clubSummaryFrommeemContract(
					meem.MeemContract as MeemContracts
				)
				if (possibleClub.name) {
					tempClubs.push(possibleClub)
				}
			})

			setClubs(tempClubs)
		}
	}, [
		clubs,
		clubData,
		error,
		loading,
		wallet.accounts,
		wallet.isConnected,
		wallet.web3Provider
	])

	const navigateHome = () => {
		router.push({ pathname: '/' })
	}

	const navigateToCreate = () => {
		router.push({ pathname: '/' })
	}

	const navigateToClub = (club: string) => {
		router.push({ pathname: `/${club}` })
	}

	return (
		<>
			<div className={classes.header}>
				<div className={classes.headerLeftItems}>
					<a onClick={navigateHome}>
						<ArrowLeft className={classes.headerArrow} size={32} />
					</a>
					<Text className={classes.headerClubName}>My Clubs</Text>
				</div>
				<Button
					onClick={navigateToCreate}
					className={classes.buttonCreate}
				>
					Create a Club
				</Button>
			</div>

			<Container>
				{loading && (
					<Container>
						<Space h={60} />
						<Center>
							<Loader />
						</Center>
					</Container>
				)}
				{clubs.length === 0 && !loading && (
					<>
						<Text className={classes.myClubsPrompt}>
							{`You haven't joined any clubs!`}
						</Text>
						<Text className={classes.createClubLink}>
							<a onClick={navigateToCreate}>Start a new one?</a>
						</Text>
					</>
				)}
				{clubs.length > 0 && !loading && (
					<>
						<Grid>
							{clubs.map(club => (
								<Grid.Col
									xs={6}
									sm={4}
									md={4}
									lg={4}
									xl={4}
									key={club.address}
								>
									<div
										key={club.address}
										className={classes.clubItem}
										onClick={() => {
											navigateToClub(club.slug!)
										}}
									>
										<Image
											className={classes.clubLogoImage}
											src={club.image!}
											width={40}
											height={40}
											fit={'contain'}
										/>
										<Space w="xs" />
										<Text>{club.name!}</Text>
									</div>
								</Grid.Col>
							))}
						</Grid>

						<Space h={60} />
					</>
				)}
			</Container>
		</>
	)
}
