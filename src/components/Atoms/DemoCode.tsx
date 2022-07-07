import { Spoiler } from '@mantine/core'
import { Prism } from '@mantine/prism'
import React from 'react'

export const demoCode = (name: string) => {
	const safeName = name.replace(/[^a-zA-Z0-9]/g, '')

	return `import React, { useState } from 'react'
// Import from the generated and downloaded file
import { ${safeName}__factory } from '../types/${safeName}'
import { useWallet } from '@meemproject/react'

export const Home: React.FC = () => {
	// Use @meemproject/react wallet context
	const { isConnected, connectWallet, accounts, signer } = useWallet()
	const [contractAddress, setContractAddress] = useState('')

	const handleConnectWallet = () => {
		connectWallet()
	}

	const handleCallContract = async () => {
		if (signer) {
			// Create an instance of the contract
			const contract = ${safeName}__factory.connect(
				contractAddress,
				signer
			)
			// Call contract method
			const totalSupply = await contract.totalSupply()
			console.log(\`Total Supply: \${totalSupply}\`)
		}
	}
	return (
		<div>
			<h1>${name} Playground</h1>
			{!isConnected && (
				<button onClick={handleConnectWallet}>Connect Wallet</button>
			)}
			{isConnected && (
				<>
					<p>{\`Connected as \${accounts[0]}\`}</p>
					<input
						type="text"
						placeholder="0x..."
						onChange={e => setContractAddress(e.target.value)}
						value={contractAddress}
					/>
					<button onClick={handleCallContract}>Call contract</button>
				</>
			)}
		</div>
	)
}
`
}

export const DemoCode: React.FC<{
	name: string
}> = options => (
	<Spoiler showLabel="Show Code" hideLabel="Hide Code" maxHeight={50}>
		<Prism language="tsx">{demoCode(options.name)}</Prism>
	</Spoiler>
)
