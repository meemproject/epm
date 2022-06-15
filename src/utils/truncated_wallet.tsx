import { ethers } from 'ethers'

export async function ensWalletAddress(address: string): Promise<string> {
	if (address.length === 0) {
		return ''
	}
	const provider = new ethers.providers.AlchemyProvider(
		'mainnet',
		process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
	)
	const name = await provider.lookupAddress(address)
	if (name !== null) return name

	return address.toLowerCase()
}

export function quickTruncate(address: string): string {
	if (!address || address.length === 0) {
		return ''
	}

	const walletAddressLength = address.length
	if (walletAddressLength > 15) {
		const truncatedWallet = `${address.substring(
			0,
			5
		)}...${address.substring(walletAddressLength - 5, walletAddressLength)}`
		return truncatedWallet.toLowerCase()
	} else {
		return address.toLowerCase()
	}
}
