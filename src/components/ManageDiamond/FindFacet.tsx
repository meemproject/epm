/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@apollo/client'
import log from '@kengoldfarb/log'
import {
	createStyles,
	Container,
	Text,
	Center,
	Image,
	Loader,
	Button,
	Textarea,
	TextInput,
	Space,
	Select,
	JsonInput,
	Grid,
	Card
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { MeemAPI } from '@meemproject/api'
import * as meemContracts from '@meemproject/meem-contracts'
import { makeFetcher, useWallet } from '@meemproject/react'
import { base64StringToBlob } from 'blob-util'
import { ethers } from 'ethers'
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState
} from 'react'
import Resizer from 'react-image-file-resizer'
import { ArrowLeft, Upload } from 'tabler-icons-react'
import { useFilePicker } from 'use-file-picker'
import {
	Contracts,
	GetContractsQuery,
	SearchContractsQuery
} from '../../../generated/graphql'
import { SEARCH_CONTRACTS } from '../../graphql/contracts'
import { diamondABI } from '../../lib/diamond'
import { CookieKeys } from '../../utils/cookies'

const useStyles = createStyles(theme => ({}))

type ArrayElement<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never

export interface IProps {
	onClick: (contract: ArrayElement<SearchContractsQuery['Contracts']>) => void
}

export const FindFacet: React.FC<IProps> = ({ onClick }) => {
	const router = useRouter()
	const { classes } = useStyles()

	const form = useForm({
		initialValues: {
			searchTerm: ''
		},
		validate: {}
	})

	const [isLoading, setIsLoading] = useState(false)
	const { web3Provider, accounts, signer, isConnected, connectWallet } =
		useWallet()

	const handleSubmit = async () => {}

	const {
		loading,
		error,
		data: facets
	} = useQuery<SearchContractsQuery>(SEARCH_CONTRACTS, {
		variables: {
			contractType: MeemAPI.ContractType.DiamondFacet,
			searchTerm: `%${form.values.searchTerm}%`
		}
	})

	// const fetchDiamondInfo = useCallback(async () => {
	// 	try {
	// 		const diamond = new ethers.Contract(
	// 			form.values.address,
	// 			diamondABI,
	// 			signer
	// 		)

	// 		const result = await diamond.facets()
	// 		console.log({ result })
	// 	} catch (e) {
	// 		form.setErrors({
	// 			address: 'Address is not a valid Diamond (EIP-2535) contract'
	// 		})
	// 		console.log(e)
	// 	}
	// }, [form, signer])

	// useEffect(() => {
	// 	if (form.values.address.length > 0) {
	// 		fetchDiamondInfo()
	// 	}
	// 	// console.log(form.values.address)
	// }, [form.values.address, fetchDiamondInfo])

	console.log({ facets })

	return (
		<form
			onSubmit={form.onSubmit(async values => {
				try {
					console.log(values)
				} catch (e) {
					console.log(e)
				}
			})}
		>
			<Container>
				<TextInput
					label="Find a Contract"
					radius="lg"
					size="md"
					placeholder="Access Control"
					// required
					{...form.getInputProps('searchTerm')}
				/>
			</Container>
			<Container>
				<Grid>
					{facets?.Contracts.map(facet => (
						<Grid.Col key={facet.id} span={5}>
							<Card
								shadow="sm"
								p="lg"
								onClick={() => onClick(facet)}
							>
								<Text>{facet.name}</Text>
							</Card>
						</Grid.Col>
					))}
				</Grid>
			</Container>
			{/* <Container>
				<Center>
					<Button type="submit" loading={loading} disabled={loading}>
						Continue
					</Button>
				</Center>
			</Container> */}
		</form>
	)
}
