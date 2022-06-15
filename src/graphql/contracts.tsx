import { gql } from '@apollo/client'

export const GET_CONTRACTS_BY_TYPE = gql`
	query GetContracts($contractType: String, $creatorId: String) {
		Contracts(where: { contractType: { _eq: $contractType } }) {
			id
			name
			description
			abi
			address
			bytecode
			chainId
			contractType
			CreatorId
		}
	}
`

// # ${options.creatorId ? 'CreatorId: { _eq: $creatorId }' : ''}
