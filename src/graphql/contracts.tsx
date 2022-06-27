import { gql } from '@apollo/client'

// export const GET_CONTRACTS_BY_TYPE = gql`
// 	query GetContracts($contractType: String) {
// 		Contracts(where: { contractType: { _eq: $contractType } }) {
// 			id
// 			name
// 			description
// 			abi
// 			bytecode
// 			contractType
// 			CreatorId
// 			Creator {
// 				address
// 			}
// 		}
// 	}
// `

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

// // # ${options.creatorId ? 'CreatorId: { _eq: $creatorId }' : ''}
