export const diamondABI = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'target',
						type: 'address'
					},
					{
						internalType: 'enum IDiamondCuttable.FacetCutAction',
						name: 'action',
						type: 'uint8'
					},
					{
						internalType: 'bytes4[]',
						name: 'selectors',
						type: 'bytes4[]'
					}
				],
				indexed: false,
				internalType: 'struct IDiamondCuttable.FacetCut[]',
				name: 'facetCuts',
				type: 'tuple[]'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'target',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'data',
				type: 'bytes'
			}
		],
		name: 'DiamondCut',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		stateMutability: 'payable',
		type: 'fallback'
	},
	{
		inputs: [],
		name: 'acceptOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'target',
						type: 'address'
					},
					{
						internalType: 'enum IDiamondCuttable.FacetCutAction',
						name: 'action',
						type: 'uint8'
					},
					{
						internalType: 'bytes4[]',
						name: 'selectors',
						type: 'bytes4[]'
					}
				],
				internalType: 'struct IDiamondCuttable.FacetCut[]',
				name: 'facetCuts',
				type: 'tuple[]'
			},
			{
				internalType: 'address',
				name: 'target',
				type: 'address'
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes'
			}
		],
		name: 'diamondCut',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'selector',
				type: 'bytes4'
			}
		],
		name: 'facetAddress',
		outputs: [
			{
				internalType: 'address',
				name: 'facet',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'facetAddresses',
		outputs: [
			{
				internalType: 'address[]',
				name: 'addresses',
				type: 'address[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'facet',
				type: 'address'
			}
		],
		name: 'facetFunctionSelectors',
		outputs: [
			{
				internalType: 'bytes4[]',
				name: 'selectors',
				type: 'bytes4[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'facets',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'target',
						type: 'address'
					},
					{
						internalType: 'bytes4[]',
						name: 'selectors',
						type: 'bytes4[]'
					}
				],
				internalType: 'struct IDiamondLoupe.Facet[]',
				name: 'diamondFacets',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'getFallbackAddress',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'nomineeOwner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'fallbackAddress',
				type: 'address'
			}
		],
		name: 'setFallbackAddress',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'interfaceId',
				type: 'bytes4'
			}
		],
		name: 'supportsInterface',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address'
			}
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		stateMutability: 'payable',
		type: 'receive'
	}
]
