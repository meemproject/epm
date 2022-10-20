import { useSubscription } from '@apollo/client'
import log from '@kengoldfarb/log'
import {
	Text,
	Center,
	Button,
	Space,
	Title,
	Skeleton,
	Modal,
	createStyles
} from '@mantine/core'
import { formList, useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { MeemAPI } from '@meemproject/api'
import { makeFetcher, useWallet } from '@meemproject/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Download, Rocket } from 'tabler-icons-react'
import {
	Contracts,
	SubGetBundleByIdSubscription
} from '../../../generated/graphql'
import { SUB_GET_BUNDLE_BY_ID } from '../../graphql/contracts'
import { downloadFile, formatFilename } from '../../lib/utils'
import { Page } from '../../styles/Page'
import { DemoCode } from '../Atoms/DemoCode'
import { BundleForm } from './BundleForm'
import { DeployBundle } from './DeployBundle'

const useStyles = createStyles(_theme => ({
	row: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row'
	}
}))

export const BundleContainer: React.FC = () => {
	const router = useRouter()
	const { classes } = useStyles()
	const bundleId = router.query.bundleId as string
	const { chainId } = useWallet()

	const form = useForm({
		initialValues: {
			facets: formList<{ selectors: string[]; contractId: string }>([]),
			name: '',
			description: ''
		},
		validate: {}
	})

	const [hasInitialized, setHasInitialized] = useState(false)
	const [isSaving, setIsSaving] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	const { loading: isLoading, data } =
		useSubscription<SubGetBundleByIdSubscription>(SUB_GET_BUNDLE_BY_ID, {
			variables: {
				id: bundleId,
				chainId
			}
		})

	const handleSave = async (values: typeof form.values) => {
		try {
			setIsSaving(true)

			if (values.facets.length === 0) {
				showNotification({
					title: 'No Facets Added!',
					message: 'Add some facets to your bundle before saving',
					color: 'green'
				})
				return
			}

			const updateBundle = makeFetcher<
				MeemAPI.v1.UpdateBundle.IQueryParams,
				MeemAPI.v1.UpdateBundle.IRequestBody,
				MeemAPI.v1.UpdateBundle.IResponseBody
			>({
				method: MeemAPI.v1.UpdateBundle.method
			})

			await updateBundle(
				MeemAPI.v1.UpdateBundle.path({
					bundleId: router.query.bundleId as string
				}),
				undefined,
				{
					name: values.name,
					description: values.description,
					contracts: values.facets.map(f => ({
						id: f.contractId,
						functionSelectors: f.selectors
					}))
				}
			)

			showNotification({
				title: 'Bundle Saved!',
				message: 'The bundle has been saved.',
				color: 'green'
			})
		} catch (e) {
			log.crit(e)
			showNotification({
				title: 'Error',
				message: 'An error occurred while saving the bundle.',
				color: 'red'
			})
		}
		setIsSaving(false)
	}

	const handleDownloadABI = async () => {
		try {
			const bundle = data?.Bundles[0]
			if (!bundle) {
				showNotification({
					title: 'Error',
					message: 'Bundle not found',
					color: 'red'
				})
				return
			}

			downloadFile(
				`${formatFilename(bundle.name)}.json`,
				JSON.stringify(bundle.abi)
			)
			showNotification({
				title: 'Success!',
				message: 'ABI file generated.',
				color: 'green'
			})
		} catch (e) {
			log.crit(e)
		}
		setIsSaving(false)
	}

	useEffect(() => {
		if (!hasInitialized && data?.Bundles[0]) {
			form.setValues({
				name: data?.Bundles[0].name,
				description: data?.Bundles[0].description,
				facets: formList(
					data?.Bundles[0].BundleContracts.map(bc => ({
						selectors: bc.functionSelectors,
						target: bc.Contract?.id,
						contractId: bc.Contract?.id
					}))
				)
			})

			setHasInitialized(true)
		}
	}, [hasInitialized, form, data])

	const contracts: Contracts[] = []
	if (data?.Bundles[0].BundleContracts) {
		data?.Bundles[0].BundleContracts.forEach(bc => {
			if (bc.Contract) {
				contracts.push(bc.Contract as Contracts)
			}
		})
	}

	return (
		<Page>
			<form onSubmit={form.onSubmit(values => handleSave(values))}>
				<Title>Bundle</Title>
				<Space h={12} />
				<Text color="dimmed">
					Create a bundle of facets that you can easily deploy
					together
				</Text>
				<Space h={16} />
				<Title order={4}>Example Code</Title>
				<Space h={8} />
				<DemoCode
					name={
						data?.Bundles[0].name.replace(/\s/g, '') ?? 'MyContract'
					}
				/>
				<Space h={8} />
				<div className={classes.row}>
					<Button
						leftIcon={<Download />}
						onClick={async () => {
							const genTypes = makeFetcher<
								MeemAPI.v1.GenerateTypes.IQueryParams,
								MeemAPI.v1.GenerateTypes.IRequestBody,
								MeemAPI.v1.GenerateTypes.IResponseBody
							>({
								method: MeemAPI.v1.GenerateTypes.method
							})

							const fileName =
								data?.Bundles[0].name.replace(/\s/g, '') ??
								'MyContract'

							const { types } = await genTypes(
								MeemAPI.v1.GenerateTypes.path(),
								undefined,
								{
									bundleId,
									name: fileName
								}
							)

							downloadFile(`${fileName}.ts`, types)
						}}
					>
						Download Types
					</Button>

					<Space w={16} />
					<Button
						disabled={isLoading || isSaving}
						onClick={handleDownloadABI}
						leftIcon={<Download />}
					>
						Download ABI
					</Button>
					<Space w={16} />
					<Button
						leftIcon={<Rocket />}
						loading={isSaving}
						disabled={isLoading || isSaving}
						onClick={() => setIsOpen(true)}
					>
						Deploy Bundle
					</Button>
				</div>
				<Space h={16} />
				{!hasInitialized && (
					<>
						<Skeleton width="100%" height={200} />
						<Space h={24} />
						<Skeleton width="100%" height={500} />
					</>
				)}
				{hasInitialized && (
					<>
						<Title order={3}>Bundle Info</Title>
						<BundleForm
							form={form}
							isLoading={isLoading}
							contracts={contracts}
						/>
						<Space h={24} />
						<Center>
							<Button
								type="submit"
								loading={isSaving}
								disabled={isLoading || isSaving}
							>
								Save
							</Button>
						</Center>
					</>
				)}
			</form>
			<Modal
				title={<Title>Deploy Bundle</Title>}
				opened={isOpen}
				onClose={() => setIsOpen(false)}
				size="xl"
			>
				<DeployBundle bundleId={bundleId} />
			</Modal>
		</Page>
	)
}
