import { gql } from '@apollo/client'

export const CONTRACT_PARTS = gql`
	fragment ContractParts on Contracts {
		id
		name
		description
		abi
		bytecode
		contractType
		functionSelectors
		ContractInstances {
			chainId
			address

			WalletContractInstances {
				name
				note
			}
		}
		CreatorId
		Creator {
			address
		}
	}
`

export const SEARCH_CONTRACTS = gql`
	query SearchContracts($contractType: String, $searchTerm: String) {
		Contracts(
			where: {
				contractType: { _eq: $contractType }
				_or: [
					{ name: { _ilike: $searchTerm } }
					{ description: { _ilike: $searchTerm } }
				]
			}
		) {
			...ContractParts
		}
	}

	${CONTRACT_PARTS}
`

export const GET_CONTRACTS_BY_ADDRESS = gql`
	query GetContractsByAddresses($addresses: [String!]) {
		ContractInstances(where: { address: { _in: $addresses } }) {
			id
			address
			WalletContractInstances {
				name
				note

				ContractInstance {
					id
					address
					chainId
				}
			}
			Contract {
				...ContractParts
			}
		}
	}

	${CONTRACT_PARTS}
`

export const GET_CONTRACTS_BY_ID = gql`
	query GetContractsById($ids: [uuid!]) {
		Contracts(where: { id: { _in: $ids } }) {
			...ContractParts
		}
	}

	${CONTRACT_PARTS}
`

export const GET_MY_CONTRACTS_SUBSCRIPTION = gql`
	subscription GetMyContractsSubscription($address: String!) {
		Wallets(where: { address: { _ilike: $address } }) {
			id
			WalletContractInstances {
				id
				note
				name
				ContractInstance {
					id
					address
					chainId
					Contract {
						...ContractParts
					}
				}
			}
		}
	}

	${CONTRACT_PARTS}
`

export const GET_MY_CONTRACTS = gql`
	query GetMyContracts($address: String!) {
		Wallets(where: { address: { _ilike: $address } }) {
			id
			WalletContractInstances {
				id
				note
				name
				ContractInstance {
					id
					address
					chainId
					Contract {
						...ContractParts
					}
				}
			}
		}
	}

	${CONTRACT_PARTS}
`

export const SEARCH_BUNDLES = gql`
	query SearchBundles($searchTerm: String) {
		Bundles(
			where: {
				_or: [
					{ name: { _ilike: $searchTerm } }
					{ description: { _ilike: $searchTerm } }
				]
			}
		) {
			id
			name
			description
			BundleContracts {
				id
				order
				functionSelectors
				Contract {
					...ContractParts
				}
			}
			Creator {
				address
			}
		}
	}

	${CONTRACT_PARTS}
`

export const GET_BUNDLE_BY_ID = gql`
	query GetBundleById($id: uuid!) {
		Bundles(where: { id: { _eq: $id } }) {
			id
			name
			description
			BundleContracts(order_by: { order: asc }) {
				id
				order
				functionSelectors
				Contract {
					...ContractParts
				}
			}
			Creator {
				address
			}
		}
	}

	${CONTRACT_PARTS}
`

export const SUB_SEARCH_CONTRACTS = gql`
	subscription SubSearchContracts(
		$contractType: String
		$searchTerm: String
	) {
		Contracts(
			where: {
				contractType: { _eq: $contractType }
				_or: [
					{ name: { _ilike: $searchTerm } }
					{ description: { _ilike: $searchTerm } }
				]
			}
		) {
			...ContractParts
		}
	}

	${CONTRACT_PARTS}
`

export const SUB_GET_CONTRACTS_BY_ADDRESS = gql`
	subscription SubGetContractsByAddresses($addresses: [String!]) {
		ContractInstances(where: { address: { _in: $addresses } }) {
			id
			address
			WalletContractInstances {
				name
				note

				ContractInstance {
					id
					address
					chainId
				}
			}
			Contract {
				...ContractParts
			}
		}
	}

	${CONTRACT_PARTS}
`

export const SUB_GET_CONTRACTS_BY_ID = gql`
	subscription SubGetContractsById($ids: [uuid!]) {
		Contracts(where: { id: { _in: $ids } }) {
			...ContractParts
		}
	}

	${CONTRACT_PARTS}
`

export const SUB_GET_MY_CONTRACTS = gql`
	subscription SubGetMyContracts($address: String!) {
		Wallets(where: { address: { _ilike: $address } }) {
			id
			WalletContractInstances(order_by: { createdAt: desc }) {
				id
				note
				name
				ContractInstance {
					id
					address
					chainId
					Contract {
						...ContractParts
					}
				}
			}
		}
	}

	${CONTRACT_PARTS}
`

export const SUB_SEARCH_BUNDLES = gql`
	subscription SubSearchBundles($searchTerm: String) {
		Bundles(
			where: {
				_or: [
					{ name: { _ilike: $searchTerm } }
					{ description: { _ilike: $searchTerm } }
				]
			}
		) {
			id
			name
			description
			BundleContracts {
				id
				order
				functionSelectors
				Contract {
					...ContractParts
				}
			}
			Creator {
				address
			}
		}
	}

	${CONTRACT_PARTS}
`

export const SUB_GET_BUNDLE_BY_ID = gql`
	subscription SubGetBundleById($id: uuid!, $chainId: Int) {
		Bundles(where: { id: { _eq: $id } }) {
			id
			name
			description
			abi
			BundleContracts(order_by: { order: asc }) {
				id
				order
				functionSelectors
				Contract {
					# ...ContractParts
					id
					name
					description
					abi
					bytecode
					contractType
					functionSelectors
					ContractInstances(where: { chainId: { _eq: $chainId } }) {
						chainId
						address

						WalletContractInstances {
							name
							note
						}
					}
					CreatorId
					Creator {
						address
					}
				}
			}
			Creator {
				address
			}
		}
	}

	${CONTRACT_PARTS}
`
