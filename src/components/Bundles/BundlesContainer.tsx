import { useQuery } from '@apollo/client'
import log from '@kengoldfarb/log'
import {
	createStyles,
	Text,
	Center,
	Button,
	TextInput,
	Space,
	Modal,
	Group,
	Timeline,
	ThemeIcon,
	Title,
	Skeleton,
	Textarea,
	Grid
} from '@mantine/core'
import { formList, useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { MeemAPI } from '@meemproject/api'
import { getCuts, IVersion, upgrade } from '@meemproject/meem-contracts'
import { makeFetcher, useWallet } from '@meemproject/react'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import {
	Bulb,
	BulbOff,
	Check,
	CirclePlus,
	CircleX,
	Diamond,
	DiamondOff,
	FaceIdError,
	GripVertical
} from 'tabler-icons-react'
import {
	Bundles,
	Contracts,
	GetBundleByIdQuery,
	GetContractsByAddressesQuery,
	GetContractsByIdQuery,
	SearchBundlesQuery
} from '../../../generated/graphql'
import {
	GET_BUNDLE_BY_ID,
	GET_CONTRACTS_BY_ID,
	SEARCH_BUNDLES
} from '../../graphql/contracts'
import { diamondABI } from '../../lib/diamond'
import { Page } from '../../styles/Page'
import { Address } from '../Atoms/Address'
import { BundleCard } from '../Atoms/BundleCard'
import { ContractCard } from '../Atoms/ContractCard'
import { FacetList } from '../Atoms/FacetList'
import { FindFacet, IProps as IFindFacetProps } from '../Atoms/FindFacet'
import { IconButton } from '../Atoms/IconButton'
import { BundleForm } from './BundleForm'
import { FindBundle } from './FindBundle'

const useStyles = createStyles(_theme => ({
	section_wrapper: {
		display: 'flex'
	},
	facet_container: {
		width: '100%'
	}
}))

export const BundlesContainer: React.FC = () => {
	const router = useRouter()
	const { classes } = useStyles()

	const [hasInitialized, setHasInitialized] = useState(false)
	const [isSaving, setIsSaving] = useState(false)
	const [selectedBundle, setSelectedBundle] = useState<Bundles>()

	const [isOpen, setIsOpen] = useState(false)
	const { signer, chainId, setChain } = useWallet()

	return (
		<Page>
			<Title>Search Bundles</Title>
			<Space h={16} />
			<Text color="dimmed">Find a bundle</Text>
			<Space h={16} />
			<FindBundle
				onSelect={bundle => {
					setSelectedBundle(bundle)
					setIsOpen(true)
				}}
				ctaText="Deploy"
			/>
			<Modal opened={isOpen} onClose={() => setIsOpen(false)}></Modal>
		</Page>
	)
}
