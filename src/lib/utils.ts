export type ArrayElement<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never

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
