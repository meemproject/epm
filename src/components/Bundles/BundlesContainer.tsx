import { Space, Modal, Title } from '@mantine/core'
import Link from 'next/link'
import React, { useState } from 'react'
import { Bundles } from '../../../generated/graphql'
import { Page } from '../../styles/Page'
import { DeployBundle } from './DeployBundle'
import { FindBundle } from './FindBundle'

export const BundlesContainer: React.FC = () => {
	const [selectedBundle, setSelectedBundle] = useState<Bundles>()

	const [isOpen, setIsOpen] = useState(false)

	return (
		<Page>
			<Title>Search Bundles</Title>
			<Space h={16} />
			<Link href="/createbundle">
				<a>Create a bundle</a>
			</Link>
			<Space h={16} />

			<FindBundle
				onSelect={bundle => {
					setSelectedBundle(bundle)
					setIsOpen(true)
				}}
				ctaText="Deploy"
			/>
			<Modal
				title={<Title>Deploy Bundle</Title>}
				opened={isOpen}
				onClose={() => setIsOpen(false)}
				size="xl"
			>
				<DeployBundle bundleId={selectedBundle?.id} />
			</Modal>
		</Page>
	)
}
