/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
	JsonInput
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { MeemAPI } from '@meemproject/api'
import * as meemContracts from '@meemproject/meem-contracts'
import { makeFetcher, useWallet } from '@meemproject/react'
import { base64StringToBlob } from 'blob-util'
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Resizer from 'react-image-file-resizer'
import { ArrowLeft, Upload } from 'tabler-icons-react'
import { useFilePicker } from 'use-file-picker'
import { CookieKeys } from '../../utils/cookies'

const useStyles = createStyles(theme => ({
	header: {
		backgroundColor: 'rgba(160, 160, 160, 0.05)',
		marginBottom: 60,
		display: 'flex',
		alignItems: 'end',
		flexDirection: 'row',
		paddingTop: 24,
		paddingBottom: 24,
		paddingLeft: 32,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			paddingTop: 12,
			paddingBottom: 12,
			paddingLeft: 16
		}
	},
	headerArrow: {
		marginRight: 32,
		cursor: 'pointer',
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			marginRight: 16
		}
	},
	headerPrompt: {
		fontSize: 16,
		fontWeight: 500,
		color: 'rgba(0, 0, 0, 0.6)',
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			marginBottom: 0
		}
	},
	headerClubName: {
		fontWeight: 600,
		fontSize: 24,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			fontSize: 20
		}
	},
	namespaceTextInputContainer: {
		position: 'relative'
	},
	namespaceTextInput: {
		paddingLeft: 154,
		paddingBottom: 3
	},
	namespaceTextInputUrlPrefix: {
		position: 'absolute',
		top: 8,
		left: 24,
		color: 'rgba(0, 0, 0, 0.5)'
	},
	clubNamespaceHint: {
		paddingLeft: 0,
		paddingBottom: 16,
		color: 'rgba(0, 0, 0, 0.5)'
	},
	clubDescriptionPrompt: { fontSize: 18, marginBottom: 0, fontWeight: 600 },
	clubLogoPrompt: {
		marginTop: 32,
		fontSize: 18,
		marginBottom: 8,
		fontWeight: 600
	},
	clubLogoInfo: {
		fontWeight: 500,
		fontSize: 14,
		maxWidth: 650,
		color: 'rgba(45, 28, 28, 0.6)',
		marginBottom: 16
	},
	buttonUpload: {
		borderRadius: 24,
		color: 'black',
		borderColor: 'black',
		backgroundColor: 'white',
		'&:hover': {
			backgroundColor: theme.colors.gray[0]
		}
	},
	buttonCreate: {
		marginTop: 48,
		marginBottom: 48,

		backgroundColor: 'black',
		'&:hover': {
			backgroundColor: theme.colors.gray[8]
		},
		borderRadius: 24
	},
	clubLogoImage: {
		imageRendering: 'pixelated'
	},
	clubLogoImageContainer: {
		marginTop: 24,
		width: 108,
		height: 100,
		position: 'relative'
	},
	clubLogoDeleteButton: {
		position: 'absolute',
		top: '-12px',
		right: '-105px',
		cursor: 'pointer'
	}
}))

export const CreateComponent: React.FC = () => {
	const router = useRouter()
	const { classes } = useStyles()

	const [isSubmitting, setIsSubmitting] = useState(false)

	const form = useForm({
		initialValues: {
			name: '',
			description: '',
			address: '',
			functionSelectors: '',
			abi: '',
			bytecode: '',
			chainId: '',
			contractType: ''
		},
		validate: {
			name: val => (val.length > 0 ? null : 'Name is required')
		}
	})

	const { web3Provider, accounts, signer, isConnected, connectWallet } =
		useWallet()

	return (
		<form
			onSubmit={form.onSubmit(async values => {
				try {
					setIsSubmitting(true)
					const createContract = makeFetcher<
						MeemAPI.v1.CreateContract.IQueryParams,
						MeemAPI.v1.CreateContract.IRequestBody,
						MeemAPI.v1.CreateContract.IResponseBody
					>({
						method: MeemAPI.v1.CreateContract.method
					})
					await createContract(
						MeemAPI.v1.CreateContract.path(),
						undefined,
						{
							...values,
							contractType:
								values.contractType as MeemAPI.ContractType,
							abi: JSON.parse(values.abi),
							functionSelectors:
								values.functionSelectors.length > 0
									? values.functionSelectors
											.split('\n')
											.map(v => v.trim())
									: []
						}
					)

					form.reset()

					showNotification({
						title: 'Contract created',
						message:
							'The contract was saved and can now be deployed.'
					})
					console.log(values)
				} catch (e) {
					console.log(e)
				}
				setIsSubmitting(false)
			})}
		>
			<div className={classes.header}>
				<Text className={classes.headerPrompt}>Add a contract</Text>
			</div>

			<Container>
				<Select
					label="Contract Type"
					placeholder="Pick one"
					required
					data={[
						{
							value: MeemAPI.ContractType.Regular,
							label: 'Regular Contract'
						},
						{
							value: MeemAPI.ContractType.DiamondProxy,
							label: 'Diamond Proxy (EIP-2535)'
						},
						{
							value: MeemAPI.ContractType.DiamondFacet,
							label: 'Diamond Facet (EIP-2535)'
						}
					]}
					{...form.getInputProps('contractType')}
				/>
			</Container>

			<Container>
				<TextInput
					label="Name"
					radius="lg"
					size="md"
					maxLength={140}
					placeholder="Meem Permissions"
					required
					{...form.getInputProps('name')}
				/>
			</Container>
			<Space h={8} />
			<Container>
				<Textarea
					label="Description"
					radius="lg"
					size="md"
					autosize
					minRows={3}
					maxRows={5}
					maxLength={5000}
					placeholder="This contract does something..."
					required
					{...form.getInputProps('description')}
				/>
			</Container>
			<Container>
				<JsonInput
					radius="lg"
					label="ABI"
					size="md"
					autosize
					minRows={5}
					maxRows={6}
					placeholder={`[
	{
		"inputs": [
		{
			"internalType": "address",
			"name": "owner",
			"type": "address"
		}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]`}
					{...form.getInputProps('abi')}
				/>
			</Container>
			<Container>
				<Textarea
					label="Bytecode"
					radius="lg"
					size="md"
					autosize
					minRows={5}
					maxRows={6}
					placeholder="0x..."
					{...form.getInputProps('bytecode')}
				/>
			</Container>
			{form.values.contractType === MeemAPI.ContractType.DiamondFacet && (
				<>
					<Container>
						<Textarea
							label="Function Selectors (1 per line)"
							radius="lg"
							size="md"
							autosize
							minRows={5}
							maxRows={6}
							maxLength={5000}
							// required
							placeholder={`0x25b75159
0x10f4af12
0x6219ad0b
0x96973b2a
0xe107c137`}
							{...form.getInputProps('functionSelectors')}
						/>
					</Container>
				</>
			)}
			<Center>
				<Button
					type="submit"
					loading={isSubmitting}
					className={classes.buttonCreate}
				>
					Continue
				</Button>
			</Center>
		</form>
	)
}
