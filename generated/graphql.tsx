import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** columns and relationships of "AgreementExtensions" */
export type AgreementExtensions = {
  __typename?: 'AgreementExtensions';
  /** An object relationship */
  Agreement?: Maybe<Agreements>;
  AgreementId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  AgreementRole?: Maybe<AgreementRoles>;
  AgreementRoleId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  Extension?: Maybe<Extensions>;
  ExtensionId?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isEnabled: Scalars['Boolean'];
  metadata: Scalars['jsonb'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "AgreementExtensions" */
export type AgreementExtensionsMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "AgreementExtensions" */
export type AgreementExtensions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AgreementExtensions_Max_Order_By>;
  min?: InputMaybe<AgreementExtensions_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "AgreementExtensions". All fields are combined with a logical 'AND'. */
export type AgreementExtensions_Bool_Exp = {
  Agreement?: InputMaybe<Agreements_Bool_Exp>;
  AgreementId?: InputMaybe<Uuid_Comparison_Exp>;
  AgreementRole?: InputMaybe<AgreementRoles_Bool_Exp>;
  AgreementRoleId?: InputMaybe<Uuid_Comparison_Exp>;
  Extension?: InputMaybe<Extensions_Bool_Exp>;
  ExtensionId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<AgreementExtensions_Bool_Exp>>;
  _not?: InputMaybe<AgreementExtensions_Bool_Exp>;
  _or?: InputMaybe<Array<AgreementExtensions_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "AgreementExtensions" */
export type AgreementExtensions_Max_Order_By = {
  AgreementId?: InputMaybe<Order_By>;
  AgreementRoleId?: InputMaybe<Order_By>;
  ExtensionId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "AgreementExtensions" */
export type AgreementExtensions_Min_Order_By = {
  AgreementId?: InputMaybe<Order_By>;
  AgreementRoleId?: InputMaybe<Order_By>;
  ExtensionId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "AgreementExtensions". */
export type AgreementExtensions_Order_By = {
  Agreement?: InputMaybe<Agreements_Order_By>;
  AgreementId?: InputMaybe<Order_By>;
  AgreementRole?: InputMaybe<AgreementRoles_Order_By>;
  AgreementRoleId?: InputMaybe<Order_By>;
  Extension?: InputMaybe<Extensions_Order_By>;
  ExtensionId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isEnabled?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "AgreementExtensions" */
export enum AgreementExtensions_Select_Column {
  /** column name */
  AgreementId = 'AgreementId',
  /** column name */
  AgreementRoleId = 'AgreementRoleId',
  /** column name */
  ExtensionId = 'ExtensionId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsEnabled = 'isEnabled',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "AgreementExtensions" */
export type AgreementExtensions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AgreementExtensions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AgreementExtensions_Stream_Cursor_Value_Input = {
  AgreementId?: InputMaybe<Scalars['uuid']>;
  AgreementRoleId?: InputMaybe<Scalars['uuid']>;
  ExtensionId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isEnabled?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "AgreementRoles" */
export type AgreementRoles = {
  __typename?: 'AgreementRoles';
  /** An object relationship */
  Agreement?: Maybe<Agreements>;
  /** An object relationship */
  AgreementExtension?: Maybe<AgreementExtensions>;
  AgreementId?: Maybe<Scalars['uuid']>;
  OwnerId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  Transaction?: Maybe<Transactions>;
  TransactionId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  Wallet?: Maybe<Wallets>;
  address: Scalars['String'];
  adminContractAddress?: Maybe<Scalars['String']>;
  chainId: Scalars['Int'];
  contractURI: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  ens?: Maybe<Scalars['String']>;
  ensFetchedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  isAdminRole: Scalars['Boolean'];
  isTransferrable: Scalars['Boolean'];
  maxSupply: Scalars['String'];
  metadata: Scalars['jsonb'];
  mintPermissions: Scalars['jsonb'];
  name: Scalars['String'];
  ownerFetchedAt?: Maybe<Scalars['timestamptz']>;
  slug: Scalars['String'];
  splits: Scalars['jsonb'];
  symbol: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "AgreementRoles" */
export type AgreementRolesMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "AgreementRoles" */
export type AgreementRolesMintPermissionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "AgreementRoles" */
export type AgreementRolesSplitsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "AgreementRoles" */
export type AgreementRoles_Aggregate_Order_By = {
  avg?: InputMaybe<AgreementRoles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AgreementRoles_Max_Order_By>;
  min?: InputMaybe<AgreementRoles_Min_Order_By>;
  stddev?: InputMaybe<AgreementRoles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AgreementRoles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AgreementRoles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AgreementRoles_Sum_Order_By>;
  var_pop?: InputMaybe<AgreementRoles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AgreementRoles_Var_Samp_Order_By>;
  variance?: InputMaybe<AgreementRoles_Variance_Order_By>;
};

/** order by avg() on columns of table "AgreementRoles" */
export type AgreementRoles_Avg_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "AgreementRoles". All fields are combined with a logical 'AND'. */
export type AgreementRoles_Bool_Exp = {
  Agreement?: InputMaybe<Agreements_Bool_Exp>;
  AgreementExtension?: InputMaybe<AgreementExtensions_Bool_Exp>;
  AgreementId?: InputMaybe<Uuid_Comparison_Exp>;
  OwnerId?: InputMaybe<Uuid_Comparison_Exp>;
  Transaction?: InputMaybe<Transactions_Bool_Exp>;
  TransactionId?: InputMaybe<Uuid_Comparison_Exp>;
  Wallet?: InputMaybe<Wallets_Bool_Exp>;
  _and?: InputMaybe<Array<AgreementRoles_Bool_Exp>>;
  _not?: InputMaybe<AgreementRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AgreementRoles_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  adminContractAddress?: InputMaybe<String_Comparison_Exp>;
  chainId?: InputMaybe<Int_Comparison_Exp>;
  contractURI?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  ens?: InputMaybe<String_Comparison_Exp>;
  ensFetchedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAdminRole?: InputMaybe<Boolean_Comparison_Exp>;
  isTransferrable?: InputMaybe<Boolean_Comparison_Exp>;
  maxSupply?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mintPermissions?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  ownerFetchedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  splits?: InputMaybe<Jsonb_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "AgreementRoles" */
export type AgreementRoles_Max_Order_By = {
  AgreementId?: InputMaybe<Order_By>;
  OwnerId?: InputMaybe<Order_By>;
  TransactionId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  adminContractAddress?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  contractURI?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  ens?: InputMaybe<Order_By>;
  ensFetchedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  maxSupply?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ownerFetchedAt?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "AgreementRoles" */
export type AgreementRoles_Min_Order_By = {
  AgreementId?: InputMaybe<Order_By>;
  OwnerId?: InputMaybe<Order_By>;
  TransactionId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  adminContractAddress?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  contractURI?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  ens?: InputMaybe<Order_By>;
  ensFetchedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  maxSupply?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ownerFetchedAt?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "AgreementRoles". */
export type AgreementRoles_Order_By = {
  Agreement?: InputMaybe<Agreements_Order_By>;
  AgreementExtension?: InputMaybe<AgreementExtensions_Order_By>;
  AgreementId?: InputMaybe<Order_By>;
  OwnerId?: InputMaybe<Order_By>;
  Transaction?: InputMaybe<Transactions_Order_By>;
  TransactionId?: InputMaybe<Order_By>;
  Wallet?: InputMaybe<Wallets_Order_By>;
  address?: InputMaybe<Order_By>;
  adminContractAddress?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  contractURI?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  ens?: InputMaybe<Order_By>;
  ensFetchedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAdminRole?: InputMaybe<Order_By>;
  isTransferrable?: InputMaybe<Order_By>;
  maxSupply?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  mintPermissions?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ownerFetchedAt?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  splits?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "AgreementRoles" */
export enum AgreementRoles_Select_Column {
  /** column name */
  AgreementId = 'AgreementId',
  /** column name */
  OwnerId = 'OwnerId',
  /** column name */
  TransactionId = 'TransactionId',
  /** column name */
  Address = 'address',
  /** column name */
  AdminContractAddress = 'adminContractAddress',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  ContractUri = 'contractURI',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Ens = 'ens',
  /** column name */
  EnsFetchedAt = 'ensFetchedAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsAdminRole = 'isAdminRole',
  /** column name */
  IsTransferrable = 'isTransferrable',
  /** column name */
  MaxSupply = 'maxSupply',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MintPermissions = 'mintPermissions',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerFetchedAt = 'ownerFetchedAt',
  /** column name */
  Slug = 'slug',
  /** column name */
  Splits = 'splits',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** order by stddev() on columns of table "AgreementRoles" */
export type AgreementRoles_Stddev_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "AgreementRoles" */
export type AgreementRoles_Stddev_Pop_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "AgreementRoles" */
export type AgreementRoles_Stddev_Samp_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "AgreementRoles" */
export type AgreementRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AgreementRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AgreementRoles_Stream_Cursor_Value_Input = {
  AgreementId?: InputMaybe<Scalars['uuid']>;
  OwnerId?: InputMaybe<Scalars['uuid']>;
  TransactionId?: InputMaybe<Scalars['uuid']>;
  address?: InputMaybe<Scalars['String']>;
  adminContractAddress?: InputMaybe<Scalars['String']>;
  chainId?: InputMaybe<Scalars['Int']>;
  contractURI?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  ens?: InputMaybe<Scalars['String']>;
  ensFetchedAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAdminRole?: InputMaybe<Scalars['Boolean']>;
  isTransferrable?: InputMaybe<Scalars['Boolean']>;
  maxSupply?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  mintPermissions?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  ownerFetchedAt?: InputMaybe<Scalars['timestamptz']>;
  slug?: InputMaybe<Scalars['String']>;
  splits?: InputMaybe<Scalars['jsonb']>;
  symbol?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** order by sum() on columns of table "AgreementRoles" */
export type AgreementRoles_Sum_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "AgreementRoles" */
export type AgreementRoles_Var_Pop_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "AgreementRoles" */
export type AgreementRoles_Var_Samp_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "AgreementRoles" */
export type AgreementRoles_Variance_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** columns and relationships of "AgreementTokens" */
export type AgreementTokens = {
  __typename?: 'AgreementTokens';
  /** An object relationship */
  Agreement?: Maybe<Agreements>;
  AgreementId?: Maybe<Scalars['uuid']>;
  OwnerId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  Transaction?: Maybe<Transactions>;
  /** An object relationship */
  Wallet?: Maybe<Wallets>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  metadata: Scalars['jsonb'];
  mintedAt: Scalars['timestamptz'];
  mintedBy: Scalars['String'];
  tokenId: Scalars['String'];
  tokenURI: Scalars['String'];
};


/** columns and relationships of "AgreementTokens" */
export type AgreementTokensMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "AgreementTokens" */
export type AgreementTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AgreementTokens_Max_Order_By>;
  min?: InputMaybe<AgreementTokens_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "AgreementTokens". All fields are combined with a logical 'AND'. */
export type AgreementTokens_Bool_Exp = {
  Agreement?: InputMaybe<Agreements_Bool_Exp>;
  AgreementId?: InputMaybe<Uuid_Comparison_Exp>;
  OwnerId?: InputMaybe<Uuid_Comparison_Exp>;
  Transaction?: InputMaybe<Transactions_Bool_Exp>;
  Wallet?: InputMaybe<Wallets_Bool_Exp>;
  _and?: InputMaybe<Array<AgreementTokens_Bool_Exp>>;
  _not?: InputMaybe<AgreementTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AgreementTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mintedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  mintedBy?: InputMaybe<String_Comparison_Exp>;
  tokenId?: InputMaybe<String_Comparison_Exp>;
  tokenURI?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "AgreementTokens" */
export type AgreementTokens_Max_Order_By = {
  AgreementId?: InputMaybe<Order_By>;
  OwnerId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mintedAt?: InputMaybe<Order_By>;
  mintedBy?: InputMaybe<Order_By>;
  tokenId?: InputMaybe<Order_By>;
  tokenURI?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "AgreementTokens" */
export type AgreementTokens_Min_Order_By = {
  AgreementId?: InputMaybe<Order_By>;
  OwnerId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mintedAt?: InputMaybe<Order_By>;
  mintedBy?: InputMaybe<Order_By>;
  tokenId?: InputMaybe<Order_By>;
  tokenURI?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "AgreementTokens". */
export type AgreementTokens_Order_By = {
  Agreement?: InputMaybe<Agreements_Order_By>;
  AgreementId?: InputMaybe<Order_By>;
  OwnerId?: InputMaybe<Order_By>;
  Transaction?: InputMaybe<Transactions_Order_By>;
  Wallet?: InputMaybe<Wallets_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  mintedAt?: InputMaybe<Order_By>;
  mintedBy?: InputMaybe<Order_By>;
  tokenId?: InputMaybe<Order_By>;
  tokenURI?: InputMaybe<Order_By>;
};

/** select columns of table "AgreementTokens" */
export enum AgreementTokens_Select_Column {
  /** column name */
  AgreementId = 'AgreementId',
  /** column name */
  OwnerId = 'OwnerId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MintedAt = 'mintedAt',
  /** column name */
  MintedBy = 'mintedBy',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TokenUri = 'tokenURI'
}

/** Streaming cursor of the table "AgreementTokens" */
export type AgreementTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AgreementTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AgreementTokens_Stream_Cursor_Value_Input = {
  AgreementId?: InputMaybe<Scalars['uuid']>;
  OwnerId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  mintedAt?: InputMaybe<Scalars['timestamptz']>;
  mintedBy?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenURI?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "Agreements" */
export type Agreements = {
  __typename?: 'Agreements';
  /** An array relationship */
  AgreementExtensions: Array<AgreementExtensions>;
  /** An array relationship */
  AgreementRoles: Array<AgreementRoles>;
  /** An array relationship */
  AgreementTokens: Array<AgreementTokens>;
  /** An object relationship */
  Transaction?: Maybe<Transactions>;
  /** An object relationship */
  Wallet?: Maybe<Wallets>;
  address: Scalars['String'];
  chainId: Scalars['Int'];
  contractURI: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  ens?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isTransferrable: Scalars['Boolean'];
  maxSupply: Scalars['String'];
  metadata: Scalars['jsonb'];
  mintPermissions: Scalars['jsonb'];
  name: Scalars['String'];
  slug: Scalars['String'];
  splits: Scalars['jsonb'];
  symbol: Scalars['String'];
};


/** columns and relationships of "Agreements" */
export type AgreementsAgreementExtensionsArgs = {
  distinct_on?: InputMaybe<Array<AgreementExtensions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AgreementExtensions_Order_By>>;
  where?: InputMaybe<AgreementExtensions_Bool_Exp>;
};


/** columns and relationships of "Agreements" */
export type AgreementsAgreementRolesArgs = {
  distinct_on?: InputMaybe<Array<AgreementRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AgreementRoles_Order_By>>;
  where?: InputMaybe<AgreementRoles_Bool_Exp>;
};


/** columns and relationships of "Agreements" */
export type AgreementsAgreementTokensArgs = {
  distinct_on?: InputMaybe<Array<AgreementTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AgreementTokens_Order_By>>;
  where?: InputMaybe<AgreementTokens_Bool_Exp>;
};


/** columns and relationships of "Agreements" */
export type AgreementsMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "Agreements" */
export type AgreementsMintPermissionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "Agreements" */
export type AgreementsSplitsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "Agreements" */
export type Agreements_Aggregate_Order_By = {
  avg?: InputMaybe<Agreements_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Agreements_Max_Order_By>;
  min?: InputMaybe<Agreements_Min_Order_By>;
  stddev?: InputMaybe<Agreements_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Agreements_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Agreements_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Agreements_Sum_Order_By>;
  var_pop?: InputMaybe<Agreements_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Agreements_Var_Samp_Order_By>;
  variance?: InputMaybe<Agreements_Variance_Order_By>;
};

/** order by avg() on columns of table "Agreements" */
export type Agreements_Avg_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Agreements". All fields are combined with a logical 'AND'. */
export type Agreements_Bool_Exp = {
  AgreementExtensions?: InputMaybe<AgreementExtensions_Bool_Exp>;
  AgreementRoles?: InputMaybe<AgreementRoles_Bool_Exp>;
  AgreementTokens?: InputMaybe<AgreementTokens_Bool_Exp>;
  Transaction?: InputMaybe<Transactions_Bool_Exp>;
  Wallet?: InputMaybe<Wallets_Bool_Exp>;
  _and?: InputMaybe<Array<Agreements_Bool_Exp>>;
  _not?: InputMaybe<Agreements_Bool_Exp>;
  _or?: InputMaybe<Array<Agreements_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  chainId?: InputMaybe<Int_Comparison_Exp>;
  contractURI?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  ens?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isTransferrable?: InputMaybe<Boolean_Comparison_Exp>;
  maxSupply?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mintPermissions?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  splits?: InputMaybe<Jsonb_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "Agreements" */
export type Agreements_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  contractURI?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  ens?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  maxSupply?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Agreements" */
export type Agreements_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  contractURI?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  ens?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  maxSupply?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Agreements". */
export type Agreements_Order_By = {
  AgreementExtensions_aggregate?: InputMaybe<AgreementExtensions_Aggregate_Order_By>;
  AgreementRoles_aggregate?: InputMaybe<AgreementRoles_Aggregate_Order_By>;
  AgreementTokens_aggregate?: InputMaybe<AgreementTokens_Aggregate_Order_By>;
  Transaction?: InputMaybe<Transactions_Order_By>;
  Wallet?: InputMaybe<Wallets_Order_By>;
  address?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  contractURI?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  ens?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isTransferrable?: InputMaybe<Order_By>;
  maxSupply?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  mintPermissions?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  splits?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
};

/** select columns of table "Agreements" */
export enum Agreements_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  ContractUri = 'contractURI',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Ens = 'ens',
  /** column name */
  Id = 'id',
  /** column name */
  IsTransferrable = 'isTransferrable',
  /** column name */
  MaxSupply = 'maxSupply',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MintPermissions = 'mintPermissions',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  Splits = 'splits',
  /** column name */
  Symbol = 'symbol'
}

/** order by stddev() on columns of table "Agreements" */
export type Agreements_Stddev_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Agreements" */
export type Agreements_Stddev_Pop_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Agreements" */
export type Agreements_Stddev_Samp_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Agreements" */
export type Agreements_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agreements_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Agreements_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  chainId?: InputMaybe<Scalars['Int']>;
  contractURI?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  ens?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isTransferrable?: InputMaybe<Scalars['Boolean']>;
  maxSupply?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  mintPermissions?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  splits?: InputMaybe<Scalars['jsonb']>;
  symbol?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "Agreements" */
export type Agreements_Sum_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "Agreements" */
export type Agreements_Var_Pop_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Agreements" */
export type Agreements_Var_Samp_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Agreements" */
export type Agreements_Variance_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "BundleContracts" */
export type BundleContracts = {
  __typename?: 'BundleContracts';
  /** An object relationship */
  Bundle?: Maybe<Bundles>;
  BundleId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  Contract?: Maybe<Contracts>;
  ContractId?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamptz'];
  functionSelectors: Scalars['jsonb'];
  id: Scalars['uuid'];
  order: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "BundleContracts" */
export type BundleContractsFunctionSelectorsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "BundleContracts" */
export type BundleContracts_Aggregate = {
  __typename?: 'BundleContracts_aggregate';
  aggregate?: Maybe<BundleContracts_Aggregate_Fields>;
  nodes: Array<BundleContracts>;
};

export type BundleContracts_Aggregate_Bool_Exp = {
  count?: InputMaybe<BundleContracts_Aggregate_Bool_Exp_Count>;
};

export type BundleContracts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<BundleContracts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BundleContracts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "BundleContracts" */
export type BundleContracts_Aggregate_Fields = {
  __typename?: 'BundleContracts_aggregate_fields';
  avg?: Maybe<BundleContracts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<BundleContracts_Max_Fields>;
  min?: Maybe<BundleContracts_Min_Fields>;
  stddev?: Maybe<BundleContracts_Stddev_Fields>;
  stddev_pop?: Maybe<BundleContracts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<BundleContracts_Stddev_Samp_Fields>;
  sum?: Maybe<BundleContracts_Sum_Fields>;
  var_pop?: Maybe<BundleContracts_Var_Pop_Fields>;
  var_samp?: Maybe<BundleContracts_Var_Samp_Fields>;
  variance?: Maybe<BundleContracts_Variance_Fields>;
};


/** aggregate fields of "BundleContracts" */
export type BundleContracts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<BundleContracts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "BundleContracts" */
export type BundleContracts_Aggregate_Order_By = {
  avg?: InputMaybe<BundleContracts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<BundleContracts_Max_Order_By>;
  min?: InputMaybe<BundleContracts_Min_Order_By>;
  stddev?: InputMaybe<BundleContracts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<BundleContracts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<BundleContracts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<BundleContracts_Sum_Order_By>;
  var_pop?: InputMaybe<BundleContracts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<BundleContracts_Var_Samp_Order_By>;
  variance?: InputMaybe<BundleContracts_Variance_Order_By>;
};

/** aggregate avg on columns */
export type BundleContracts_Avg_Fields = {
  __typename?: 'BundleContracts_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "BundleContracts" */
export type BundleContracts_Avg_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "BundleContracts". All fields are combined with a logical 'AND'. */
export type BundleContracts_Bool_Exp = {
  Bundle?: InputMaybe<Bundles_Bool_Exp>;
  BundleId?: InputMaybe<Uuid_Comparison_Exp>;
  Contract?: InputMaybe<Contracts_Bool_Exp>;
  ContractId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<BundleContracts_Bool_Exp>>;
  _not?: InputMaybe<BundleContracts_Bool_Exp>;
  _or?: InputMaybe<Array<BundleContracts_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  functionSelectors?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type BundleContracts_Max_Fields = {
  __typename?: 'BundleContracts_max_fields';
  BundleId?: Maybe<Scalars['uuid']>;
  ContractId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "BundleContracts" */
export type BundleContracts_Max_Order_By = {
  BundleId?: InputMaybe<Order_By>;
  ContractId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type BundleContracts_Min_Fields = {
  __typename?: 'BundleContracts_min_fields';
  BundleId?: Maybe<Scalars['uuid']>;
  ContractId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "BundleContracts" */
export type BundleContracts_Min_Order_By = {
  BundleId?: InputMaybe<Order_By>;
  ContractId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "BundleContracts". */
export type BundleContracts_Order_By = {
  Bundle?: InputMaybe<Bundles_Order_By>;
  BundleId?: InputMaybe<Order_By>;
  Contract?: InputMaybe<Contracts_Order_By>;
  ContractId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  functionSelectors?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "BundleContracts" */
export enum BundleContracts_Select_Column {
  /** column name */
  BundleId = 'BundleId',
  /** column name */
  ContractId = 'ContractId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FunctionSelectors = 'functionSelectors',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type BundleContracts_Stddev_Fields = {
  __typename?: 'BundleContracts_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "BundleContracts" */
export type BundleContracts_Stddev_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type BundleContracts_Stddev_Pop_Fields = {
  __typename?: 'BundleContracts_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "BundleContracts" */
export type BundleContracts_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type BundleContracts_Stddev_Samp_Fields = {
  __typename?: 'BundleContracts_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "BundleContracts" */
export type BundleContracts_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "BundleContracts" */
export type BundleContracts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: BundleContracts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type BundleContracts_Stream_Cursor_Value_Input = {
  BundleId?: InputMaybe<Scalars['uuid']>;
  ContractId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  functionSelectors?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type BundleContracts_Sum_Fields = {
  __typename?: 'BundleContracts_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "BundleContracts" */
export type BundleContracts_Sum_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type BundleContracts_Var_Pop_Fields = {
  __typename?: 'BundleContracts_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "BundleContracts" */
export type BundleContracts_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type BundleContracts_Var_Samp_Fields = {
  __typename?: 'BundleContracts_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "BundleContracts" */
export type BundleContracts_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type BundleContracts_Variance_Fields = {
  __typename?: 'BundleContracts_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "BundleContracts" */
export type BundleContracts_Variance_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** columns and relationships of "Bundles" */
export type Bundles = {
  __typename?: 'Bundles';
  /** An array relationship */
  BundleContracts: Array<BundleContracts>;
  /** An aggregate relationship */
  BundleContracts_aggregate: BundleContracts_Aggregate;
  /** An object relationship */
  Creator?: Maybe<Wallets>;
  CreatorId?: Maybe<Scalars['uuid']>;
  abi: Scalars['jsonb'];
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  types: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "Bundles" */
export type BundlesBundleContractsArgs = {
  distinct_on?: InputMaybe<Array<BundleContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BundleContracts_Order_By>>;
  where?: InputMaybe<BundleContracts_Bool_Exp>;
};


/** columns and relationships of "Bundles" */
export type BundlesBundleContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<BundleContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BundleContracts_Order_By>>;
  where?: InputMaybe<BundleContracts_Bool_Exp>;
};


/** columns and relationships of "Bundles" */
export type BundlesAbiArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "Bundles" */
export type Bundles_Aggregate = {
  __typename?: 'Bundles_aggregate';
  aggregate?: Maybe<Bundles_Aggregate_Fields>;
  nodes: Array<Bundles>;
};

export type Bundles_Aggregate_Bool_Exp = {
  count?: InputMaybe<Bundles_Aggregate_Bool_Exp_Count>;
};

export type Bundles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Bundles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Bundles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Bundles" */
export type Bundles_Aggregate_Fields = {
  __typename?: 'Bundles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Bundles_Max_Fields>;
  min?: Maybe<Bundles_Min_Fields>;
};


/** aggregate fields of "Bundles" */
export type Bundles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bundles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Bundles" */
export type Bundles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bundles_Max_Order_By>;
  min?: InputMaybe<Bundles_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "Bundles". All fields are combined with a logical 'AND'. */
export type Bundles_Bool_Exp = {
  BundleContracts?: InputMaybe<BundleContracts_Bool_Exp>;
  BundleContracts_aggregate?: InputMaybe<BundleContracts_Aggregate_Bool_Exp>;
  Creator?: InputMaybe<Wallets_Bool_Exp>;
  CreatorId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Bundles_Bool_Exp>>;
  _not?: InputMaybe<Bundles_Bool_Exp>;
  _or?: InputMaybe<Array<Bundles_Bool_Exp>>;
  abi?: InputMaybe<Jsonb_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  types?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Bundles_Max_Fields = {
  __typename?: 'Bundles_max_fields';
  CreatorId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "Bundles" */
export type Bundles_Max_Order_By = {
  CreatorId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  types?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bundles_Min_Fields = {
  __typename?: 'Bundles_min_fields';
  CreatorId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "Bundles" */
export type Bundles_Min_Order_By = {
  CreatorId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  types?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Bundles". */
export type Bundles_Order_By = {
  BundleContracts_aggregate?: InputMaybe<BundleContracts_Aggregate_Order_By>;
  Creator?: InputMaybe<Wallets_Order_By>;
  CreatorId?: InputMaybe<Order_By>;
  abi?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  types?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "Bundles" */
export enum Bundles_Select_Column {
  /** column name */
  CreatorId = 'CreatorId',
  /** column name */
  Abi = 'abi',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Types = 'types',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "Bundles" */
export type Bundles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bundles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bundles_Stream_Cursor_Value_Input = {
  CreatorId?: InputMaybe<Scalars['uuid']>;
  abi?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "ContractInstances" */
export type ContractInstances = {
  __typename?: 'ContractInstances';
  /** An object relationship */
  Contract?: Maybe<Contracts>;
  ContractId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  WalletContractInstances: Array<WalletContractInstances>;
  /** An aggregate relationship */
  WalletContractInstances_aggregate: WalletContractInstances_Aggregate;
  address: Scalars['String'];
  chainId: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "ContractInstances" */
export type ContractInstancesWalletContractInstancesArgs = {
  distinct_on?: InputMaybe<Array<WalletContractInstances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WalletContractInstances_Order_By>>;
  where?: InputMaybe<WalletContractInstances_Bool_Exp>;
};


/** columns and relationships of "ContractInstances" */
export type ContractInstancesWalletContractInstances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WalletContractInstances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WalletContractInstances_Order_By>>;
  where?: InputMaybe<WalletContractInstances_Bool_Exp>;
};

/** aggregated selection of "ContractInstances" */
export type ContractInstances_Aggregate = {
  __typename?: 'ContractInstances_aggregate';
  aggregate?: Maybe<ContractInstances_Aggregate_Fields>;
  nodes: Array<ContractInstances>;
};

export type ContractInstances_Aggregate_Bool_Exp = {
  count?: InputMaybe<ContractInstances_Aggregate_Bool_Exp_Count>;
};

export type ContractInstances_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ContractInstances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<ContractInstances_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ContractInstances" */
export type ContractInstances_Aggregate_Fields = {
  __typename?: 'ContractInstances_aggregate_fields';
  avg?: Maybe<ContractInstances_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<ContractInstances_Max_Fields>;
  min?: Maybe<ContractInstances_Min_Fields>;
  stddev?: Maybe<ContractInstances_Stddev_Fields>;
  stddev_pop?: Maybe<ContractInstances_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ContractInstances_Stddev_Samp_Fields>;
  sum?: Maybe<ContractInstances_Sum_Fields>;
  var_pop?: Maybe<ContractInstances_Var_Pop_Fields>;
  var_samp?: Maybe<ContractInstances_Var_Samp_Fields>;
  variance?: Maybe<ContractInstances_Variance_Fields>;
};


/** aggregate fields of "ContractInstances" */
export type ContractInstances_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ContractInstances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ContractInstances" */
export type ContractInstances_Aggregate_Order_By = {
  avg?: InputMaybe<ContractInstances_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ContractInstances_Max_Order_By>;
  min?: InputMaybe<ContractInstances_Min_Order_By>;
  stddev?: InputMaybe<ContractInstances_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ContractInstances_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ContractInstances_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ContractInstances_Sum_Order_By>;
  var_pop?: InputMaybe<ContractInstances_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ContractInstances_Var_Samp_Order_By>;
  variance?: InputMaybe<ContractInstances_Variance_Order_By>;
};

/** aggregate avg on columns */
export type ContractInstances_Avg_Fields = {
  __typename?: 'ContractInstances_avg_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ContractInstances" */
export type ContractInstances_Avg_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ContractInstances". All fields are combined with a logical 'AND'. */
export type ContractInstances_Bool_Exp = {
  Contract?: InputMaybe<Contracts_Bool_Exp>;
  ContractId?: InputMaybe<Uuid_Comparison_Exp>;
  WalletContractInstances?: InputMaybe<WalletContractInstances_Bool_Exp>;
  WalletContractInstances_aggregate?: InputMaybe<WalletContractInstances_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<ContractInstances_Bool_Exp>>;
  _not?: InputMaybe<ContractInstances_Bool_Exp>;
  _or?: InputMaybe<Array<ContractInstances_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  chainId?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type ContractInstances_Max_Fields = {
  __typename?: 'ContractInstances_max_fields';
  ContractId?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  chainId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "ContractInstances" */
export type ContractInstances_Max_Order_By = {
  ContractId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type ContractInstances_Min_Fields = {
  __typename?: 'ContractInstances_min_fields';
  ContractId?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  chainId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "ContractInstances" */
export type ContractInstances_Min_Order_By = {
  ContractId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "ContractInstances". */
export type ContractInstances_Order_By = {
  Contract?: InputMaybe<Contracts_Order_By>;
  ContractId?: InputMaybe<Order_By>;
  WalletContractInstances_aggregate?: InputMaybe<WalletContractInstances_Aggregate_Order_By>;
  address?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "ContractInstances" */
export enum ContractInstances_Select_Column {
  /** column name */
  ContractId = 'ContractId',
  /** column name */
  Address = 'address',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type ContractInstances_Stddev_Fields = {
  __typename?: 'ContractInstances_stddev_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ContractInstances" */
export type ContractInstances_Stddev_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ContractInstances_Stddev_Pop_Fields = {
  __typename?: 'ContractInstances_stddev_pop_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ContractInstances" */
export type ContractInstances_Stddev_Pop_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ContractInstances_Stddev_Samp_Fields = {
  __typename?: 'ContractInstances_stddev_samp_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ContractInstances" */
export type ContractInstances_Stddev_Samp_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ContractInstances" */
export type ContractInstances_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ContractInstances_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ContractInstances_Stream_Cursor_Value_Input = {
  ContractId?: InputMaybe<Scalars['uuid']>;
  address?: InputMaybe<Scalars['String']>;
  chainId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type ContractInstances_Sum_Fields = {
  __typename?: 'ContractInstances_sum_fields';
  chainId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ContractInstances" */
export type ContractInstances_Sum_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type ContractInstances_Var_Pop_Fields = {
  __typename?: 'ContractInstances_var_pop_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ContractInstances" */
export type ContractInstances_Var_Pop_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ContractInstances_Var_Samp_Fields = {
  __typename?: 'ContractInstances_var_samp_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ContractInstances" */
export type ContractInstances_Var_Samp_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type ContractInstances_Variance_Fields = {
  __typename?: 'ContractInstances_variance_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ContractInstances" */
export type ContractInstances_Variance_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Contracts" */
export type Contracts = {
  __typename?: 'Contracts';
  /** An array relationship */
  BundleContracts: Array<BundleContracts>;
  /** An aggregate relationship */
  BundleContracts_aggregate: BundleContracts_Aggregate;
  /** An array relationship */
  ContractInstances: Array<ContractInstances>;
  /** An aggregate relationship */
  ContractInstances_aggregate: ContractInstances_Aggregate;
  /** An object relationship */
  Creator?: Maybe<Wallets>;
  CreatorId?: Maybe<Scalars['uuid']>;
  abi: Scalars['jsonb'];
  bytecode: Scalars['String'];
  contractType: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  functionSelectors: Scalars['jsonb'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  version: Scalars['Int'];
};


/** columns and relationships of "Contracts" */
export type ContractsBundleContractsArgs = {
  distinct_on?: InputMaybe<Array<BundleContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BundleContracts_Order_By>>;
  where?: InputMaybe<BundleContracts_Bool_Exp>;
};


/** columns and relationships of "Contracts" */
export type ContractsBundleContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<BundleContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BundleContracts_Order_By>>;
  where?: InputMaybe<BundleContracts_Bool_Exp>;
};


/** columns and relationships of "Contracts" */
export type ContractsContractInstancesArgs = {
  distinct_on?: InputMaybe<Array<ContractInstances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContractInstances_Order_By>>;
  where?: InputMaybe<ContractInstances_Bool_Exp>;
};


/** columns and relationships of "Contracts" */
export type ContractsContractInstances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContractInstances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContractInstances_Order_By>>;
  where?: InputMaybe<ContractInstances_Bool_Exp>;
};


/** columns and relationships of "Contracts" */
export type ContractsAbiArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "Contracts" */
export type ContractsFunctionSelectorsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "Contracts" */
export type Contracts_Aggregate = {
  __typename?: 'Contracts_aggregate';
  aggregate?: Maybe<Contracts_Aggregate_Fields>;
  nodes: Array<Contracts>;
};

export type Contracts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Contracts_Aggregate_Bool_Exp_Count>;
};

export type Contracts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Contracts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Contracts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Contracts" */
export type Contracts_Aggregate_Fields = {
  __typename?: 'Contracts_aggregate_fields';
  avg?: Maybe<Contracts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Contracts_Max_Fields>;
  min?: Maybe<Contracts_Min_Fields>;
  stddev?: Maybe<Contracts_Stddev_Fields>;
  stddev_pop?: Maybe<Contracts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contracts_Stddev_Samp_Fields>;
  sum?: Maybe<Contracts_Sum_Fields>;
  var_pop?: Maybe<Contracts_Var_Pop_Fields>;
  var_samp?: Maybe<Contracts_Var_Samp_Fields>;
  variance?: Maybe<Contracts_Variance_Fields>;
};


/** aggregate fields of "Contracts" */
export type Contracts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contracts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Contracts" */
export type Contracts_Aggregate_Order_By = {
  avg?: InputMaybe<Contracts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Contracts_Max_Order_By>;
  min?: InputMaybe<Contracts_Min_Order_By>;
  stddev?: InputMaybe<Contracts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Contracts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Contracts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Contracts_Sum_Order_By>;
  var_pop?: InputMaybe<Contracts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Contracts_Var_Samp_Order_By>;
  variance?: InputMaybe<Contracts_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Contracts_Avg_Fields = {
  __typename?: 'Contracts_avg_fields';
  version?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Contracts" */
export type Contracts_Avg_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Contracts". All fields are combined with a logical 'AND'. */
export type Contracts_Bool_Exp = {
  BundleContracts?: InputMaybe<BundleContracts_Bool_Exp>;
  BundleContracts_aggregate?: InputMaybe<BundleContracts_Aggregate_Bool_Exp>;
  ContractInstances?: InputMaybe<ContractInstances_Bool_Exp>;
  ContractInstances_aggregate?: InputMaybe<ContractInstances_Aggregate_Bool_Exp>;
  Creator?: InputMaybe<Wallets_Bool_Exp>;
  CreatorId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Contracts_Bool_Exp>>;
  _not?: InputMaybe<Contracts_Bool_Exp>;
  _or?: InputMaybe<Array<Contracts_Bool_Exp>>;
  abi?: InputMaybe<Jsonb_Comparison_Exp>;
  bytecode?: InputMaybe<String_Comparison_Exp>;
  contractType?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  functionSelectors?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  version?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Contracts_Max_Fields = {
  __typename?: 'Contracts_max_fields';
  CreatorId?: Maybe<Scalars['uuid']>;
  bytecode?: Maybe<Scalars['String']>;
  contractType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  version?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Contracts" */
export type Contracts_Max_Order_By = {
  CreatorId?: InputMaybe<Order_By>;
  bytecode?: InputMaybe<Order_By>;
  contractType?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Contracts_Min_Fields = {
  __typename?: 'Contracts_min_fields';
  CreatorId?: Maybe<Scalars['uuid']>;
  bytecode?: Maybe<Scalars['String']>;
  contractType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  version?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Contracts" */
export type Contracts_Min_Order_By = {
  CreatorId?: InputMaybe<Order_By>;
  bytecode?: InputMaybe<Order_By>;
  contractType?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Contracts". */
export type Contracts_Order_By = {
  BundleContracts_aggregate?: InputMaybe<BundleContracts_Aggregate_Order_By>;
  ContractInstances_aggregate?: InputMaybe<ContractInstances_Aggregate_Order_By>;
  Creator?: InputMaybe<Wallets_Order_By>;
  CreatorId?: InputMaybe<Order_By>;
  abi?: InputMaybe<Order_By>;
  bytecode?: InputMaybe<Order_By>;
  contractType?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  functionSelectors?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** select columns of table "Contracts" */
export enum Contracts_Select_Column {
  /** column name */
  CreatorId = 'CreatorId',
  /** column name */
  Abi = 'abi',
  /** column name */
  Bytecode = 'bytecode',
  /** column name */
  ContractType = 'contractType',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Description = 'description',
  /** column name */
  FunctionSelectors = 'functionSelectors',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Version = 'version'
}

/** aggregate stddev on columns */
export type Contracts_Stddev_Fields = {
  __typename?: 'Contracts_stddev_fields';
  version?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Contracts" */
export type Contracts_Stddev_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Contracts_Stddev_Pop_Fields = {
  __typename?: 'Contracts_stddev_pop_fields';
  version?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Contracts" */
export type Contracts_Stddev_Pop_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Contracts_Stddev_Samp_Fields = {
  __typename?: 'Contracts_stddev_samp_fields';
  version?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Contracts" */
export type Contracts_Stddev_Samp_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Contracts" */
export type Contracts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contracts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contracts_Stream_Cursor_Value_Input = {
  CreatorId?: InputMaybe<Scalars['uuid']>;
  abi?: InputMaybe<Scalars['jsonb']>;
  bytecode?: InputMaybe<Scalars['String']>;
  contractType?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  functionSelectors?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  version?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Contracts_Sum_Fields = {
  __typename?: 'Contracts_sum_fields';
  version?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Contracts" */
export type Contracts_Sum_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Contracts_Var_Pop_Fields = {
  __typename?: 'Contracts_var_pop_fields';
  version?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Contracts" */
export type Contracts_Var_Pop_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Contracts_Var_Samp_Fields = {
  __typename?: 'Contracts_var_samp_fields';
  version?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Contracts" */
export type Contracts_Var_Samp_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Contracts_Variance_Fields = {
  __typename?: 'Contracts_variance_fields';
  version?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Contracts" */
export type Contracts_Variance_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** columns and relationships of "Extensions" */
export type Extensions = {
  __typename?: 'Extensions';
  /** An array relationship */
  AgreementExtensions: Array<AgreementExtensions>;
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  guideUrl: Scalars['String'];
  icon: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "Extensions" */
export type ExtensionsAgreementExtensionsArgs = {
  distinct_on?: InputMaybe<Array<AgreementExtensions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AgreementExtensions_Order_By>>;
  where?: InputMaybe<AgreementExtensions_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "Extensions". All fields are combined with a logical 'AND'. */
export type Extensions_Bool_Exp = {
  AgreementExtensions?: InputMaybe<AgreementExtensions_Bool_Exp>;
  _and?: InputMaybe<Array<Extensions_Bool_Exp>>;
  _not?: InputMaybe<Extensions_Bool_Exp>;
  _or?: InputMaybe<Array<Extensions_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  guideUrl?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "Extensions". */
export type Extensions_Order_By = {
  AgreementExtensions_aggregate?: InputMaybe<AgreementExtensions_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  guideUrl?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "Extensions" */
export enum Extensions_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Description = 'description',
  /** column name */
  GuideUrl = 'guideUrl',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "Extensions" */
export type Extensions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Extensions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Extensions_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  guideUrl?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "IdentityIntegrations" */
export type IdentityIntegrations = {
  __typename?: 'IdentityIntegrations';
  /** An array relationship */
  UserIdentities: Array<UserIdentities>;
  connectionId: Scalars['String'];
  connectionName: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  icon: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "IdentityIntegrations" */
export type IdentityIntegrationsUserIdentitiesArgs = {
  distinct_on?: InputMaybe<Array<UserIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserIdentities_Order_By>>;
  where?: InputMaybe<UserIdentities_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "IdentityIntegrations". All fields are combined with a logical 'AND'. */
export type IdentityIntegrations_Bool_Exp = {
  UserIdentities?: InputMaybe<UserIdentities_Bool_Exp>;
  _and?: InputMaybe<Array<IdentityIntegrations_Bool_Exp>>;
  _not?: InputMaybe<IdentityIntegrations_Bool_Exp>;
  _or?: InputMaybe<Array<IdentityIntegrations_Bool_Exp>>;
  connectionId?: InputMaybe<String_Comparison_Exp>;
  connectionName?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "IdentityIntegrations". */
export type IdentityIntegrations_Order_By = {
  UserIdentities_aggregate?: InputMaybe<UserIdentities_Aggregate_Order_By>;
  connectionId?: InputMaybe<Order_By>;
  connectionName?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "IdentityIntegrations" */
export enum IdentityIntegrations_Select_Column {
  /** column name */
  ConnectionId = 'connectionId',
  /** column name */
  ConnectionName = 'connectionName',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "IdentityIntegrations" */
export type IdentityIntegrations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: IdentityIntegrations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type IdentityIntegrations_Stream_Cursor_Value_Input = {
  connectionId?: InputMaybe<Scalars['String']>;
  connectionName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Integrations" */
export type Integrations = {
  __typename?: 'Integrations';
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  guideUrl: Scalars['String'];
  icon: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "Integrations" */
export type Integrations_Aggregate = {
  __typename?: 'Integrations_aggregate';
  aggregate?: Maybe<Integrations_Aggregate_Fields>;
  nodes: Array<Integrations>;
};

/** aggregate fields of "Integrations" */
export type Integrations_Aggregate_Fields = {
  __typename?: 'Integrations_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Integrations_Max_Fields>;
  min?: Maybe<Integrations_Min_Fields>;
};


/** aggregate fields of "Integrations" */
export type Integrations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Integrations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Integrations". All fields are combined with a logical 'AND'. */
export type Integrations_Bool_Exp = {
  _and?: InputMaybe<Array<Integrations_Bool_Exp>>;
  _not?: InputMaybe<Integrations_Bool_Exp>;
  _or?: InputMaybe<Array<Integrations_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  guideUrl?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Integrations_Max_Fields = {
  __typename?: 'Integrations_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  guideUrl?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Integrations_Min_Fields = {
  __typename?: 'Integrations_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  guideUrl?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** Ordering options when selecting data from "Integrations". */
export type Integrations_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  guideUrl?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "Integrations" */
export enum Integrations_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Description = 'description',
  /** column name */
  GuideUrl = 'guideUrl',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "Integrations" */
export type Integrations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Integrations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Integrations_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  guideUrl?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "RolePermissions" */
export type RolePermissions = {
  __typename?: 'RolePermissions';
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "RolePermissions" */
export type RolePermissions_Aggregate = {
  __typename?: 'RolePermissions_aggregate';
  aggregate?: Maybe<RolePermissions_Aggregate_Fields>;
  nodes: Array<RolePermissions>;
};

/** aggregate fields of "RolePermissions" */
export type RolePermissions_Aggregate_Fields = {
  __typename?: 'RolePermissions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<RolePermissions_Max_Fields>;
  min?: Maybe<RolePermissions_Min_Fields>;
};


/** aggregate fields of "RolePermissions" */
export type RolePermissions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<RolePermissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "RolePermissions". All fields are combined with a logical 'AND'. */
export type RolePermissions_Bool_Exp = {
  _and?: InputMaybe<Array<RolePermissions_Bool_Exp>>;
  _not?: InputMaybe<RolePermissions_Bool_Exp>;
  _or?: InputMaybe<Array<RolePermissions_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type RolePermissions_Max_Fields = {
  __typename?: 'RolePermissions_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type RolePermissions_Min_Fields = {
  __typename?: 'RolePermissions_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** Ordering options when selecting data from "RolePermissions". */
export type RolePermissions_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "RolePermissions" */
export enum RolePermissions_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "RolePermissions" */
export type RolePermissions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: RolePermissions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type RolePermissions_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "Transactions" */
export type Transactions = {
  __typename?: 'Transactions';
  /** An array relationship */
  AgreementRoles: Array<AgreementRoles>;
  /** An array relationship */
  AgreementTokens: Array<AgreementTokens>;
  /** An array relationship */
  Agreements: Array<Agreements>;
  /** An object relationship */
  Wallet?: Maybe<Wallets>;
  WalletId?: Maybe<Scalars['uuid']>;
  chainId: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  hash?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  status: Scalars['String'];
  transactionInput: Scalars['jsonb'];
  transactionType: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "Transactions" */
export type TransactionsAgreementRolesArgs = {
  distinct_on?: InputMaybe<Array<AgreementRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AgreementRoles_Order_By>>;
  where?: InputMaybe<AgreementRoles_Bool_Exp>;
};


/** columns and relationships of "Transactions" */
export type TransactionsAgreementTokensArgs = {
  distinct_on?: InputMaybe<Array<AgreementTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AgreementTokens_Order_By>>;
  where?: InputMaybe<AgreementTokens_Bool_Exp>;
};


/** columns and relationships of "Transactions" */
export type TransactionsAgreementsArgs = {
  distinct_on?: InputMaybe<Array<Agreements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agreements_Order_By>>;
  where?: InputMaybe<Agreements_Bool_Exp>;
};


/** columns and relationships of "Transactions" */
export type TransactionsTransactionInputArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "Transactions" */
export type Transactions_Aggregate = {
  __typename?: 'Transactions_aggregate';
  aggregate?: Maybe<Transactions_Aggregate_Fields>;
  nodes: Array<Transactions>;
};

export type Transactions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Transactions_Aggregate_Bool_Exp_Count>;
};

export type Transactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Transactions" */
export type Transactions_Aggregate_Fields = {
  __typename?: 'Transactions_aggregate_fields';
  avg?: Maybe<Transactions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transactions_Max_Fields>;
  min?: Maybe<Transactions_Min_Fields>;
  stddev?: Maybe<Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Transactions_Sum_Fields>;
  var_pop?: Maybe<Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Transactions_Var_Samp_Fields>;
  variance?: Maybe<Transactions_Variance_Fields>;
};


/** aggregate fields of "Transactions" */
export type Transactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Transactions" */
export type Transactions_Aggregate_Order_By = {
  avg?: InputMaybe<Transactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transactions_Max_Order_By>;
  min?: InputMaybe<Transactions_Min_Order_By>;
  stddev?: InputMaybe<Transactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transactions_Sum_Order_By>;
  var_pop?: InputMaybe<Transactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Transactions_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Transactions_Avg_Fields = {
  __typename?: 'Transactions_avg_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Transactions" */
export type Transactions_Avg_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  AgreementRoles?: InputMaybe<AgreementRoles_Bool_Exp>;
  AgreementTokens?: InputMaybe<AgreementTokens_Bool_Exp>;
  Agreements?: InputMaybe<Agreements_Bool_Exp>;
  Wallet?: InputMaybe<Wallets_Bool_Exp>;
  WalletId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Transactions_Bool_Exp>>;
  _not?: InputMaybe<Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Transactions_Bool_Exp>>;
  chainId?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  transactionInput?: InputMaybe<Jsonb_Comparison_Exp>;
  transactionType?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: 'Transactions_max_fields';
  WalletId?: Maybe<Scalars['uuid']>;
  chainId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  transactionType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "Transactions" */
export type Transactions_Max_Order_By = {
  WalletId?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transactionType?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: 'Transactions_min_fields';
  WalletId?: Maybe<Scalars['uuid']>;
  chainId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  transactionType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "Transactions" */
export type Transactions_Min_Order_By = {
  WalletId?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transactionType?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Transactions". */
export type Transactions_Order_By = {
  AgreementRoles_aggregate?: InputMaybe<AgreementRoles_Aggregate_Order_By>;
  AgreementTokens_aggregate?: InputMaybe<AgreementTokens_Aggregate_Order_By>;
  Agreements_aggregate?: InputMaybe<Agreements_Aggregate_Order_By>;
  Wallet?: InputMaybe<Wallets_Order_By>;
  WalletId?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transactionInput?: InputMaybe<Order_By>;
  transactionType?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "Transactions" */
export enum Transactions_Select_Column {
  /** column name */
  WalletId = 'WalletId',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionInput = 'transactionInput',
  /** column name */
  TransactionType = 'transactionType',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type Transactions_Stddev_Fields = {
  __typename?: 'Transactions_stddev_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Transactions" */
export type Transactions_Stddev_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transactions_Stddev_Pop_Fields = {
  __typename?: 'Transactions_stddev_pop_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Transactions" */
export type Transactions_Stddev_Pop_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transactions_Stddev_Samp_Fields = {
  __typename?: 'Transactions_stddev_samp_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Transactions" */
export type Transactions_Stddev_Samp_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Transactions" */
export type Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transactions_Stream_Cursor_Value_Input = {
  WalletId?: InputMaybe<Scalars['uuid']>;
  chainId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  transactionInput?: InputMaybe<Scalars['jsonb']>;
  transactionType?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Transactions_Sum_Fields = {
  __typename?: 'Transactions_sum_fields';
  chainId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Transactions" */
export type Transactions_Sum_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Transactions_Var_Pop_Fields = {
  __typename?: 'Transactions_var_pop_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Transactions" */
export type Transactions_Var_Pop_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transactions_Var_Samp_Fields = {
  __typename?: 'Transactions_var_samp_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Transactions" */
export type Transactions_Var_Samp_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transactions_Variance_Fields = {
  __typename?: 'Transactions_variance_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Transactions" */
export type Transactions_Variance_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Transfers" */
export type Transfers = {
  __typename?: 'Transfers';
  MeemId?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  from: Scalars['String'];
  id: Scalars['uuid'];
  to: Scalars['String'];
  transactionHash: Scalars['String'];
  transferredAt: Scalars['timestamptz'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "Transfers" */
export type Transfers_Aggregate = {
  __typename?: 'Transfers_aggregate';
  aggregate?: Maybe<Transfers_Aggregate_Fields>;
  nodes: Array<Transfers>;
};

/** aggregate fields of "Transfers" */
export type Transfers_Aggregate_Fields = {
  __typename?: 'Transfers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Transfers_Max_Fields>;
  min?: Maybe<Transfers_Min_Fields>;
};


/** aggregate fields of "Transfers" */
export type Transfers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transfers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Transfers". All fields are combined with a logical 'AND'. */
export type Transfers_Bool_Exp = {
  MeemId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Transfers_Bool_Exp>>;
  _not?: InputMaybe<Transfers_Bool_Exp>;
  _or?: InputMaybe<Array<Transfers_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  from?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  to?: InputMaybe<String_Comparison_Exp>;
  transactionHash?: InputMaybe<String_Comparison_Exp>;
  transferredAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Transfers_Max_Fields = {
  __typename?: 'Transfers_max_fields';
  MeemId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  to?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
  transferredAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Transfers_Min_Fields = {
  __typename?: 'Transfers_min_fields';
  MeemId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  to?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['String']>;
  transferredAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** Ordering options when selecting data from "Transfers". */
export type Transfers_Order_By = {
  MeemId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  from?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
  transactionHash?: InputMaybe<Order_By>;
  transferredAt?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "Transfers" */
export enum Transfers_Select_Column {
  /** column name */
  MeemId = 'MeemId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  From = 'from',
  /** column name */
  Id = 'id',
  /** column name */
  To = 'to',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  TransferredAt = 'transferredAt',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "Transfers" */
export type Transfers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transfers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transfers_Stream_Cursor_Value_Input = {
  MeemId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']>;
  from?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  to?: InputMaybe<Scalars['String']>;
  transactionHash?: InputMaybe<Scalars['String']>;
  transferredAt?: InputMaybe<Scalars['timestamptz']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "UserIdentities" */
export type UserIdentities = {
  __typename?: 'UserIdentities';
  /** An object relationship */
  IdentityIntegration?: Maybe<IdentityIntegrations>;
  IdentityIntegrationId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  User?: Maybe<Users>;
  UserId?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamptz'];
  externalId?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  metadata: Scalars['jsonb'];
  visibility: Scalars['String'];
};


/** columns and relationships of "UserIdentities" */
export type UserIdentitiesMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "UserIdentities" */
export type UserIdentities_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<UserIdentities_Max_Order_By>;
  min?: InputMaybe<UserIdentities_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "UserIdentities". All fields are combined with a logical 'AND'. */
export type UserIdentities_Bool_Exp = {
  IdentityIntegration?: InputMaybe<IdentityIntegrations_Bool_Exp>;
  IdentityIntegrationId?: InputMaybe<Uuid_Comparison_Exp>;
  User?: InputMaybe<Users_Bool_Exp>;
  UserId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<UserIdentities_Bool_Exp>>;
  _not?: InputMaybe<UserIdentities_Bool_Exp>;
  _or?: InputMaybe<Array<UserIdentities_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  externalId?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  visibility?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "UserIdentities" */
export type UserIdentities_Max_Order_By = {
  IdentityIntegrationId?: InputMaybe<Order_By>;
  UserId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  externalId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "UserIdentities" */
export type UserIdentities_Min_Order_By = {
  IdentityIntegrationId?: InputMaybe<Order_By>;
  UserId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  externalId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "UserIdentities". */
export type UserIdentities_Order_By = {
  IdentityIntegration?: InputMaybe<IdentityIntegrations_Order_By>;
  IdentityIntegrationId?: InputMaybe<Order_By>;
  User?: InputMaybe<Users_Order_By>;
  UserId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  externalId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
};

/** select columns of table "UserIdentities" */
export enum UserIdentities_Select_Column {
  /** column name */
  IdentityIntegrationId = 'IdentityIntegrationId',
  /** column name */
  UserId = 'UserId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExternalId = 'externalId',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Visibility = 'visibility'
}

/** Streaming cursor of the table "UserIdentities" */
export type UserIdentities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UserIdentities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UserIdentities_Stream_Cursor_Value_Input = {
  IdentityIntegrationId?: InputMaybe<Scalars['uuid']>;
  UserId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  visibility?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "Users" */
export type Users = {
  __typename?: 'Users';
  /** An object relationship */
  DefaultWallet?: Maybe<Wallets>;
  /** An array relationship */
  UserIdentities: Array<UserIdentities>;
  /** An array relationship */
  Wallets: Array<Wallets>;
  /** An aggregate relationship */
  Wallets_aggregate: Wallets_Aggregate;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  profilePicUrl?: Maybe<Scalars['String']>;
};


/** columns and relationships of "Users" */
export type UsersUserIdentitiesArgs = {
  distinct_on?: InputMaybe<Array<UserIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserIdentities_Order_By>>;
  where?: InputMaybe<UserIdentities_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersWalletsArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersWallets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};

/** order by aggregate values of table "Users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "Users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  DefaultWallet?: InputMaybe<Wallets_Bool_Exp>;
  UserIdentities?: InputMaybe<UserIdentities_Bool_Exp>;
  Wallets?: InputMaybe<Wallets_Bool_Exp>;
  Wallets_aggregate?: InputMaybe<Wallets_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  profilePicUrl?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "Users" */
export type Users_Max_Order_By = {
  displayName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profilePicUrl?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Users" */
export type Users_Min_Order_By = {
  displayName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profilePicUrl?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Users". */
export type Users_Order_By = {
  DefaultWallet?: InputMaybe<Wallets_Order_By>;
  UserIdentities_aggregate?: InputMaybe<UserIdentities_Aggregate_Order_By>;
  Wallets_aggregate?: InputMaybe<Wallets_Aggregate_Order_By>;
  displayName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profilePicUrl?: InputMaybe<Order_By>;
};

/** select columns of table "Users" */
export enum Users_Select_Column {
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Id = 'id',
  /** column name */
  ProfilePicUrl = 'profilePicUrl'
}

/** Streaming cursor of the table "Users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  displayName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  profilePicUrl?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "WalletContractInstances" */
export type WalletContractInstances = {
  __typename?: 'WalletContractInstances';
  /** An object relationship */
  ContractInstance?: Maybe<ContractInstances>;
  ContractInstanceId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  Wallet?: Maybe<Wallets>;
  WalletId?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "WalletContractInstances" */
export type WalletContractInstances_Aggregate = {
  __typename?: 'WalletContractInstances_aggregate';
  aggregate?: Maybe<WalletContractInstances_Aggregate_Fields>;
  nodes: Array<WalletContractInstances>;
};

export type WalletContractInstances_Aggregate_Bool_Exp = {
  count?: InputMaybe<WalletContractInstances_Aggregate_Bool_Exp_Count>;
};

export type WalletContractInstances_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<WalletContractInstances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<WalletContractInstances_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "WalletContractInstances" */
export type WalletContractInstances_Aggregate_Fields = {
  __typename?: 'WalletContractInstances_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<WalletContractInstances_Max_Fields>;
  min?: Maybe<WalletContractInstances_Min_Fields>;
};


/** aggregate fields of "WalletContractInstances" */
export type WalletContractInstances_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<WalletContractInstances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "WalletContractInstances" */
export type WalletContractInstances_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<WalletContractInstances_Max_Order_By>;
  min?: InputMaybe<WalletContractInstances_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "WalletContractInstances". All fields are combined with a logical 'AND'. */
export type WalletContractInstances_Bool_Exp = {
  ContractInstance?: InputMaybe<ContractInstances_Bool_Exp>;
  ContractInstanceId?: InputMaybe<Uuid_Comparison_Exp>;
  Wallet?: InputMaybe<Wallets_Bool_Exp>;
  WalletId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<WalletContractInstances_Bool_Exp>>;
  _not?: InputMaybe<WalletContractInstances_Bool_Exp>;
  _or?: InputMaybe<Array<WalletContractInstances_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type WalletContractInstances_Max_Fields = {
  __typename?: 'WalletContractInstances_max_fields';
  ContractInstanceId?: Maybe<Scalars['uuid']>;
  WalletId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "WalletContractInstances" */
export type WalletContractInstances_Max_Order_By = {
  ContractInstanceId?: InputMaybe<Order_By>;
  WalletId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type WalletContractInstances_Min_Fields = {
  __typename?: 'WalletContractInstances_min_fields';
  ContractInstanceId?: Maybe<Scalars['uuid']>;
  WalletId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "WalletContractInstances" */
export type WalletContractInstances_Min_Order_By = {
  ContractInstanceId?: InputMaybe<Order_By>;
  WalletId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "WalletContractInstances". */
export type WalletContractInstances_Order_By = {
  ContractInstance?: InputMaybe<ContractInstances_Order_By>;
  ContractInstanceId?: InputMaybe<Order_By>;
  Wallet?: InputMaybe<Wallets_Order_By>;
  WalletId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "WalletContractInstances" */
export enum WalletContractInstances_Select_Column {
  /** column name */
  ContractInstanceId = 'ContractInstanceId',
  /** column name */
  WalletId = 'WalletId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "WalletContractInstances" */
export type WalletContractInstances_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: WalletContractInstances_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type WalletContractInstances_Stream_Cursor_Value_Input = {
  ContractInstanceId?: InputMaybe<Scalars['uuid']>;
  WalletId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "Wallets" */
export type Wallets = {
  __typename?: 'Wallets';
  /** An array relationship */
  AgreementRoles: Array<AgreementRoles>;
  /** An array relationship */
  AgreementTokens: Array<AgreementTokens>;
  /** An array relationship */
  Agreements: Array<Agreements>;
  /** An array relationship */
  Bundles: Array<Bundles>;
  /** An aggregate relationship */
  Bundles_aggregate: Bundles_Aggregate;
  /** An array relationship */
  Contracts: Array<Contracts>;
  /** An aggregate relationship */
  Contracts_aggregate: Contracts_Aggregate;
  /** An array relationship */
  Transactions: Array<Transactions>;
  /** An aggregate relationship */
  Transactions_aggregate: Transactions_Aggregate;
  /** An object relationship */
  User?: Maybe<Users>;
  /** An array relationship */
  Users: Array<Users>;
  /** An array relationship */
  WalletContractInstances: Array<WalletContractInstances>;
  /** An aggregate relationship */
  WalletContractInstances_aggregate: WalletContractInstances_Aggregate;
  address: Scalars['String'];
  ens?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
};


/** columns and relationships of "Wallets" */
export type WalletsAgreementRolesArgs = {
  distinct_on?: InputMaybe<Array<AgreementRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AgreementRoles_Order_By>>;
  where?: InputMaybe<AgreementRoles_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsAgreementTokensArgs = {
  distinct_on?: InputMaybe<Array<AgreementTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AgreementTokens_Order_By>>;
  where?: InputMaybe<AgreementTokens_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsAgreementsArgs = {
  distinct_on?: InputMaybe<Array<Agreements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agreements_Order_By>>;
  where?: InputMaybe<Agreements_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsBundlesArgs = {
  distinct_on?: InputMaybe<Array<Bundles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bundles_Order_By>>;
  where?: InputMaybe<Bundles_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsBundles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bundles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bundles_Order_By>>;
  where?: InputMaybe<Bundles_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsWalletContractInstancesArgs = {
  distinct_on?: InputMaybe<Array<WalletContractInstances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WalletContractInstances_Order_By>>;
  where?: InputMaybe<WalletContractInstances_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsWalletContractInstances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WalletContractInstances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WalletContractInstances_Order_By>>;
  where?: InputMaybe<WalletContractInstances_Bool_Exp>;
};

/** aggregated selection of "Wallets" */
export type Wallets_Aggregate = {
  __typename?: 'Wallets_aggregate';
  aggregate?: Maybe<Wallets_Aggregate_Fields>;
  nodes: Array<Wallets>;
};

export type Wallets_Aggregate_Bool_Exp = {
  count?: InputMaybe<Wallets_Aggregate_Bool_Exp_Count>;
};

export type Wallets_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Wallets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Wallets_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Wallets" */
export type Wallets_Aggregate_Fields = {
  __typename?: 'Wallets_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Wallets_Max_Fields>;
  min?: Maybe<Wallets_Min_Fields>;
};


/** aggregate fields of "Wallets" */
export type Wallets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Wallets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Wallets" */
export type Wallets_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Wallets_Max_Order_By>;
  min?: InputMaybe<Wallets_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "Wallets". All fields are combined with a logical 'AND'. */
export type Wallets_Bool_Exp = {
  AgreementRoles?: InputMaybe<AgreementRoles_Bool_Exp>;
  AgreementTokens?: InputMaybe<AgreementTokens_Bool_Exp>;
  Agreements?: InputMaybe<Agreements_Bool_Exp>;
  Bundles?: InputMaybe<Bundles_Bool_Exp>;
  Bundles_aggregate?: InputMaybe<Bundles_Aggregate_Bool_Exp>;
  Contracts?: InputMaybe<Contracts_Bool_Exp>;
  Contracts_aggregate?: InputMaybe<Contracts_Aggregate_Bool_Exp>;
  Transactions?: InputMaybe<Transactions_Bool_Exp>;
  Transactions_aggregate?: InputMaybe<Transactions_Aggregate_Bool_Exp>;
  User?: InputMaybe<Users_Bool_Exp>;
  Users?: InputMaybe<Users_Bool_Exp>;
  WalletContractInstances?: InputMaybe<WalletContractInstances_Bool_Exp>;
  WalletContractInstances_aggregate?: InputMaybe<WalletContractInstances_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Wallets_Bool_Exp>>;
  _not?: InputMaybe<Wallets_Bool_Exp>;
  _or?: InputMaybe<Array<Wallets_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  ens?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Wallets_Max_Fields = {
  __typename?: 'Wallets_max_fields';
  address?: Maybe<Scalars['String']>;
  ens?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "Wallets" */
export type Wallets_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  ens?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Wallets_Min_Fields = {
  __typename?: 'Wallets_min_fields';
  address?: Maybe<Scalars['String']>;
  ens?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "Wallets" */
export type Wallets_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  ens?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Wallets". */
export type Wallets_Order_By = {
  AgreementRoles_aggregate?: InputMaybe<AgreementRoles_Aggregate_Order_By>;
  AgreementTokens_aggregate?: InputMaybe<AgreementTokens_Aggregate_Order_By>;
  Agreements_aggregate?: InputMaybe<Agreements_Aggregate_Order_By>;
  Bundles_aggregate?: InputMaybe<Bundles_Aggregate_Order_By>;
  Contracts_aggregate?: InputMaybe<Contracts_Aggregate_Order_By>;
  Transactions_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  User?: InputMaybe<Users_Order_By>;
  Users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  WalletContractInstances_aggregate?: InputMaybe<WalletContractInstances_Aggregate_Order_By>;
  address?: InputMaybe<Order_By>;
  ens?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** select columns of table "Wallets" */
export enum Wallets_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Ens = 'ens',
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "Wallets" */
export type Wallets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Wallets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Wallets_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  ens?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  AgreementExtensions: Array<AgreementExtensions>;
  /** fetch data from the table: "AgreementExtensions" using primary key columns */
  AgreementExtensions_by_pk?: Maybe<AgreementExtensions>;
  /** An array relationship */
  AgreementRoles: Array<AgreementRoles>;
  /** fetch data from the table: "AgreementRoles" using primary key columns */
  AgreementRoles_by_pk?: Maybe<AgreementRoles>;
  /** An array relationship */
  AgreementTokens: Array<AgreementTokens>;
  /** fetch data from the table: "AgreementTokens" using primary key columns */
  AgreementTokens_by_pk?: Maybe<AgreementTokens>;
  /** An array relationship */
  Agreements: Array<Agreements>;
  /** fetch data from the table: "Agreements" using primary key columns */
  Agreements_by_pk?: Maybe<Agreements>;
  /** An array relationship */
  BundleContracts: Array<BundleContracts>;
  /** An aggregate relationship */
  BundleContracts_aggregate: BundleContracts_Aggregate;
  /** fetch data from the table: "BundleContracts" using primary key columns */
  BundleContracts_by_pk?: Maybe<BundleContracts>;
  /** An array relationship */
  Bundles: Array<Bundles>;
  /** An aggregate relationship */
  Bundles_aggregate: Bundles_Aggregate;
  /** fetch data from the table: "Bundles" using primary key columns */
  Bundles_by_pk?: Maybe<Bundles>;
  /** An array relationship */
  ContractInstances: Array<ContractInstances>;
  /** An aggregate relationship */
  ContractInstances_aggregate: ContractInstances_Aggregate;
  /** fetch data from the table: "ContractInstances" using primary key columns */
  ContractInstances_by_pk?: Maybe<ContractInstances>;
  /** An array relationship */
  Contracts: Array<Contracts>;
  /** An aggregate relationship */
  Contracts_aggregate: Contracts_Aggregate;
  /** fetch data from the table: "Contracts" using primary key columns */
  Contracts_by_pk?: Maybe<Contracts>;
  /** fetch data from the table: "Extensions" */
  Extensions: Array<Extensions>;
  /** fetch data from the table: "Extensions" using primary key columns */
  Extensions_by_pk?: Maybe<Extensions>;
  /** fetch data from the table: "IdentityIntegrations" */
  IdentityIntegrations: Array<IdentityIntegrations>;
  /** fetch data from the table: "IdentityIntegrations" using primary key columns */
  IdentityIntegrations_by_pk?: Maybe<IdentityIntegrations>;
  /** fetch data from the table: "Integrations" */
  Integrations: Array<Integrations>;
  /** fetch aggregated fields from the table: "Integrations" */
  Integrations_aggregate: Integrations_Aggregate;
  /** fetch data from the table: "Integrations" using primary key columns */
  Integrations_by_pk?: Maybe<Integrations>;
  /** fetch data from the table: "RolePermissions" */
  RolePermissions: Array<RolePermissions>;
  /** fetch aggregated fields from the table: "RolePermissions" */
  RolePermissions_aggregate: RolePermissions_Aggregate;
  /** fetch data from the table: "RolePermissions" using primary key columns */
  RolePermissions_by_pk?: Maybe<RolePermissions>;
  /** An array relationship */
  Transactions: Array<Transactions>;
  /** An aggregate relationship */
  Transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "Transactions" using primary key columns */
  Transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table: "Transfers" */
  Transfers: Array<Transfers>;
  /** fetch aggregated fields from the table: "Transfers" */
  Transfers_aggregate: Transfers_Aggregate;
  /** fetch data from the table: "Transfers" using primary key columns */
  Transfers_by_pk?: Maybe<Transfers>;
  /** An array relationship */
  UserIdentities: Array<UserIdentities>;
  /** fetch data from the table: "UserIdentities" using primary key columns */
  UserIdentities_by_pk?: Maybe<UserIdentities>;
  /** An array relationship */
  Users: Array<Users>;
  /** fetch data from the table: "Users" using primary key columns */
  Users_by_pk?: Maybe<Users>;
  /** An array relationship */
  WalletContractInstances: Array<WalletContractInstances>;
  /** An aggregate relationship */
  WalletContractInstances_aggregate: WalletContractInstances_Aggregate;
  /** fetch data from the table: "WalletContractInstances" using primary key columns */
  WalletContractInstances_by_pk?: Maybe<WalletContractInstances>;
  /** An array relationship */
  Wallets: Array<Wallets>;
  /** An aggregate relationship */
  Wallets_aggregate: Wallets_Aggregate;
  /** fetch data from the table: "Wallets" using primary key columns */
  Wallets_by_pk?: Maybe<Wallets>;
};


export type Query_RootAgreementExtensionsArgs = {
  distinct_on?: InputMaybe<Array<AgreementExtensions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AgreementExtensions_Order_By>>;
  where?: InputMaybe<AgreementExtensions_Bool_Exp>;
};


export type Query_RootAgreementExtensions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAgreementRolesArgs = {
  distinct_on?: InputMaybe<Array<AgreementRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AgreementRoles_Order_By>>;
  where?: InputMaybe<AgreementRoles_Bool_Exp>;
};


export type Query_RootAgreementRoles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAgreementTokensArgs = {
  distinct_on?: InputMaybe<Array<AgreementTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AgreementTokens_Order_By>>;
  where?: InputMaybe<AgreementTokens_Bool_Exp>;
};


export type Query_RootAgreementTokens_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAgreementsArgs = {
  distinct_on?: InputMaybe<Array<Agreements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agreements_Order_By>>;
  where?: InputMaybe<Agreements_Bool_Exp>;
};


export type Query_RootAgreements_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBundleContractsArgs = {
  distinct_on?: InputMaybe<Array<BundleContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BundleContracts_Order_By>>;
  where?: InputMaybe<BundleContracts_Bool_Exp>;
};


export type Query_RootBundleContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<BundleContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BundleContracts_Order_By>>;
  where?: InputMaybe<BundleContracts_Bool_Exp>;
};


export type Query_RootBundleContracts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBundlesArgs = {
  distinct_on?: InputMaybe<Array<Bundles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bundles_Order_By>>;
  where?: InputMaybe<Bundles_Bool_Exp>;
};


export type Query_RootBundles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bundles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bundles_Order_By>>;
  where?: InputMaybe<Bundles_Bool_Exp>;
};


export type Query_RootBundles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootContractInstancesArgs = {
  distinct_on?: InputMaybe<Array<ContractInstances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContractInstances_Order_By>>;
  where?: InputMaybe<ContractInstances_Bool_Exp>;
};


export type Query_RootContractInstances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContractInstances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContractInstances_Order_By>>;
  where?: InputMaybe<ContractInstances_Bool_Exp>;
};


export type Query_RootContractInstances_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Query_RootContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Query_RootContracts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootExtensionsArgs = {
  distinct_on?: InputMaybe<Array<Extensions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Extensions_Order_By>>;
  where?: InputMaybe<Extensions_Bool_Exp>;
};


export type Query_RootExtensions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootIdentityIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<IdentityIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IdentityIntegrations_Order_By>>;
  where?: InputMaybe<IdentityIntegrations_Bool_Exp>;
};


export type Query_RootIdentityIntegrations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<Integrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integrations_Order_By>>;
  where?: InputMaybe<Integrations_Bool_Exp>;
};


export type Query_RootIntegrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Integrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integrations_Order_By>>;
  where?: InputMaybe<Integrations_Bool_Exp>;
};


export type Query_RootIntegrations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRolePermissionsArgs = {
  distinct_on?: InputMaybe<Array<RolePermissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RolePermissions_Order_By>>;
  where?: InputMaybe<RolePermissions_Bool_Exp>;
};


export type Query_RootRolePermissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<RolePermissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RolePermissions_Order_By>>;
  where?: InputMaybe<RolePermissions_Bool_Exp>;
};


export type Query_RootRolePermissions_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Query_RootTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Query_RootTransactions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTransfersArgs = {
  distinct_on?: InputMaybe<Array<Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transfers_Order_By>>;
  where?: InputMaybe<Transfers_Bool_Exp>;
};


export type Query_RootTransfers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transfers_Order_By>>;
  where?: InputMaybe<Transfers_Bool_Exp>;
};


export type Query_RootTransfers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserIdentitiesArgs = {
  distinct_on?: InputMaybe<Array<UserIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserIdentities_Order_By>>;
  where?: InputMaybe<UserIdentities_Bool_Exp>;
};


export type Query_RootUserIdentities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWalletContractInstancesArgs = {
  distinct_on?: InputMaybe<Array<WalletContractInstances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WalletContractInstances_Order_By>>;
  where?: InputMaybe<WalletContractInstances_Bool_Exp>;
};


export type Query_RootWalletContractInstances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WalletContractInstances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WalletContractInstances_Order_By>>;
  where?: InputMaybe<WalletContractInstances_Bool_Exp>;
};


export type Query_RootWalletContractInstances_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWalletsArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Query_RootWallets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Query_RootWallets_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  AgreementExtensions: Array<AgreementExtensions>;
  /** fetch data from the table: "AgreementExtensions" using primary key columns */
  AgreementExtensions_by_pk?: Maybe<AgreementExtensions>;
  /** fetch data from the table in a streaming manner: "AgreementExtensions" */
  AgreementExtensions_stream: Array<AgreementExtensions>;
  /** An array relationship */
  AgreementRoles: Array<AgreementRoles>;
  /** fetch data from the table: "AgreementRoles" using primary key columns */
  AgreementRoles_by_pk?: Maybe<AgreementRoles>;
  /** fetch data from the table in a streaming manner: "AgreementRoles" */
  AgreementRoles_stream: Array<AgreementRoles>;
  /** An array relationship */
  AgreementTokens: Array<AgreementTokens>;
  /** fetch data from the table: "AgreementTokens" using primary key columns */
  AgreementTokens_by_pk?: Maybe<AgreementTokens>;
  /** fetch data from the table in a streaming manner: "AgreementTokens" */
  AgreementTokens_stream: Array<AgreementTokens>;
  /** An array relationship */
  Agreements: Array<Agreements>;
  /** fetch data from the table: "Agreements" using primary key columns */
  Agreements_by_pk?: Maybe<Agreements>;
  /** fetch data from the table in a streaming manner: "Agreements" */
  Agreements_stream: Array<Agreements>;
  /** An array relationship */
  BundleContracts: Array<BundleContracts>;
  /** An aggregate relationship */
  BundleContracts_aggregate: BundleContracts_Aggregate;
  /** fetch data from the table: "BundleContracts" using primary key columns */
  BundleContracts_by_pk?: Maybe<BundleContracts>;
  /** fetch data from the table in a streaming manner: "BundleContracts" */
  BundleContracts_stream: Array<BundleContracts>;
  /** An array relationship */
  Bundles: Array<Bundles>;
  /** An aggregate relationship */
  Bundles_aggregate: Bundles_Aggregate;
  /** fetch data from the table: "Bundles" using primary key columns */
  Bundles_by_pk?: Maybe<Bundles>;
  /** fetch data from the table in a streaming manner: "Bundles" */
  Bundles_stream: Array<Bundles>;
  /** An array relationship */
  ContractInstances: Array<ContractInstances>;
  /** An aggregate relationship */
  ContractInstances_aggregate: ContractInstances_Aggregate;
  /** fetch data from the table: "ContractInstances" using primary key columns */
  ContractInstances_by_pk?: Maybe<ContractInstances>;
  /** fetch data from the table in a streaming manner: "ContractInstances" */
  ContractInstances_stream: Array<ContractInstances>;
  /** An array relationship */
  Contracts: Array<Contracts>;
  /** An aggregate relationship */
  Contracts_aggregate: Contracts_Aggregate;
  /** fetch data from the table: "Contracts" using primary key columns */
  Contracts_by_pk?: Maybe<Contracts>;
  /** fetch data from the table in a streaming manner: "Contracts" */
  Contracts_stream: Array<Contracts>;
  /** fetch data from the table: "Extensions" */
  Extensions: Array<Extensions>;
  /** fetch data from the table: "Extensions" using primary key columns */
  Extensions_by_pk?: Maybe<Extensions>;
  /** fetch data from the table in a streaming manner: "Extensions" */
  Extensions_stream: Array<Extensions>;
  /** fetch data from the table: "IdentityIntegrations" */
  IdentityIntegrations: Array<IdentityIntegrations>;
  /** fetch data from the table: "IdentityIntegrations" using primary key columns */
  IdentityIntegrations_by_pk?: Maybe<IdentityIntegrations>;
  /** fetch data from the table in a streaming manner: "IdentityIntegrations" */
  IdentityIntegrations_stream: Array<IdentityIntegrations>;
  /** fetch data from the table: "Integrations" */
  Integrations: Array<Integrations>;
  /** fetch aggregated fields from the table: "Integrations" */
  Integrations_aggregate: Integrations_Aggregate;
  /** fetch data from the table: "Integrations" using primary key columns */
  Integrations_by_pk?: Maybe<Integrations>;
  /** fetch data from the table in a streaming manner: "Integrations" */
  Integrations_stream: Array<Integrations>;
  /** fetch data from the table: "RolePermissions" */
  RolePermissions: Array<RolePermissions>;
  /** fetch aggregated fields from the table: "RolePermissions" */
  RolePermissions_aggregate: RolePermissions_Aggregate;
  /** fetch data from the table: "RolePermissions" using primary key columns */
  RolePermissions_by_pk?: Maybe<RolePermissions>;
  /** fetch data from the table in a streaming manner: "RolePermissions" */
  RolePermissions_stream: Array<RolePermissions>;
  /** An array relationship */
  Transactions: Array<Transactions>;
  /** An aggregate relationship */
  Transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "Transactions" using primary key columns */
  Transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table in a streaming manner: "Transactions" */
  Transactions_stream: Array<Transactions>;
  /** fetch data from the table: "Transfers" */
  Transfers: Array<Transfers>;
  /** fetch aggregated fields from the table: "Transfers" */
  Transfers_aggregate: Transfers_Aggregate;
  /** fetch data from the table: "Transfers" using primary key columns */
  Transfers_by_pk?: Maybe<Transfers>;
  /** fetch data from the table in a streaming manner: "Transfers" */
  Transfers_stream: Array<Transfers>;
  /** An array relationship */
  UserIdentities: Array<UserIdentities>;
  /** fetch data from the table: "UserIdentities" using primary key columns */
  UserIdentities_by_pk?: Maybe<UserIdentities>;
  /** fetch data from the table in a streaming manner: "UserIdentities" */
  UserIdentities_stream: Array<UserIdentities>;
  /** An array relationship */
  Users: Array<Users>;
  /** fetch data from the table: "Users" using primary key columns */
  Users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "Users" */
  Users_stream: Array<Users>;
  /** An array relationship */
  WalletContractInstances: Array<WalletContractInstances>;
  /** An aggregate relationship */
  WalletContractInstances_aggregate: WalletContractInstances_Aggregate;
  /** fetch data from the table: "WalletContractInstances" using primary key columns */
  WalletContractInstances_by_pk?: Maybe<WalletContractInstances>;
  /** fetch data from the table in a streaming manner: "WalletContractInstances" */
  WalletContractInstances_stream: Array<WalletContractInstances>;
  /** An array relationship */
  Wallets: Array<Wallets>;
  /** An aggregate relationship */
  Wallets_aggregate: Wallets_Aggregate;
  /** fetch data from the table: "Wallets" using primary key columns */
  Wallets_by_pk?: Maybe<Wallets>;
  /** fetch data from the table in a streaming manner: "Wallets" */
  Wallets_stream: Array<Wallets>;
};


export type Subscription_RootAgreementExtensionsArgs = {
  distinct_on?: InputMaybe<Array<AgreementExtensions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AgreementExtensions_Order_By>>;
  where?: InputMaybe<AgreementExtensions_Bool_Exp>;
};


export type Subscription_RootAgreementExtensions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAgreementExtensions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AgreementExtensions_Stream_Cursor_Input>>;
  where?: InputMaybe<AgreementExtensions_Bool_Exp>;
};


export type Subscription_RootAgreementRolesArgs = {
  distinct_on?: InputMaybe<Array<AgreementRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AgreementRoles_Order_By>>;
  where?: InputMaybe<AgreementRoles_Bool_Exp>;
};


export type Subscription_RootAgreementRoles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAgreementRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AgreementRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AgreementRoles_Bool_Exp>;
};


export type Subscription_RootAgreementTokensArgs = {
  distinct_on?: InputMaybe<Array<AgreementTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AgreementTokens_Order_By>>;
  where?: InputMaybe<AgreementTokens_Bool_Exp>;
};


export type Subscription_RootAgreementTokens_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAgreementTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AgreementTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AgreementTokens_Bool_Exp>;
};


export type Subscription_RootAgreementsArgs = {
  distinct_on?: InputMaybe<Array<Agreements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Agreements_Order_By>>;
  where?: InputMaybe<Agreements_Bool_Exp>;
};


export type Subscription_RootAgreements_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAgreements_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Agreements_Stream_Cursor_Input>>;
  where?: InputMaybe<Agreements_Bool_Exp>;
};


export type Subscription_RootBundleContractsArgs = {
  distinct_on?: InputMaybe<Array<BundleContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BundleContracts_Order_By>>;
  where?: InputMaybe<BundleContracts_Bool_Exp>;
};


export type Subscription_RootBundleContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<BundleContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BundleContracts_Order_By>>;
  where?: InputMaybe<BundleContracts_Bool_Exp>;
};


export type Subscription_RootBundleContracts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBundleContracts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<BundleContracts_Stream_Cursor_Input>>;
  where?: InputMaybe<BundleContracts_Bool_Exp>;
};


export type Subscription_RootBundlesArgs = {
  distinct_on?: InputMaybe<Array<Bundles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bundles_Order_By>>;
  where?: InputMaybe<Bundles_Bool_Exp>;
};


export type Subscription_RootBundles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bundles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bundles_Order_By>>;
  where?: InputMaybe<Bundles_Bool_Exp>;
};


export type Subscription_RootBundles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBundles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Bundles_Stream_Cursor_Input>>;
  where?: InputMaybe<Bundles_Bool_Exp>;
};


export type Subscription_RootContractInstancesArgs = {
  distinct_on?: InputMaybe<Array<ContractInstances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContractInstances_Order_By>>;
  where?: InputMaybe<ContractInstances_Bool_Exp>;
};


export type Subscription_RootContractInstances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ContractInstances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContractInstances_Order_By>>;
  where?: InputMaybe<ContractInstances_Bool_Exp>;
};


export type Subscription_RootContractInstances_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootContractInstances_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ContractInstances_Stream_Cursor_Input>>;
  where?: InputMaybe<ContractInstances_Bool_Exp>;
};


export type Subscription_RootContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Subscription_RootContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Subscription_RootContracts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootContracts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Contracts_Stream_Cursor_Input>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Subscription_RootExtensionsArgs = {
  distinct_on?: InputMaybe<Array<Extensions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Extensions_Order_By>>;
  where?: InputMaybe<Extensions_Bool_Exp>;
};


export type Subscription_RootExtensions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootExtensions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Extensions_Stream_Cursor_Input>>;
  where?: InputMaybe<Extensions_Bool_Exp>;
};


export type Subscription_RootIdentityIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<IdentityIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IdentityIntegrations_Order_By>>;
  where?: InputMaybe<IdentityIntegrations_Bool_Exp>;
};


export type Subscription_RootIdentityIntegrations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootIdentityIntegrations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<IdentityIntegrations_Stream_Cursor_Input>>;
  where?: InputMaybe<IdentityIntegrations_Bool_Exp>;
};


export type Subscription_RootIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<Integrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integrations_Order_By>>;
  where?: InputMaybe<Integrations_Bool_Exp>;
};


export type Subscription_RootIntegrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Integrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integrations_Order_By>>;
  where?: InputMaybe<Integrations_Bool_Exp>;
};


export type Subscription_RootIntegrations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootIntegrations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Integrations_Stream_Cursor_Input>>;
  where?: InputMaybe<Integrations_Bool_Exp>;
};


export type Subscription_RootRolePermissionsArgs = {
  distinct_on?: InputMaybe<Array<RolePermissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RolePermissions_Order_By>>;
  where?: InputMaybe<RolePermissions_Bool_Exp>;
};


export type Subscription_RootRolePermissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<RolePermissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RolePermissions_Order_By>>;
  where?: InputMaybe<RolePermissions_Bool_Exp>;
};


export type Subscription_RootRolePermissions_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRolePermissions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<RolePermissions_Stream_Cursor_Input>>;
  where?: InputMaybe<RolePermissions_Bool_Exp>;
};


export type Subscription_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransactions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTransactions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Transactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransfersArgs = {
  distinct_on?: InputMaybe<Array<Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transfers_Order_By>>;
  where?: InputMaybe<Transfers_Bool_Exp>;
};


export type Subscription_RootTransfers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transfers_Order_By>>;
  where?: InputMaybe<Transfers_Bool_Exp>;
};


export type Subscription_RootTransfers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTransfers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Transfers_Stream_Cursor_Input>>;
  where?: InputMaybe<Transfers_Bool_Exp>;
};


export type Subscription_RootUserIdentitiesArgs = {
  distinct_on?: InputMaybe<Array<UserIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserIdentities_Order_By>>;
  where?: InputMaybe<UserIdentities_Bool_Exp>;
};


export type Subscription_RootUserIdentities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserIdentities_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<UserIdentities_Stream_Cursor_Input>>;
  where?: InputMaybe<UserIdentities_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootWalletContractInstancesArgs = {
  distinct_on?: InputMaybe<Array<WalletContractInstances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WalletContractInstances_Order_By>>;
  where?: InputMaybe<WalletContractInstances_Bool_Exp>;
};


export type Subscription_RootWalletContractInstances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WalletContractInstances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WalletContractInstances_Order_By>>;
  where?: InputMaybe<WalletContractInstances_Bool_Exp>;
};


export type Subscription_RootWalletContractInstances_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWalletContractInstances_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<WalletContractInstances_Stream_Cursor_Input>>;
  where?: InputMaybe<WalletContractInstances_Bool_Exp>;
};


export type Subscription_RootWalletsArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Subscription_RootWallets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Subscription_RootWallets_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWallets_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Wallets_Stream_Cursor_Input>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type ContractPartsFragment = { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null }> }>, Creator?: { __typename?: 'Wallets', address: string } | null };

export type SearchContractsQueryVariables = Exact<{
  contractType?: InputMaybe<Scalars['String']>;
  searchTerm?: InputMaybe<Scalars['String']>;
}>;


export type SearchContractsQuery = { __typename?: 'query_root', Contracts: Array<{ __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null }> }>, Creator?: { __typename?: 'Wallets', address: string } | null }> };

export type GetContractsByAddressesQueryVariables = Exact<{
  addresses?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetContractsByAddressesQuery = { __typename?: 'query_root', ContractInstances: Array<{ __typename?: 'ContractInstances', id: any, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null, ContractInstance?: { __typename?: 'ContractInstances', id: any, address: string, chainId: number } | null }>, Contract?: { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null }> }>, Creator?: { __typename?: 'Wallets', address: string } | null } | null }> };

export type GetContractsByIdQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type GetContractsByIdQuery = { __typename?: 'query_root', Contracts: Array<{ __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null }> }>, Creator?: { __typename?: 'Wallets', address: string } | null }> };

export type GetMyContractsSubscriptionSubscriptionVariables = Exact<{
  address: Scalars['String'];
}>;


export type GetMyContractsSubscriptionSubscription = { __typename?: 'subscription_root', Wallets: Array<{ __typename?: 'Wallets', id: any, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', id: any, note?: string | null, name?: string | null, ContractInstance?: { __typename?: 'ContractInstances', id: any, address: string, chainId: number, Contract?: { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null }> }>, Creator?: { __typename?: 'Wallets', address: string } | null } | null } | null }> }> };

export type GetMyContractsQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type GetMyContractsQuery = { __typename?: 'query_root', Wallets: Array<{ __typename?: 'Wallets', id: any, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', id: any, note?: string | null, name?: string | null, ContractInstance?: { __typename?: 'ContractInstances', id: any, address: string, chainId: number, Contract?: { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null }> }>, Creator?: { __typename?: 'Wallets', address: string } | null } | null } | null }> }> };

export type SearchBundlesQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']>;
}>;


export type SearchBundlesQuery = { __typename?: 'query_root', Bundles: Array<{ __typename?: 'Bundles', id: any, name: string, description: string, BundleContracts: Array<{ __typename?: 'BundleContracts', id: any, order: number, functionSelectors: any, Contract?: { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null }> }>, Creator?: { __typename?: 'Wallets', address: string } | null } | null }>, Creator?: { __typename?: 'Wallets', address: string } | null }> };

export type GetBundleByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetBundleByIdQuery = { __typename?: 'query_root', Bundles: Array<{ __typename?: 'Bundles', id: any, name: string, description: string, BundleContracts: Array<{ __typename?: 'BundleContracts', id: any, order: number, functionSelectors: any, Contract?: { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null }> }>, Creator?: { __typename?: 'Wallets', address: string } | null } | null }>, Creator?: { __typename?: 'Wallets', address: string } | null }> };

export type SubSearchContractsSubscriptionVariables = Exact<{
  contractType?: InputMaybe<Scalars['String']>;
  searchTerm?: InputMaybe<Scalars['String']>;
}>;


export type SubSearchContractsSubscription = { __typename?: 'subscription_root', Contracts: Array<{ __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null }> }>, Creator?: { __typename?: 'Wallets', address: string } | null }> };

export type SubGetContractsByAddressesSubscriptionVariables = Exact<{
  addresses?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type SubGetContractsByAddressesSubscription = { __typename?: 'subscription_root', ContractInstances: Array<{ __typename?: 'ContractInstances', id: any, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null, ContractInstance?: { __typename?: 'ContractInstances', id: any, address: string, chainId: number } | null }>, Contract?: { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null }> }>, Creator?: { __typename?: 'Wallets', address: string } | null } | null }> };

export type SubGetContractsByIdSubscriptionVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type SubGetContractsByIdSubscription = { __typename?: 'subscription_root', Contracts: Array<{ __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null }> }>, Creator?: { __typename?: 'Wallets', address: string } | null }> };

export type SubGetMyContractsSubscriptionVariables = Exact<{
  address: Scalars['String'];
}>;


export type SubGetMyContractsSubscription = { __typename?: 'subscription_root', Wallets: Array<{ __typename?: 'Wallets', id: any, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', id: any, note?: string | null, name?: string | null, ContractInstance?: { __typename?: 'ContractInstances', id: any, address: string, chainId: number, Contract?: { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null }> }>, Creator?: { __typename?: 'Wallets', address: string } | null } | null } | null }> }> };

export type SubSearchBundlesSubscriptionVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']>;
}>;


export type SubSearchBundlesSubscription = { __typename?: 'subscription_root', Bundles: Array<{ __typename?: 'Bundles', id: any, name: string, description: string, BundleContracts: Array<{ __typename?: 'BundleContracts', id: any, order: number, functionSelectors: any, Contract?: { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null }> }>, Creator?: { __typename?: 'Wallets', address: string } | null } | null }>, Creator?: { __typename?: 'Wallets', address: string } | null }> };

export type SubGetBundleByIdSubscriptionVariables = Exact<{
  id: Scalars['uuid'];
  chainId?: InputMaybe<Scalars['Int']>;
}>;


export type SubGetBundleByIdSubscription = { __typename?: 'subscription_root', Bundles: Array<{ __typename?: 'Bundles', id: any, name: string, description: string, abi: any, BundleContracts: Array<{ __typename?: 'BundleContracts', id: any, order: number, functionSelectors: any, Contract?: { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', name?: string | null, note?: string | null }> }>, Creator?: { __typename?: 'Wallets', address: string } | null } | null }>, Creator?: { __typename?: 'Wallets', address: string } | null }> };

export const ContractPartsFragmentDoc = gql`
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
    `;
export const SearchContractsDocument = gql`
    query SearchContracts($contractType: String, $searchTerm: String) {
  Contracts(
    where: {contractType: {_eq: $contractType}, _or: [{name: {_ilike: $searchTerm}}, {description: {_ilike: $searchTerm}}]}
  ) {
    ...ContractParts
  }
}
    ${ContractPartsFragmentDoc}`;

/**
 * __useSearchContractsQuery__
 *
 * To run a query within a React component, call `useSearchContractsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchContractsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchContractsQuery({
 *   variables: {
 *      contractType: // value for 'contractType'
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useSearchContractsQuery(baseOptions?: Apollo.QueryHookOptions<SearchContractsQuery, SearchContractsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchContractsQuery, SearchContractsQueryVariables>(SearchContractsDocument, options);
      }
export function useSearchContractsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchContractsQuery, SearchContractsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchContractsQuery, SearchContractsQueryVariables>(SearchContractsDocument, options);
        }
export type SearchContractsQueryHookResult = ReturnType<typeof useSearchContractsQuery>;
export type SearchContractsLazyQueryHookResult = ReturnType<typeof useSearchContractsLazyQuery>;
export type SearchContractsQueryResult = Apollo.QueryResult<SearchContractsQuery, SearchContractsQueryVariables>;
export const GetContractsByAddressesDocument = gql`
    query GetContractsByAddresses($addresses: [String!]) {
  ContractInstances(where: {address: {_in: $addresses}}) {
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
    ${ContractPartsFragmentDoc}`;

/**
 * __useGetContractsByAddressesQuery__
 *
 * To run a query within a React component, call `useGetContractsByAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContractsByAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContractsByAddressesQuery({
 *   variables: {
 *      addresses: // value for 'addresses'
 *   },
 * });
 */
export function useGetContractsByAddressesQuery(baseOptions?: Apollo.QueryHookOptions<GetContractsByAddressesQuery, GetContractsByAddressesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContractsByAddressesQuery, GetContractsByAddressesQueryVariables>(GetContractsByAddressesDocument, options);
      }
export function useGetContractsByAddressesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContractsByAddressesQuery, GetContractsByAddressesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContractsByAddressesQuery, GetContractsByAddressesQueryVariables>(GetContractsByAddressesDocument, options);
        }
export type GetContractsByAddressesQueryHookResult = ReturnType<typeof useGetContractsByAddressesQuery>;
export type GetContractsByAddressesLazyQueryHookResult = ReturnType<typeof useGetContractsByAddressesLazyQuery>;
export type GetContractsByAddressesQueryResult = Apollo.QueryResult<GetContractsByAddressesQuery, GetContractsByAddressesQueryVariables>;
export const GetContractsByIdDocument = gql`
    query GetContractsById($ids: [uuid!]) {
  Contracts(where: {id: {_in: $ids}}) {
    ...ContractParts
  }
}
    ${ContractPartsFragmentDoc}`;

/**
 * __useGetContractsByIdQuery__
 *
 * To run a query within a React component, call `useGetContractsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContractsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContractsByIdQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useGetContractsByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetContractsByIdQuery, GetContractsByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContractsByIdQuery, GetContractsByIdQueryVariables>(GetContractsByIdDocument, options);
      }
export function useGetContractsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContractsByIdQuery, GetContractsByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContractsByIdQuery, GetContractsByIdQueryVariables>(GetContractsByIdDocument, options);
        }
export type GetContractsByIdQueryHookResult = ReturnType<typeof useGetContractsByIdQuery>;
export type GetContractsByIdLazyQueryHookResult = ReturnType<typeof useGetContractsByIdLazyQuery>;
export type GetContractsByIdQueryResult = Apollo.QueryResult<GetContractsByIdQuery, GetContractsByIdQueryVariables>;
export const GetMyContractsSubscriptionDocument = gql`
    subscription GetMyContractsSubscription($address: String!) {
  Wallets(where: {address: {_ilike: $address}}) {
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
    ${ContractPartsFragmentDoc}`;

/**
 * __useGetMyContractsSubscriptionSubscription__
 *
 * To run a query within a React component, call `useGetMyContractsSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetMyContractsSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyContractsSubscriptionSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetMyContractsSubscriptionSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetMyContractsSubscriptionSubscription, GetMyContractsSubscriptionSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetMyContractsSubscriptionSubscription, GetMyContractsSubscriptionSubscriptionVariables>(GetMyContractsSubscriptionDocument, options);
      }
export type GetMyContractsSubscriptionSubscriptionHookResult = ReturnType<typeof useGetMyContractsSubscriptionSubscription>;
export type GetMyContractsSubscriptionSubscriptionResult = Apollo.SubscriptionResult<GetMyContractsSubscriptionSubscription>;
export const GetMyContractsDocument = gql`
    query GetMyContracts($address: String!) {
  Wallets(where: {address: {_ilike: $address}}) {
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
    ${ContractPartsFragmentDoc}`;

/**
 * __useGetMyContractsQuery__
 *
 * To run a query within a React component, call `useGetMyContractsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyContractsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyContractsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetMyContractsQuery(baseOptions: Apollo.QueryHookOptions<GetMyContractsQuery, GetMyContractsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyContractsQuery, GetMyContractsQueryVariables>(GetMyContractsDocument, options);
      }
export function useGetMyContractsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyContractsQuery, GetMyContractsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyContractsQuery, GetMyContractsQueryVariables>(GetMyContractsDocument, options);
        }
export type GetMyContractsQueryHookResult = ReturnType<typeof useGetMyContractsQuery>;
export type GetMyContractsLazyQueryHookResult = ReturnType<typeof useGetMyContractsLazyQuery>;
export type GetMyContractsQueryResult = Apollo.QueryResult<GetMyContractsQuery, GetMyContractsQueryVariables>;
export const SearchBundlesDocument = gql`
    query SearchBundles($searchTerm: String) {
  Bundles(
    where: {_or: [{name: {_ilike: $searchTerm}}, {description: {_ilike: $searchTerm}}]}
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
    ${ContractPartsFragmentDoc}`;

/**
 * __useSearchBundlesQuery__
 *
 * To run a query within a React component, call `useSearchBundlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchBundlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchBundlesQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useSearchBundlesQuery(baseOptions?: Apollo.QueryHookOptions<SearchBundlesQuery, SearchBundlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchBundlesQuery, SearchBundlesQueryVariables>(SearchBundlesDocument, options);
      }
export function useSearchBundlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchBundlesQuery, SearchBundlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchBundlesQuery, SearchBundlesQueryVariables>(SearchBundlesDocument, options);
        }
export type SearchBundlesQueryHookResult = ReturnType<typeof useSearchBundlesQuery>;
export type SearchBundlesLazyQueryHookResult = ReturnType<typeof useSearchBundlesLazyQuery>;
export type SearchBundlesQueryResult = Apollo.QueryResult<SearchBundlesQuery, SearchBundlesQueryVariables>;
export const GetBundleByIdDocument = gql`
    query GetBundleById($id: uuid!) {
  Bundles(where: {id: {_eq: $id}}) {
    id
    name
    description
    BundleContracts(order_by: {order: asc}) {
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
    ${ContractPartsFragmentDoc}`;

/**
 * __useGetBundleByIdQuery__
 *
 * To run a query within a React component, call `useGetBundleByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBundleByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBundleByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBundleByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBundleByIdQuery, GetBundleByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBundleByIdQuery, GetBundleByIdQueryVariables>(GetBundleByIdDocument, options);
      }
export function useGetBundleByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBundleByIdQuery, GetBundleByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBundleByIdQuery, GetBundleByIdQueryVariables>(GetBundleByIdDocument, options);
        }
export type GetBundleByIdQueryHookResult = ReturnType<typeof useGetBundleByIdQuery>;
export type GetBundleByIdLazyQueryHookResult = ReturnType<typeof useGetBundleByIdLazyQuery>;
export type GetBundleByIdQueryResult = Apollo.QueryResult<GetBundleByIdQuery, GetBundleByIdQueryVariables>;
export const SubSearchContractsDocument = gql`
    subscription SubSearchContracts($contractType: String, $searchTerm: String) {
  Contracts(
    where: {contractType: {_eq: $contractType}, _or: [{name: {_ilike: $searchTerm}}, {description: {_ilike: $searchTerm}}]}
  ) {
    ...ContractParts
  }
}
    ${ContractPartsFragmentDoc}`;

/**
 * __useSubSearchContractsSubscription__
 *
 * To run a query within a React component, call `useSubSearchContractsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubSearchContractsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubSearchContractsSubscription({
 *   variables: {
 *      contractType: // value for 'contractType'
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useSubSearchContractsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubSearchContractsSubscription, SubSearchContractsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubSearchContractsSubscription, SubSearchContractsSubscriptionVariables>(SubSearchContractsDocument, options);
      }
export type SubSearchContractsSubscriptionHookResult = ReturnType<typeof useSubSearchContractsSubscription>;
export type SubSearchContractsSubscriptionResult = Apollo.SubscriptionResult<SubSearchContractsSubscription>;
export const SubGetContractsByAddressesDocument = gql`
    subscription SubGetContractsByAddresses($addresses: [String!]) {
  ContractInstances(where: {address: {_in: $addresses}}) {
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
    ${ContractPartsFragmentDoc}`;

/**
 * __useSubGetContractsByAddressesSubscription__
 *
 * To run a query within a React component, call `useSubGetContractsByAddressesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubGetContractsByAddressesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubGetContractsByAddressesSubscription({
 *   variables: {
 *      addresses: // value for 'addresses'
 *   },
 * });
 */
export function useSubGetContractsByAddressesSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubGetContractsByAddressesSubscription, SubGetContractsByAddressesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubGetContractsByAddressesSubscription, SubGetContractsByAddressesSubscriptionVariables>(SubGetContractsByAddressesDocument, options);
      }
export type SubGetContractsByAddressesSubscriptionHookResult = ReturnType<typeof useSubGetContractsByAddressesSubscription>;
export type SubGetContractsByAddressesSubscriptionResult = Apollo.SubscriptionResult<SubGetContractsByAddressesSubscription>;
export const SubGetContractsByIdDocument = gql`
    subscription SubGetContractsById($ids: [uuid!]) {
  Contracts(where: {id: {_in: $ids}}) {
    ...ContractParts
  }
}
    ${ContractPartsFragmentDoc}`;

/**
 * __useSubGetContractsByIdSubscription__
 *
 * To run a query within a React component, call `useSubGetContractsByIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubGetContractsByIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubGetContractsByIdSubscription({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useSubGetContractsByIdSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubGetContractsByIdSubscription, SubGetContractsByIdSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubGetContractsByIdSubscription, SubGetContractsByIdSubscriptionVariables>(SubGetContractsByIdDocument, options);
      }
export type SubGetContractsByIdSubscriptionHookResult = ReturnType<typeof useSubGetContractsByIdSubscription>;
export type SubGetContractsByIdSubscriptionResult = Apollo.SubscriptionResult<SubGetContractsByIdSubscription>;
export const SubGetMyContractsDocument = gql`
    subscription SubGetMyContracts($address: String!) {
  Wallets(where: {address: {_ilike: $address}}) {
    id
    WalletContractInstances(order_by: {createdAt: desc}) {
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
    ${ContractPartsFragmentDoc}`;

/**
 * __useSubGetMyContractsSubscription__
 *
 * To run a query within a React component, call `useSubGetMyContractsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubGetMyContractsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubGetMyContractsSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useSubGetMyContractsSubscription(baseOptions: Apollo.SubscriptionHookOptions<SubGetMyContractsSubscription, SubGetMyContractsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubGetMyContractsSubscription, SubGetMyContractsSubscriptionVariables>(SubGetMyContractsDocument, options);
      }
export type SubGetMyContractsSubscriptionHookResult = ReturnType<typeof useSubGetMyContractsSubscription>;
export type SubGetMyContractsSubscriptionResult = Apollo.SubscriptionResult<SubGetMyContractsSubscription>;
export const SubSearchBundlesDocument = gql`
    subscription SubSearchBundles($searchTerm: String) {
  Bundles(
    where: {_or: [{name: {_ilike: $searchTerm}}, {description: {_ilike: $searchTerm}}]}
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
    ${ContractPartsFragmentDoc}`;

/**
 * __useSubSearchBundlesSubscription__
 *
 * To run a query within a React component, call `useSubSearchBundlesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubSearchBundlesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubSearchBundlesSubscription({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useSubSearchBundlesSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubSearchBundlesSubscription, SubSearchBundlesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubSearchBundlesSubscription, SubSearchBundlesSubscriptionVariables>(SubSearchBundlesDocument, options);
      }
export type SubSearchBundlesSubscriptionHookResult = ReturnType<typeof useSubSearchBundlesSubscription>;
export type SubSearchBundlesSubscriptionResult = Apollo.SubscriptionResult<SubSearchBundlesSubscription>;
export const SubGetBundleByIdDocument = gql`
    subscription SubGetBundleById($id: uuid!, $chainId: Int) {
  Bundles(where: {id: {_eq: $id}}) {
    id
    name
    description
    abi
    BundleContracts(order_by: {order: asc}) {
      id
      order
      functionSelectors
      Contract {
        id
        name
        description
        abi
        bytecode
        contractType
        functionSelectors
        ContractInstances(where: {chainId: {_eq: $chainId}}) {
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
    `;

/**
 * __useSubGetBundleByIdSubscription__
 *
 * To run a query within a React component, call `useSubGetBundleByIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubGetBundleByIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubGetBundleByIdSubscription({
 *   variables: {
 *      id: // value for 'id'
 *      chainId: // value for 'chainId'
 *   },
 * });
 */
export function useSubGetBundleByIdSubscription(baseOptions: Apollo.SubscriptionHookOptions<SubGetBundleByIdSubscription, SubGetBundleByIdSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubGetBundleByIdSubscription, SubGetBundleByIdSubscriptionVariables>(SubGetBundleByIdDocument, options);
      }
export type SubGetBundleByIdSubscriptionHookResult = ReturnType<typeof useSubGetBundleByIdSubscription>;
export type SubGetBundleByIdSubscriptionResult = Apollo.SubscriptionResult<SubGetBundleByIdSubscription>;