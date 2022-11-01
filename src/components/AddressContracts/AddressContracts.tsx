import { useSubscription } from '@apollo/client'
import log from '@kengoldfarb/log'
import {
	Text,
	Button,
	Modal,
	Space,
	Grid,
	TextInput,
	Title,
	Skeleton
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { MeemAPI, makeFetcher } from '@meemproject/api'
import { useWallet } from '@meemproject/react'
import { ethers } from 'ethers'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SubGetMyContractsSubscription } from '../../../generated/graphql'
import { SUB_GET_MY_CONTRACTS } from '../../graphql/contracts'
import { ChainSelect } from '../Atoms/ChainSelect'
import { WalletContractCard } from '../Atoms/WalletContractCard'

export interface IProps {
	address: string
}

export const AddressContracts: React.FC<IProps> = ({ address }) => {
	const { chainId } = useWallet()
	const [isOpen, setIsOpen] = useState(false)
	const [isChainSet, setIsChainSet] = useState(false)

	const { loading: isLoading, data: contractQueryResult } =
		useSubscription<SubGetMyContractsSubscription>(SUB_GET_MY_CONTRACTS, {
			shouldResubscribe: true,
			fetchPolicy: 'no-cache',
			variables: {
				address
			}
		})

	const form = useForm({
		initialValues: {
			address: '',
			chainId: ''
		},
		validate: {
			address: val =>
				ethers.utils.isAddress(val)
					? null
					: 'A valid address is required'
		}
	})

	useEffect(() => {
		if (chainId && !isChainSet) {
			form.setFieldValue('chainId', chainId.toString())
			setIsChainSet(true)
		}
	}, [form, chainId, isChainSet])

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Track Contract</Button>

			{contractQueryResult?.Wallets[0].WalletContractInstances.length ===
				0 && (
				<>
					<Space h={24} />
					<Text>
						You&apos;re not tracking any contracts yet. You can
						either manually input a contract address in &quot;Track
						Contract&quot; or{' '}
						<Link href="/contracts">
							<a>find a contract to deploy</a>
						</Link>
					</Text>
				</>
			)}
			<Space h={24} />
			<Grid>
				{isLoading &&
					[...Array(6)].map((_, i) => (
						<Grid.Col md={6} key={`col-${i}`}>
							<Skeleton height="380px" width="100%" />
							<Space h={8} />
						</Grid.Col>
					))}
				{contractQueryResult?.Wallets[0].WalletContractInstances.map(
					instance => (
						<Grid.Col md={6} key={instance.id}>
							<WalletContractCard
								walletContract={instance}
								href={`/manage?address=${instance.ContractInstance?.address}&chainId=${instance.ContractInstance?.chainId}`}
							/>
							<Space h={16} />
						</Grid.Col>
					)
				)}
			</Grid>

			<Modal
				title={<Title>Track Contract</Title>}
				opened={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<form
					onSubmit={form.onSubmit(async values => {
						try {
							const trackContract = makeFetcher<
								MeemAPI.v1.TrackContractInstance.IQueryParams,
								MeemAPI.v1.TrackContractInstance.IRequestBody,
								MeemAPI.v1.TrackContractInstance.IResponseBody
							>({
								method: MeemAPI.v1.TrackContractInstance.method
							})
							await trackContract(
								MeemAPI.v1.TrackContractInstance.path(),
								undefined,
								{
									...values,
									chainId: +values.chainId
								}
							)
							setIsOpen(false)
						} catch (e) {
							log.warn(e)
						}
					})}
				>
					<Text>
						{
							'Tracking a contract will make it show up in "My Contracts". You can track any contract, even ones you don\'t own.'
						}
					</Text>
					<Space h={12} />
					<ChainSelect form={form} />
					<Space h={12} />
					<TextInput
						label="Contract Address"
						placeholder="0x..."
						onBlur={() => form.validate()}
						{...form.getInputProps('address')}
					/>
					<Space h={12} />
					<Button
						type="submit"
						disabled={
							form.values.address.length === 0 ||
							Object.values(form.values).length === 0
						}
					>
						Add
					</Button>
				</form>
			</Modal>
		</>
	)
}
