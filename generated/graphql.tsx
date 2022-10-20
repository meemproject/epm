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
  deletedAt?: Maybe<Scalars['timestamptz']>;
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
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
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
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "BundleContracts" */
export type BundleContracts_Max_Order_By = {
  BundleId?: InputMaybe<Order_By>;
  ContractId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
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
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "BundleContracts" */
export type BundleContracts_Min_Order_By = {
  BundleId?: InputMaybe<Order_By>;
  ContractId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
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
  deletedAt?: InputMaybe<Order_By>;
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
  DeletedAt = 'deletedAt',
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
  deletedAt?: InputMaybe<Scalars['timestamptz']>;
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
  ContractInstances?: InputMaybe<ContractInstances_Bool_Exp>;
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

/** columns and relationships of "IdentityIntegrations" */
export type IdentityIntegrations = {
  __typename?: 'IdentityIntegrations';
  /** An array relationship */
  MeemIdentityIntegrations: Array<MeemIdentityIntegrations>;
  /** An aggregate relationship */
  MeemIdentityIntegrations_aggregate: MeemIdentityIntegrations_Aggregate;
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  icon: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "IdentityIntegrations" */
export type IdentityIntegrationsMeemIdentityIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentityIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentityIntegrations_Order_By>>;
  where?: InputMaybe<MeemIdentityIntegrations_Bool_Exp>;
};


/** columns and relationships of "IdentityIntegrations" */
export type IdentityIntegrationsMeemIdentityIntegrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentityIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentityIntegrations_Order_By>>;
  where?: InputMaybe<MeemIdentityIntegrations_Bool_Exp>;
};

/** aggregated selection of "IdentityIntegrations" */
export type IdentityIntegrations_Aggregate = {
  __typename?: 'IdentityIntegrations_aggregate';
  aggregate?: Maybe<IdentityIntegrations_Aggregate_Fields>;
  nodes: Array<IdentityIntegrations>;
};

/** aggregate fields of "IdentityIntegrations" */
export type IdentityIntegrations_Aggregate_Fields = {
  __typename?: 'IdentityIntegrations_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<IdentityIntegrations_Max_Fields>;
  min?: Maybe<IdentityIntegrations_Min_Fields>;
};


/** aggregate fields of "IdentityIntegrations" */
export type IdentityIntegrations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<IdentityIntegrations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "IdentityIntegrations". All fields are combined with a logical 'AND'. */
export type IdentityIntegrations_Bool_Exp = {
  MeemIdentityIntegrations?: InputMaybe<MeemIdentityIntegrations_Bool_Exp>;
  _and?: InputMaybe<Array<IdentityIntegrations_Bool_Exp>>;
  _not?: InputMaybe<IdentityIntegrations_Bool_Exp>;
  _or?: InputMaybe<Array<IdentityIntegrations_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type IdentityIntegrations_Max_Fields = {
  __typename?: 'IdentityIntegrations_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type IdentityIntegrations_Min_Fields = {
  __typename?: 'IdentityIntegrations_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** Ordering options when selecting data from "IdentityIntegrations". */
export type IdentityIntegrations_Order_By = {
  MeemIdentityIntegrations_aggregate?: InputMaybe<MeemIdentityIntegrations_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "IdentityIntegrations" */
export enum IdentityIntegrations_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
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
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']>;
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
  /** An array relationship */
  MeemContractIntegrations: Array<MeemContractIntegrations>;
  /** An aggregate relationship */
  MeemContractIntegrations_aggregate: MeemContractIntegrations_Aggregate;
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  guideUrl: Scalars['String'];
  icon: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "Integrations" */
export type IntegrationsMeemContractIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<MeemContractIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractIntegrations_Order_By>>;
  where?: InputMaybe<MeemContractIntegrations_Bool_Exp>;
};


/** columns and relationships of "Integrations" */
export type IntegrationsMeemContractIntegrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemContractIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractIntegrations_Order_By>>;
  where?: InputMaybe<MeemContractIntegrations_Bool_Exp>;
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
  MeemContractIntegrations?: InputMaybe<MeemContractIntegrations_Bool_Exp>;
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
  MeemContractIntegrations_aggregate?: InputMaybe<MeemContractIntegrations_Aggregate_Order_By>;
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

/** columns and relationships of "MeemContractIntegrations" */
export type MeemContractIntegrations = {
  __typename?: 'MeemContractIntegrations';
  /** An object relationship */
  Integration?: Maybe<Integrations>;
  IntegrationId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  MeemContract?: Maybe<MeemContracts>;
  MeemContractId?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  isEnabled: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  metadata: Scalars['jsonb'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "MeemContractIntegrations" */
export type MeemContractIntegrationsMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "MeemContractIntegrations" */
export type MeemContractIntegrations_Aggregate = {
  __typename?: 'MeemContractIntegrations_aggregate';
  aggregate?: Maybe<MeemContractIntegrations_Aggregate_Fields>;
  nodes: Array<MeemContractIntegrations>;
};

/** aggregate fields of "MeemContractIntegrations" */
export type MeemContractIntegrations_Aggregate_Fields = {
  __typename?: 'MeemContractIntegrations_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MeemContractIntegrations_Max_Fields>;
  min?: Maybe<MeemContractIntegrations_Min_Fields>;
};


/** aggregate fields of "MeemContractIntegrations" */
export type MeemContractIntegrations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MeemContractIntegrations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "MeemContractIntegrations" */
export type MeemContractIntegrations_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<MeemContractIntegrations_Max_Order_By>;
  min?: InputMaybe<MeemContractIntegrations_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "MeemContractIntegrations". All fields are combined with a logical 'AND'. */
export type MeemContractIntegrations_Bool_Exp = {
  Integration?: InputMaybe<Integrations_Bool_Exp>;
  IntegrationId?: InputMaybe<Uuid_Comparison_Exp>;
  MeemContract?: InputMaybe<MeemContracts_Bool_Exp>;
  MeemContractId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<MeemContractIntegrations_Bool_Exp>>;
  _not?: InputMaybe<MeemContractIntegrations_Bool_Exp>;
  _or?: InputMaybe<Array<MeemContractIntegrations_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  isPublic?: InputMaybe<Boolean_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type MeemContractIntegrations_Max_Fields = {
  __typename?: 'MeemContractIntegrations_max_fields';
  IntegrationId?: Maybe<Scalars['uuid']>;
  MeemContractId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "MeemContractIntegrations" */
export type MeemContractIntegrations_Max_Order_By = {
  IntegrationId?: InputMaybe<Order_By>;
  MeemContractId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type MeemContractIntegrations_Min_Fields = {
  __typename?: 'MeemContractIntegrations_min_fields';
  IntegrationId?: Maybe<Scalars['uuid']>;
  MeemContractId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "MeemContractIntegrations" */
export type MeemContractIntegrations_Min_Order_By = {
  IntegrationId?: InputMaybe<Order_By>;
  MeemContractId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "MeemContractIntegrations". */
export type MeemContractIntegrations_Order_By = {
  Integration?: InputMaybe<Integrations_Order_By>;
  IntegrationId?: InputMaybe<Order_By>;
  MeemContract?: InputMaybe<MeemContracts_Order_By>;
  MeemContractId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isEnabled?: InputMaybe<Order_By>;
  isPublic?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "MeemContractIntegrations" */
export enum MeemContractIntegrations_Select_Column {
  /** column name */
  IntegrationId = 'IntegrationId',
  /** column name */
  MeemContractId = 'MeemContractId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsEnabled = 'isEnabled',
  /** column name */
  IsPublic = 'isPublic',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "MeemContractIntegrations" */
export type MeemContractIntegrations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MeemContractIntegrations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MeemContractIntegrations_Stream_Cursor_Value_Input = {
  IntegrationId?: InputMaybe<Scalars['uuid']>;
  MeemContractId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isEnabled?: InputMaybe<Scalars['Boolean']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "MeemContractWallets" */
export type MeemContractWallets = {
  __typename?: 'MeemContractWallets';
  /** An object relationship */
  MeemContract?: Maybe<MeemContracts>;
  MeemContractId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  Wallet?: Maybe<Wallets>;
  WalletId?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  role: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "MeemContractWallets" */
export type MeemContractWallets_Aggregate = {
  __typename?: 'MeemContractWallets_aggregate';
  aggregate?: Maybe<MeemContractWallets_Aggregate_Fields>;
  nodes: Array<MeemContractWallets>;
};

/** aggregate fields of "MeemContractWallets" */
export type MeemContractWallets_Aggregate_Fields = {
  __typename?: 'MeemContractWallets_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MeemContractWallets_Max_Fields>;
  min?: Maybe<MeemContractWallets_Min_Fields>;
};


/** aggregate fields of "MeemContractWallets" */
export type MeemContractWallets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MeemContractWallets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "MeemContractWallets" */
export type MeemContractWallets_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<MeemContractWallets_Max_Order_By>;
  min?: InputMaybe<MeemContractWallets_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "MeemContractWallets". All fields are combined with a logical 'AND'. */
export type MeemContractWallets_Bool_Exp = {
  MeemContract?: InputMaybe<MeemContracts_Bool_Exp>;
  MeemContractId?: InputMaybe<Uuid_Comparison_Exp>;
  Wallet?: InputMaybe<Wallets_Bool_Exp>;
  WalletId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<MeemContractWallets_Bool_Exp>>;
  _not?: InputMaybe<MeemContractWallets_Bool_Exp>;
  _or?: InputMaybe<Array<MeemContractWallets_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type MeemContractWallets_Max_Fields = {
  __typename?: 'MeemContractWallets_max_fields';
  MeemContractId?: Maybe<Scalars['uuid']>;
  WalletId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "MeemContractWallets" */
export type MeemContractWallets_Max_Order_By = {
  MeemContractId?: InputMaybe<Order_By>;
  WalletId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type MeemContractWallets_Min_Fields = {
  __typename?: 'MeemContractWallets_min_fields';
  MeemContractId?: Maybe<Scalars['uuid']>;
  WalletId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "MeemContractWallets" */
export type MeemContractWallets_Min_Order_By = {
  MeemContractId?: InputMaybe<Order_By>;
  WalletId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "MeemContractWallets". */
export type MeemContractWallets_Order_By = {
  MeemContract?: InputMaybe<MeemContracts_Order_By>;
  MeemContractId?: InputMaybe<Order_By>;
  Wallet?: InputMaybe<Wallets_Order_By>;
  WalletId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "MeemContractWallets" */
export enum MeemContractWallets_Select_Column {
  /** column name */
  MeemContractId = 'MeemContractId',
  /** column name */
  WalletId = 'WalletId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "MeemContractWallets" */
export type MeemContractWallets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MeemContractWallets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MeemContractWallets_Stream_Cursor_Value_Input = {
  MeemContractId?: InputMaybe<Scalars['uuid']>;
  WalletId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "MeemContracts" */
export type MeemContracts = {
  __typename?: 'MeemContracts';
  /** An array relationship */
  MeemContractIntegrations: Array<MeemContractIntegrations>;
  /** An aggregate relationship */
  MeemContractIntegrations_aggregate: MeemContractIntegrations_Aggregate;
  /** An array relationship */
  MeemContractWallets: Array<MeemContractWallets>;
  /** An aggregate relationship */
  MeemContractWallets_aggregate: MeemContractWallets_Aggregate;
  /** An array relationship */
  Meems: Array<Meems>;
  /** An aggregate relationship */
  Meems_aggregate: Meems_Aggregate;
  /** An object relationship */
  Owner?: Maybe<Wallets>;
  OwnerId?: Maybe<Scalars['uuid']>;
  address: Scalars['String'];
  chainId: Scalars['Int'];
  contractURI: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  ens?: Maybe<Scalars['String']>;
  ensFetchedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  isMaxSupplyLocked: Scalars['Boolean'];
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


/** columns and relationships of "MeemContracts" */
export type MeemContractsMeemContractIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<MeemContractIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractIntegrations_Order_By>>;
  where?: InputMaybe<MeemContractIntegrations_Bool_Exp>;
};


/** columns and relationships of "MeemContracts" */
export type MeemContractsMeemContractIntegrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemContractIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractIntegrations_Order_By>>;
  where?: InputMaybe<MeemContractIntegrations_Bool_Exp>;
};


/** columns and relationships of "MeemContracts" */
export type MeemContractsMeemContractWalletsArgs = {
  distinct_on?: InputMaybe<Array<MeemContractWallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractWallets_Order_By>>;
  where?: InputMaybe<MeemContractWallets_Bool_Exp>;
};


/** columns and relationships of "MeemContracts" */
export type MeemContractsMeemContractWallets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemContractWallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractWallets_Order_By>>;
  where?: InputMaybe<MeemContractWallets_Bool_Exp>;
};


/** columns and relationships of "MeemContracts" */
export type MeemContractsMeemsArgs = {
  distinct_on?: InputMaybe<Array<Meems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meems_Order_By>>;
  where?: InputMaybe<Meems_Bool_Exp>;
};


/** columns and relationships of "MeemContracts" */
export type MeemContractsMeems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meems_Order_By>>;
  where?: InputMaybe<Meems_Bool_Exp>;
};


/** columns and relationships of "MeemContracts" */
export type MeemContractsMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "MeemContracts" */
export type MeemContractsMintPermissionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "MeemContracts" */
export type MeemContractsSplitsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "MeemContracts" */
export type MeemContracts_Aggregate = {
  __typename?: 'MeemContracts_aggregate';
  aggregate?: Maybe<MeemContracts_Aggregate_Fields>;
  nodes: Array<MeemContracts>;
};

/** aggregate fields of "MeemContracts" */
export type MeemContracts_Aggregate_Fields = {
  __typename?: 'MeemContracts_aggregate_fields';
  avg?: Maybe<MeemContracts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<MeemContracts_Max_Fields>;
  min?: Maybe<MeemContracts_Min_Fields>;
  stddev?: Maybe<MeemContracts_Stddev_Fields>;
  stddev_pop?: Maybe<MeemContracts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<MeemContracts_Stddev_Samp_Fields>;
  sum?: Maybe<MeemContracts_Sum_Fields>;
  var_pop?: Maybe<MeemContracts_Var_Pop_Fields>;
  var_samp?: Maybe<MeemContracts_Var_Samp_Fields>;
  variance?: Maybe<MeemContracts_Variance_Fields>;
};


/** aggregate fields of "MeemContracts" */
export type MeemContracts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MeemContracts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "MeemContracts" */
export type MeemContracts_Aggregate_Order_By = {
  avg?: InputMaybe<MeemContracts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<MeemContracts_Max_Order_By>;
  min?: InputMaybe<MeemContracts_Min_Order_By>;
  stddev?: InputMaybe<MeemContracts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<MeemContracts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<MeemContracts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<MeemContracts_Sum_Order_By>;
  var_pop?: InputMaybe<MeemContracts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<MeemContracts_Var_Samp_Order_By>;
  variance?: InputMaybe<MeemContracts_Variance_Order_By>;
};

/** aggregate avg on columns */
export type MeemContracts_Avg_Fields = {
  __typename?: 'MeemContracts_avg_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "MeemContracts" */
export type MeemContracts_Avg_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "MeemContracts". All fields are combined with a logical 'AND'. */
export type MeemContracts_Bool_Exp = {
  MeemContractIntegrations?: InputMaybe<MeemContractIntegrations_Bool_Exp>;
  MeemContractWallets?: InputMaybe<MeemContractWallets_Bool_Exp>;
  Meems?: InputMaybe<Meems_Bool_Exp>;
  Owner?: InputMaybe<Wallets_Bool_Exp>;
  OwnerId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<MeemContracts_Bool_Exp>>;
  _not?: InputMaybe<MeemContracts_Bool_Exp>;
  _or?: InputMaybe<Array<MeemContracts_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  chainId?: InputMaybe<Int_Comparison_Exp>;
  contractURI?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  ens?: InputMaybe<String_Comparison_Exp>;
  ensFetchedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isMaxSupplyLocked?: InputMaybe<Boolean_Comparison_Exp>;
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

/** aggregate max on columns */
export type MeemContracts_Max_Fields = {
  __typename?: 'MeemContracts_max_fields';
  OwnerId?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  chainId?: Maybe<Scalars['Int']>;
  contractURI?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  ens?: Maybe<Scalars['String']>;
  ensFetchedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  maxSupply?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ownerFetchedAt?: Maybe<Scalars['timestamptz']>;
  slug?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "MeemContracts" */
export type MeemContracts_Max_Order_By = {
  OwnerId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
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

/** aggregate min on columns */
export type MeemContracts_Min_Fields = {
  __typename?: 'MeemContracts_min_fields';
  OwnerId?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  chainId?: Maybe<Scalars['Int']>;
  contractURI?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  ens?: Maybe<Scalars['String']>;
  ensFetchedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  maxSupply?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ownerFetchedAt?: Maybe<Scalars['timestamptz']>;
  slug?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "MeemContracts" */
export type MeemContracts_Min_Order_By = {
  OwnerId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
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

/** Ordering options when selecting data from "MeemContracts". */
export type MeemContracts_Order_By = {
  MeemContractIntegrations_aggregate?: InputMaybe<MeemContractIntegrations_Aggregate_Order_By>;
  MeemContractWallets_aggregate?: InputMaybe<MeemContractWallets_Aggregate_Order_By>;
  Meems_aggregate?: InputMaybe<Meems_Aggregate_Order_By>;
  Owner?: InputMaybe<Wallets_Order_By>;
  OwnerId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  contractURI?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  ens?: InputMaybe<Order_By>;
  ensFetchedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isMaxSupplyLocked?: InputMaybe<Order_By>;
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

/** select columns of table "MeemContracts" */
export enum MeemContracts_Select_Column {
  /** column name */
  OwnerId = 'OwnerId',
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
  EnsFetchedAt = 'ensFetchedAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsMaxSupplyLocked = 'isMaxSupplyLocked',
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

/** aggregate stddev on columns */
export type MeemContracts_Stddev_Fields = {
  __typename?: 'MeemContracts_stddev_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "MeemContracts" */
export type MeemContracts_Stddev_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type MeemContracts_Stddev_Pop_Fields = {
  __typename?: 'MeemContracts_stddev_pop_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "MeemContracts" */
export type MeemContracts_Stddev_Pop_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type MeemContracts_Stddev_Samp_Fields = {
  __typename?: 'MeemContracts_stddev_samp_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "MeemContracts" */
export type MeemContracts_Stddev_Samp_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "MeemContracts" */
export type MeemContracts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MeemContracts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MeemContracts_Stream_Cursor_Value_Input = {
  OwnerId?: InputMaybe<Scalars['uuid']>;
  address?: InputMaybe<Scalars['String']>;
  chainId?: InputMaybe<Scalars['Int']>;
  contractURI?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  ens?: InputMaybe<Scalars['String']>;
  ensFetchedAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isMaxSupplyLocked?: InputMaybe<Scalars['Boolean']>;
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

/** aggregate sum on columns */
export type MeemContracts_Sum_Fields = {
  __typename?: 'MeemContracts_sum_fields';
  chainId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "MeemContracts" */
export type MeemContracts_Sum_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type MeemContracts_Var_Pop_Fields = {
  __typename?: 'MeemContracts_var_pop_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "MeemContracts" */
export type MeemContracts_Var_Pop_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type MeemContracts_Var_Samp_Fields = {
  __typename?: 'MeemContracts_var_samp_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "MeemContracts" */
export type MeemContracts_Var_Samp_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type MeemContracts_Variance_Fields = {
  __typename?: 'MeemContracts_variance_fields';
  chainId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "MeemContracts" */
export type MeemContracts_Variance_Order_By = {
  chainId?: InputMaybe<Order_By>;
};

/** columns and relationships of "MeemIdentities" */
export type MeemIdentities = {
  __typename?: 'MeemIdentities';
  /** An object relationship */
  DefaultWallet?: Maybe<Wallets>;
  DefaultWalletId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  MeemIdentityIntegrations: Array<MeemIdentityIntegrations>;
  /** An aggregate relationship */
  MeemIdentityIntegrations_aggregate: MeemIdentityIntegrations_Aggregate;
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  profilePicUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "MeemIdentities" */
export type MeemIdentitiesMeemIdentityIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentityIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentityIntegrations_Order_By>>;
  where?: InputMaybe<MeemIdentityIntegrations_Bool_Exp>;
};


/** columns and relationships of "MeemIdentities" */
export type MeemIdentitiesMeemIdentityIntegrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentityIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentityIntegrations_Order_By>>;
  where?: InputMaybe<MeemIdentityIntegrations_Bool_Exp>;
};

/** aggregated selection of "MeemIdentities" */
export type MeemIdentities_Aggregate = {
  __typename?: 'MeemIdentities_aggregate';
  aggregate?: Maybe<MeemIdentities_Aggregate_Fields>;
  nodes: Array<MeemIdentities>;
};

/** aggregate fields of "MeemIdentities" */
export type MeemIdentities_Aggregate_Fields = {
  __typename?: 'MeemIdentities_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MeemIdentities_Max_Fields>;
  min?: Maybe<MeemIdentities_Min_Fields>;
};


/** aggregate fields of "MeemIdentities" */
export type MeemIdentities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MeemIdentities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "MeemIdentities" */
export type MeemIdentities_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<MeemIdentities_Max_Order_By>;
  min?: InputMaybe<MeemIdentities_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "MeemIdentities". All fields are combined with a logical 'AND'. */
export type MeemIdentities_Bool_Exp = {
  DefaultWallet?: InputMaybe<Wallets_Bool_Exp>;
  DefaultWalletId?: InputMaybe<Uuid_Comparison_Exp>;
  MeemIdentityIntegrations?: InputMaybe<MeemIdentityIntegrations_Bool_Exp>;
  _and?: InputMaybe<Array<MeemIdentities_Bool_Exp>>;
  _not?: InputMaybe<MeemIdentities_Bool_Exp>;
  _or?: InputMaybe<Array<MeemIdentities_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  profilePicUrl?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type MeemIdentities_Max_Fields = {
  __typename?: 'MeemIdentities_max_fields';
  DefaultWalletId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  profilePicUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "MeemIdentities" */
export type MeemIdentities_Max_Order_By = {
  DefaultWalletId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profilePicUrl?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type MeemIdentities_Min_Fields = {
  __typename?: 'MeemIdentities_min_fields';
  DefaultWalletId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  profilePicUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "MeemIdentities" */
export type MeemIdentities_Min_Order_By = {
  DefaultWalletId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profilePicUrl?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "MeemIdentities". */
export type MeemIdentities_Order_By = {
  DefaultWallet?: InputMaybe<Wallets_Order_By>;
  DefaultWalletId?: InputMaybe<Order_By>;
  MeemIdentityIntegrations_aggregate?: InputMaybe<MeemIdentityIntegrations_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profilePicUrl?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "MeemIdentities" */
export enum MeemIdentities_Select_Column {
  /** column name */
  DefaultWalletId = 'DefaultWalletId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Id = 'id',
  /** column name */
  ProfilePicUrl = 'profilePicUrl',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "MeemIdentities" */
export type MeemIdentities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MeemIdentities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MeemIdentities_Stream_Cursor_Value_Input = {
  DefaultWalletId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']>;
  displayName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  profilePicUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "MeemIdentityIntegrations" */
export type MeemIdentityIntegrations = {
  __typename?: 'MeemIdentityIntegrations';
  /** An object relationship */
  IdentityIntegration?: Maybe<IdentityIntegrations>;
  IdentityIntegrationId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  MeemIdentity?: Maybe<MeemIdentities>;
  MeemIdentityId?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  metadata: Scalars['jsonb'];
  updatedAt: Scalars['timestamptz'];
  visibility: Scalars['String'];
};


/** columns and relationships of "MeemIdentityIntegrations" */
export type MeemIdentityIntegrationsMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "MeemIdentityIntegrations" */
export type MeemIdentityIntegrations_Aggregate = {
  __typename?: 'MeemIdentityIntegrations_aggregate';
  aggregate?: Maybe<MeemIdentityIntegrations_Aggregate_Fields>;
  nodes: Array<MeemIdentityIntegrations>;
};

/** aggregate fields of "MeemIdentityIntegrations" */
export type MeemIdentityIntegrations_Aggregate_Fields = {
  __typename?: 'MeemIdentityIntegrations_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MeemIdentityIntegrations_Max_Fields>;
  min?: Maybe<MeemIdentityIntegrations_Min_Fields>;
};


/** aggregate fields of "MeemIdentityIntegrations" */
export type MeemIdentityIntegrations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MeemIdentityIntegrations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "MeemIdentityIntegrations" */
export type MeemIdentityIntegrations_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<MeemIdentityIntegrations_Max_Order_By>;
  min?: InputMaybe<MeemIdentityIntegrations_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "MeemIdentityIntegrations". All fields are combined with a logical 'AND'. */
export type MeemIdentityIntegrations_Bool_Exp = {
  IdentityIntegration?: InputMaybe<IdentityIntegrations_Bool_Exp>;
  IdentityIntegrationId?: InputMaybe<Uuid_Comparison_Exp>;
  MeemIdentity?: InputMaybe<MeemIdentities_Bool_Exp>;
  MeemIdentityId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<MeemIdentityIntegrations_Bool_Exp>>;
  _not?: InputMaybe<MeemIdentityIntegrations_Bool_Exp>;
  _or?: InputMaybe<Array<MeemIdentityIntegrations_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  visibility?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type MeemIdentityIntegrations_Max_Fields = {
  __typename?: 'MeemIdentityIntegrations_max_fields';
  IdentityIntegrationId?: Maybe<Scalars['uuid']>;
  MeemIdentityId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  visibility?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "MeemIdentityIntegrations" */
export type MeemIdentityIntegrations_Max_Order_By = {
  IdentityIntegrationId?: InputMaybe<Order_By>;
  MeemIdentityId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type MeemIdentityIntegrations_Min_Fields = {
  __typename?: 'MeemIdentityIntegrations_min_fields';
  IdentityIntegrationId?: Maybe<Scalars['uuid']>;
  MeemIdentityId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  visibility?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "MeemIdentityIntegrations" */
export type MeemIdentityIntegrations_Min_Order_By = {
  IdentityIntegrationId?: InputMaybe<Order_By>;
  MeemIdentityId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "MeemIdentityIntegrations". */
export type MeemIdentityIntegrations_Order_By = {
  IdentityIntegration?: InputMaybe<IdentityIntegrations_Order_By>;
  IdentityIntegrationId?: InputMaybe<Order_By>;
  MeemIdentity?: InputMaybe<MeemIdentities_Order_By>;
  MeemIdentityId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
};

/** select columns of table "MeemIdentityIntegrations" */
export enum MeemIdentityIntegrations_Select_Column {
  /** column name */
  IdentityIntegrationId = 'IdentityIntegrationId',
  /** column name */
  MeemIdentityId = 'MeemIdentityId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Visibility = 'visibility'
}

/** Streaming cursor of the table "MeemIdentityIntegrations" */
export type MeemIdentityIntegrations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MeemIdentityIntegrations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MeemIdentityIntegrations_Stream_Cursor_Value_Input = {
  IdentityIntegrationId?: InputMaybe<Scalars['uuid']>;
  MeemIdentityId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  visibility?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "Meems" */
export type Meems = {
  __typename?: 'Meems';
  /** An object relationship */
  MeemContract?: Maybe<MeemContracts>;
  MeemContractId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  Owner?: Maybe<Wallets>;
  OwnerId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  Transfers: Array<Transfers>;
  /** An aggregate relationship */
  Transfers_aggregate: Transfers_Aggregate;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  meemType: Scalars['Int'];
  metadata: Scalars['jsonb'];
  mintedAt: Scalars['timestamptz'];
  mintedBy: Scalars['String'];
  tokenId: Scalars['String'];
  tokenURI: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "Meems" */
export type MeemsTransfersArgs = {
  distinct_on?: InputMaybe<Array<Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transfers_Order_By>>;
  where?: InputMaybe<Transfers_Bool_Exp>;
};


/** columns and relationships of "Meems" */
export type MeemsTransfers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transfers_Order_By>>;
  where?: InputMaybe<Transfers_Bool_Exp>;
};


/** columns and relationships of "Meems" */
export type MeemsMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "Meems" */
export type Meems_Aggregate = {
  __typename?: 'Meems_aggregate';
  aggregate?: Maybe<Meems_Aggregate_Fields>;
  nodes: Array<Meems>;
};

/** aggregate fields of "Meems" */
export type Meems_Aggregate_Fields = {
  __typename?: 'Meems_aggregate_fields';
  avg?: Maybe<Meems_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Meems_Max_Fields>;
  min?: Maybe<Meems_Min_Fields>;
  stddev?: Maybe<Meems_Stddev_Fields>;
  stddev_pop?: Maybe<Meems_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Meems_Stddev_Samp_Fields>;
  sum?: Maybe<Meems_Sum_Fields>;
  var_pop?: Maybe<Meems_Var_Pop_Fields>;
  var_samp?: Maybe<Meems_Var_Samp_Fields>;
  variance?: Maybe<Meems_Variance_Fields>;
};


/** aggregate fields of "Meems" */
export type Meems_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Meems_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Meems" */
export type Meems_Aggregate_Order_By = {
  avg?: InputMaybe<Meems_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Meems_Max_Order_By>;
  min?: InputMaybe<Meems_Min_Order_By>;
  stddev?: InputMaybe<Meems_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Meems_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Meems_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Meems_Sum_Order_By>;
  var_pop?: InputMaybe<Meems_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Meems_Var_Samp_Order_By>;
  variance?: InputMaybe<Meems_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Meems_Avg_Fields = {
  __typename?: 'Meems_avg_fields';
  meemType?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Meems" */
export type Meems_Avg_Order_By = {
  meemType?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Meems". All fields are combined with a logical 'AND'. */
export type Meems_Bool_Exp = {
  MeemContract?: InputMaybe<MeemContracts_Bool_Exp>;
  MeemContractId?: InputMaybe<Uuid_Comparison_Exp>;
  Owner?: InputMaybe<Wallets_Bool_Exp>;
  OwnerId?: InputMaybe<Uuid_Comparison_Exp>;
  Transfers?: InputMaybe<Transfers_Bool_Exp>;
  _and?: InputMaybe<Array<Meems_Bool_Exp>>;
  _not?: InputMaybe<Meems_Bool_Exp>;
  _or?: InputMaybe<Array<Meems_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  meemType?: InputMaybe<Int_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mintedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  mintedBy?: InputMaybe<String_Comparison_Exp>;
  tokenId?: InputMaybe<String_Comparison_Exp>;
  tokenURI?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Meems_Max_Fields = {
  __typename?: 'Meems_max_fields';
  MeemContractId?: Maybe<Scalars['uuid']>;
  OwnerId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  meemType?: Maybe<Scalars['Int']>;
  mintedAt?: Maybe<Scalars['timestamptz']>;
  mintedBy?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenURI?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "Meems" */
export type Meems_Max_Order_By = {
  MeemContractId?: InputMaybe<Order_By>;
  OwnerId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meemType?: InputMaybe<Order_By>;
  mintedAt?: InputMaybe<Order_By>;
  mintedBy?: InputMaybe<Order_By>;
  tokenId?: InputMaybe<Order_By>;
  tokenURI?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Meems_Min_Fields = {
  __typename?: 'Meems_min_fields';
  MeemContractId?: Maybe<Scalars['uuid']>;
  OwnerId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  meemType?: Maybe<Scalars['Int']>;
  mintedAt?: Maybe<Scalars['timestamptz']>;
  mintedBy?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenURI?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "Meems" */
export type Meems_Min_Order_By = {
  MeemContractId?: InputMaybe<Order_By>;
  OwnerId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meemType?: InputMaybe<Order_By>;
  mintedAt?: InputMaybe<Order_By>;
  mintedBy?: InputMaybe<Order_By>;
  tokenId?: InputMaybe<Order_By>;
  tokenURI?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Meems". */
export type Meems_Order_By = {
  MeemContract?: InputMaybe<MeemContracts_Order_By>;
  MeemContractId?: InputMaybe<Order_By>;
  Owner?: InputMaybe<Wallets_Order_By>;
  OwnerId?: InputMaybe<Order_By>;
  Transfers_aggregate?: InputMaybe<Transfers_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meemType?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  mintedAt?: InputMaybe<Order_By>;
  mintedBy?: InputMaybe<Order_By>;
  tokenId?: InputMaybe<Order_By>;
  tokenURI?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "Meems" */
export enum Meems_Select_Column {
  /** column name */
  MeemContractId = 'MeemContractId',
  /** column name */
  OwnerId = 'OwnerId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MeemType = 'meemType',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MintedAt = 'mintedAt',
  /** column name */
  MintedBy = 'mintedBy',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TokenUri = 'tokenURI',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type Meems_Stddev_Fields = {
  __typename?: 'Meems_stddev_fields';
  meemType?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Meems" */
export type Meems_Stddev_Order_By = {
  meemType?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Meems_Stddev_Pop_Fields = {
  __typename?: 'Meems_stddev_pop_fields';
  meemType?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Meems" */
export type Meems_Stddev_Pop_Order_By = {
  meemType?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Meems_Stddev_Samp_Fields = {
  __typename?: 'Meems_stddev_samp_fields';
  meemType?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Meems" */
export type Meems_Stddev_Samp_Order_By = {
  meemType?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Meems" */
export type Meems_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Meems_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Meems_Stream_Cursor_Value_Input = {
  MeemContractId?: InputMaybe<Scalars['uuid']>;
  OwnerId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  meemType?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  mintedAt?: InputMaybe<Scalars['timestamptz']>;
  mintedBy?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenURI?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Meems_Sum_Fields = {
  __typename?: 'Meems_sum_fields';
  meemType?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Meems" */
export type Meems_Sum_Order_By = {
  meemType?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Meems_Var_Pop_Fields = {
  __typename?: 'Meems_var_pop_fields';
  meemType?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Meems" */
export type Meems_Var_Pop_Order_By = {
  meemType?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Meems_Var_Samp_Fields = {
  __typename?: 'Meems_var_samp_fields';
  meemType?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Meems" */
export type Meems_Var_Samp_Order_By = {
  meemType?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Meems_Variance_Fields = {
  __typename?: 'Meems_variance_fields';
  meemType?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Meems" */
export type Meems_Variance_Order_By = {
  meemType?: InputMaybe<Order_By>;
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
  /** An object relationship */
  Wallet?: Maybe<Wallets>;
  WalletId?: Maybe<Scalars['uuid']>;
  chainId: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  hash: Scalars['String'];
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "Transactions" */
export type Transactions_Aggregate = {
  __typename?: 'Transactions_aggregate';
  aggregate?: Maybe<Transactions_Aggregate_Fields>;
  nodes: Array<Transactions>;
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
  Wallet?: InputMaybe<Wallets_Bool_Exp>;
  WalletId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Transactions_Bool_Exp>>;
  _not?: InputMaybe<Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Transactions_Bool_Exp>>;
  chainId?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
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
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "Transactions" */
export type Transactions_Max_Order_By = {
  WalletId?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "Transactions" */
export type Transactions_Min_Order_By = {
  WalletId?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Transactions". */
export type Transactions_Order_By = {
  Wallet?: InputMaybe<Wallets_Order_By>;
  WalletId?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  /** An object relationship */
  Meem?: Maybe<Meems>;
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

/** order by aggregate values of table "Transfers" */
export type Transfers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transfers_Max_Order_By>;
  min?: InputMaybe<Transfers_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "Transfers". All fields are combined with a logical 'AND'. */
export type Transfers_Bool_Exp = {
  Meem?: InputMaybe<Meems_Bool_Exp>;
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

/** order by max() on columns of table "Transfers" */
export type Transfers_Max_Order_By = {
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

/** order by min() on columns of table "Transfers" */
export type Transfers_Min_Order_By = {
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

/** Ordering options when selecting data from "Transfers". */
export type Transfers_Order_By = {
  Meem?: InputMaybe<Meems_Order_By>;
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
  Bundles: Array<Bundles>;
  /** An aggregate relationship */
  Bundles_aggregate: Bundles_Aggregate;
  /** An array relationship */
  Contracts: Array<Contracts>;
  /** An aggregate relationship */
  Contracts_aggregate: Contracts_Aggregate;
  /** An array relationship */
  MeemContractWallets: Array<MeemContractWallets>;
  /** An aggregate relationship */
  MeemContractWallets_aggregate: MeemContractWallets_Aggregate;
  /** An array relationship */
  MeemContracts: Array<MeemContracts>;
  /** An aggregate relationship */
  MeemContracts_aggregate: MeemContracts_Aggregate;
  /** An array relationship */
  MeemIdentities: Array<MeemIdentities>;
  /** An aggregate relationship */
  MeemIdentities_aggregate: MeemIdentities_Aggregate;
  /** An array relationship */
  Meems: Array<Meems>;
  /** An aggregate relationship */
  Meems_aggregate: Meems_Aggregate;
  /** An array relationship */
  Transactions: Array<Transactions>;
  /** An aggregate relationship */
  Transactions_aggregate: Transactions_Aggregate;
  /** An array relationship */
  WalletContractInstances: Array<WalletContractInstances>;
  /** An aggregate relationship */
  WalletContractInstances_aggregate: WalletContractInstances_Aggregate;
  address: Scalars['String'];
  ens?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
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
export type WalletsMeemContractWalletsArgs = {
  distinct_on?: InputMaybe<Array<MeemContractWallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractWallets_Order_By>>;
  where?: InputMaybe<MeemContractWallets_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsMeemContractWallets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemContractWallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractWallets_Order_By>>;
  where?: InputMaybe<MeemContractWallets_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsMeemContractsArgs = {
  distinct_on?: InputMaybe<Array<MeemContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContracts_Order_By>>;
  where?: InputMaybe<MeemContracts_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsMeemContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContracts_Order_By>>;
  where?: InputMaybe<MeemContracts_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsMeemIdentitiesArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentities_Order_By>>;
  where?: InputMaybe<MeemIdentities_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsMeemIdentities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentities_Order_By>>;
  where?: InputMaybe<MeemIdentities_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsMeemsArgs = {
  distinct_on?: InputMaybe<Array<Meems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meems_Order_By>>;
  where?: InputMaybe<Meems_Bool_Exp>;
};


/** columns and relationships of "Wallets" */
export type WalletsMeems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meems_Order_By>>;
  where?: InputMaybe<Meems_Bool_Exp>;
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

/** Boolean expression to filter rows from the table "Wallets". All fields are combined with a logical 'AND'. */
export type Wallets_Bool_Exp = {
  Bundles?: InputMaybe<Bundles_Bool_Exp>;
  Contracts?: InputMaybe<Contracts_Bool_Exp>;
  MeemContractWallets?: InputMaybe<MeemContractWallets_Bool_Exp>;
  MeemContracts?: InputMaybe<MeemContracts_Bool_Exp>;
  MeemIdentities?: InputMaybe<MeemIdentities_Bool_Exp>;
  Meems?: InputMaybe<Meems_Bool_Exp>;
  Transactions?: InputMaybe<Transactions_Bool_Exp>;
  WalletContractInstances?: InputMaybe<WalletContractInstances_Bool_Exp>;
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

/** aggregate min on columns */
export type Wallets_Min_Fields = {
  __typename?: 'Wallets_min_fields';
  address?: Maybe<Scalars['String']>;
  ens?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** Ordering options when selecting data from "Wallets". */
export type Wallets_Order_By = {
  Bundles_aggregate?: InputMaybe<Bundles_Aggregate_Order_By>;
  Contracts_aggregate?: InputMaybe<Contracts_Aggregate_Order_By>;
  MeemContractWallets_aggregate?: InputMaybe<MeemContractWallets_Aggregate_Order_By>;
  MeemContracts_aggregate?: InputMaybe<MeemContracts_Aggregate_Order_By>;
  MeemIdentities_aggregate?: InputMaybe<MeemIdentities_Aggregate_Order_By>;
  Meems_aggregate?: InputMaybe<Meems_Aggregate_Order_By>;
  Transactions_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
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
  /** fetch data from the table: "IdentityIntegrations" */
  IdentityIntegrations: Array<IdentityIntegrations>;
  /** fetch aggregated fields from the table: "IdentityIntegrations" */
  IdentityIntegrations_aggregate: IdentityIntegrations_Aggregate;
  /** fetch data from the table: "IdentityIntegrations" using primary key columns */
  IdentityIntegrations_by_pk?: Maybe<IdentityIntegrations>;
  /** fetch data from the table: "Integrations" */
  Integrations: Array<Integrations>;
  /** fetch aggregated fields from the table: "Integrations" */
  Integrations_aggregate: Integrations_Aggregate;
  /** fetch data from the table: "Integrations" using primary key columns */
  Integrations_by_pk?: Maybe<Integrations>;
  /** An array relationship */
  MeemContractIntegrations: Array<MeemContractIntegrations>;
  /** An aggregate relationship */
  MeemContractIntegrations_aggregate: MeemContractIntegrations_Aggregate;
  /** fetch data from the table: "MeemContractIntegrations" using primary key columns */
  MeemContractIntegrations_by_pk?: Maybe<MeemContractIntegrations>;
  /** An array relationship */
  MeemContractWallets: Array<MeemContractWallets>;
  /** An aggregate relationship */
  MeemContractWallets_aggregate: MeemContractWallets_Aggregate;
  /** fetch data from the table: "MeemContractWallets" using primary key columns */
  MeemContractWallets_by_pk?: Maybe<MeemContractWallets>;
  /** An array relationship */
  MeemContracts: Array<MeemContracts>;
  /** An aggregate relationship */
  MeemContracts_aggregate: MeemContracts_Aggregate;
  /** fetch data from the table: "MeemContracts" using primary key columns */
  MeemContracts_by_pk?: Maybe<MeemContracts>;
  /** An array relationship */
  MeemIdentities: Array<MeemIdentities>;
  /** An aggregate relationship */
  MeemIdentities_aggregate: MeemIdentities_Aggregate;
  /** fetch data from the table: "MeemIdentities" using primary key columns */
  MeemIdentities_by_pk?: Maybe<MeemIdentities>;
  /** An array relationship */
  MeemIdentityIntegrations: Array<MeemIdentityIntegrations>;
  /** An aggregate relationship */
  MeemIdentityIntegrations_aggregate: MeemIdentityIntegrations_Aggregate;
  /** fetch data from the table: "MeemIdentityIntegrations" using primary key columns */
  MeemIdentityIntegrations_by_pk?: Maybe<MeemIdentityIntegrations>;
  /** An array relationship */
  Meems: Array<Meems>;
  /** An aggregate relationship */
  Meems_aggregate: Meems_Aggregate;
  /** fetch data from the table: "Meems" using primary key columns */
  Meems_by_pk?: Maybe<Meems>;
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
  /** An array relationship */
  Transfers: Array<Transfers>;
  /** An aggregate relationship */
  Transfers_aggregate: Transfers_Aggregate;
  /** fetch data from the table: "Transfers" using primary key columns */
  Transfers_by_pk?: Maybe<Transfers>;
  /** An array relationship */
  WalletContractInstances: Array<WalletContractInstances>;
  /** An aggregate relationship */
  WalletContractInstances_aggregate: WalletContractInstances_Aggregate;
  /** fetch data from the table: "WalletContractInstances" using primary key columns */
  WalletContractInstances_by_pk?: Maybe<WalletContractInstances>;
  /** fetch data from the table: "Wallets" */
  Wallets: Array<Wallets>;
  /** fetch aggregated fields from the table: "Wallets" */
  Wallets_aggregate: Wallets_Aggregate;
  /** fetch data from the table: "Wallets" using primary key columns */
  Wallets_by_pk?: Maybe<Wallets>;
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


export type Query_RootIdentityIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<IdentityIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IdentityIntegrations_Order_By>>;
  where?: InputMaybe<IdentityIntegrations_Bool_Exp>;
};


export type Query_RootIdentityIntegrations_AggregateArgs = {
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


export type Query_RootMeemContractIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<MeemContractIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractIntegrations_Order_By>>;
  where?: InputMaybe<MeemContractIntegrations_Bool_Exp>;
};


export type Query_RootMeemContractIntegrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemContractIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractIntegrations_Order_By>>;
  where?: InputMaybe<MeemContractIntegrations_Bool_Exp>;
};


export type Query_RootMeemContractIntegrations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMeemContractWalletsArgs = {
  distinct_on?: InputMaybe<Array<MeemContractWallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractWallets_Order_By>>;
  where?: InputMaybe<MeemContractWallets_Bool_Exp>;
};


export type Query_RootMeemContractWallets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemContractWallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractWallets_Order_By>>;
  where?: InputMaybe<MeemContractWallets_Bool_Exp>;
};


export type Query_RootMeemContractWallets_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMeemContractsArgs = {
  distinct_on?: InputMaybe<Array<MeemContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContracts_Order_By>>;
  where?: InputMaybe<MeemContracts_Bool_Exp>;
};


export type Query_RootMeemContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContracts_Order_By>>;
  where?: InputMaybe<MeemContracts_Bool_Exp>;
};


export type Query_RootMeemContracts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMeemIdentitiesArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentities_Order_By>>;
  where?: InputMaybe<MeemIdentities_Bool_Exp>;
};


export type Query_RootMeemIdentities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentities_Order_By>>;
  where?: InputMaybe<MeemIdentities_Bool_Exp>;
};


export type Query_RootMeemIdentities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMeemIdentityIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentityIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentityIntegrations_Order_By>>;
  where?: InputMaybe<MeemIdentityIntegrations_Bool_Exp>;
};


export type Query_RootMeemIdentityIntegrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentityIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentityIntegrations_Order_By>>;
  where?: InputMaybe<MeemIdentityIntegrations_Bool_Exp>;
};


export type Query_RootMeemIdentityIntegrations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMeemsArgs = {
  distinct_on?: InputMaybe<Array<Meems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meems_Order_By>>;
  where?: InputMaybe<Meems_Bool_Exp>;
};


export type Query_RootMeems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meems_Order_By>>;
  where?: InputMaybe<Meems_Bool_Exp>;
};


export type Query_RootMeems_By_PkArgs = {
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
  BundleContracts: Array<BundleContracts>;
  /** An aggregate relationship */
  BundleContracts_aggregate: BundleContracts_Aggregate;
  /** fetch data from the table: "BundleContracts" using primary key columns */
  BundleContracts_by_pk?: Maybe<BundleContracts>;
  /** fetch data from the table in a streaming manner : "BundleContracts" */
  BundleContracts_stream: Array<BundleContracts>;
  /** An array relationship */
  Bundles: Array<Bundles>;
  /** An aggregate relationship */
  Bundles_aggregate: Bundles_Aggregate;
  /** fetch data from the table: "Bundles" using primary key columns */
  Bundles_by_pk?: Maybe<Bundles>;
  /** fetch data from the table in a streaming manner : "Bundles" */
  Bundles_stream: Array<Bundles>;
  /** An array relationship */
  ContractInstances: Array<ContractInstances>;
  /** An aggregate relationship */
  ContractInstances_aggregate: ContractInstances_Aggregate;
  /** fetch data from the table: "ContractInstances" using primary key columns */
  ContractInstances_by_pk?: Maybe<ContractInstances>;
  /** fetch data from the table in a streaming manner : "ContractInstances" */
  ContractInstances_stream: Array<ContractInstances>;
  /** An array relationship */
  Contracts: Array<Contracts>;
  /** An aggregate relationship */
  Contracts_aggregate: Contracts_Aggregate;
  /** fetch data from the table: "Contracts" using primary key columns */
  Contracts_by_pk?: Maybe<Contracts>;
  /** fetch data from the table in a streaming manner : "Contracts" */
  Contracts_stream: Array<Contracts>;
  /** fetch data from the table: "IdentityIntegrations" */
  IdentityIntegrations: Array<IdentityIntegrations>;
  /** fetch aggregated fields from the table: "IdentityIntegrations" */
  IdentityIntegrations_aggregate: IdentityIntegrations_Aggregate;
  /** fetch data from the table: "IdentityIntegrations" using primary key columns */
  IdentityIntegrations_by_pk?: Maybe<IdentityIntegrations>;
  /** fetch data from the table in a streaming manner : "IdentityIntegrations" */
  IdentityIntegrations_stream: Array<IdentityIntegrations>;
  /** fetch data from the table: "Integrations" */
  Integrations: Array<Integrations>;
  /** fetch aggregated fields from the table: "Integrations" */
  Integrations_aggregate: Integrations_Aggregate;
  /** fetch data from the table: "Integrations" using primary key columns */
  Integrations_by_pk?: Maybe<Integrations>;
  /** fetch data from the table in a streaming manner : "Integrations" */
  Integrations_stream: Array<Integrations>;
  /** An array relationship */
  MeemContractIntegrations: Array<MeemContractIntegrations>;
  /** An aggregate relationship */
  MeemContractIntegrations_aggregate: MeemContractIntegrations_Aggregate;
  /** fetch data from the table: "MeemContractIntegrations" using primary key columns */
  MeemContractIntegrations_by_pk?: Maybe<MeemContractIntegrations>;
  /** fetch data from the table in a streaming manner : "MeemContractIntegrations" */
  MeemContractIntegrations_stream: Array<MeemContractIntegrations>;
  /** An array relationship */
  MeemContractWallets: Array<MeemContractWallets>;
  /** An aggregate relationship */
  MeemContractWallets_aggregate: MeemContractWallets_Aggregate;
  /** fetch data from the table: "MeemContractWallets" using primary key columns */
  MeemContractWallets_by_pk?: Maybe<MeemContractWallets>;
  /** fetch data from the table in a streaming manner : "MeemContractWallets" */
  MeemContractWallets_stream: Array<MeemContractWallets>;
  /** An array relationship */
  MeemContracts: Array<MeemContracts>;
  /** An aggregate relationship */
  MeemContracts_aggregate: MeemContracts_Aggregate;
  /** fetch data from the table: "MeemContracts" using primary key columns */
  MeemContracts_by_pk?: Maybe<MeemContracts>;
  /** fetch data from the table in a streaming manner : "MeemContracts" */
  MeemContracts_stream: Array<MeemContracts>;
  /** An array relationship */
  MeemIdentities: Array<MeemIdentities>;
  /** An aggregate relationship */
  MeemIdentities_aggregate: MeemIdentities_Aggregate;
  /** fetch data from the table: "MeemIdentities" using primary key columns */
  MeemIdentities_by_pk?: Maybe<MeemIdentities>;
  /** fetch data from the table in a streaming manner : "MeemIdentities" */
  MeemIdentities_stream: Array<MeemIdentities>;
  /** An array relationship */
  MeemIdentityIntegrations: Array<MeemIdentityIntegrations>;
  /** An aggregate relationship */
  MeemIdentityIntegrations_aggregate: MeemIdentityIntegrations_Aggregate;
  /** fetch data from the table: "MeemIdentityIntegrations" using primary key columns */
  MeemIdentityIntegrations_by_pk?: Maybe<MeemIdentityIntegrations>;
  /** fetch data from the table in a streaming manner : "MeemIdentityIntegrations" */
  MeemIdentityIntegrations_stream: Array<MeemIdentityIntegrations>;
  /** An array relationship */
  Meems: Array<Meems>;
  /** An aggregate relationship */
  Meems_aggregate: Meems_Aggregate;
  /** fetch data from the table: "Meems" using primary key columns */
  Meems_by_pk?: Maybe<Meems>;
  /** fetch data from the table in a streaming manner : "Meems" */
  Meems_stream: Array<Meems>;
  /** fetch data from the table: "RolePermissions" */
  RolePermissions: Array<RolePermissions>;
  /** fetch aggregated fields from the table: "RolePermissions" */
  RolePermissions_aggregate: RolePermissions_Aggregate;
  /** fetch data from the table: "RolePermissions" using primary key columns */
  RolePermissions_by_pk?: Maybe<RolePermissions>;
  /** fetch data from the table in a streaming manner : "RolePermissions" */
  RolePermissions_stream: Array<RolePermissions>;
  /** An array relationship */
  Transactions: Array<Transactions>;
  /** An aggregate relationship */
  Transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "Transactions" using primary key columns */
  Transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table in a streaming manner : "Transactions" */
  Transactions_stream: Array<Transactions>;
  /** An array relationship */
  Transfers: Array<Transfers>;
  /** An aggregate relationship */
  Transfers_aggregate: Transfers_Aggregate;
  /** fetch data from the table: "Transfers" using primary key columns */
  Transfers_by_pk?: Maybe<Transfers>;
  /** fetch data from the table in a streaming manner : "Transfers" */
  Transfers_stream: Array<Transfers>;
  /** An array relationship */
  WalletContractInstances: Array<WalletContractInstances>;
  /** An aggregate relationship */
  WalletContractInstances_aggregate: WalletContractInstances_Aggregate;
  /** fetch data from the table: "WalletContractInstances" using primary key columns */
  WalletContractInstances_by_pk?: Maybe<WalletContractInstances>;
  /** fetch data from the table in a streaming manner : "WalletContractInstances" */
  WalletContractInstances_stream: Array<WalletContractInstances>;
  /** fetch data from the table: "Wallets" */
  Wallets: Array<Wallets>;
  /** fetch aggregated fields from the table: "Wallets" */
  Wallets_aggregate: Wallets_Aggregate;
  /** fetch data from the table: "Wallets" using primary key columns */
  Wallets_by_pk?: Maybe<Wallets>;
  /** fetch data from the table in a streaming manner : "Wallets" */
  Wallets_stream: Array<Wallets>;
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


export type Subscription_RootIdentityIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<IdentityIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IdentityIntegrations_Order_By>>;
  where?: InputMaybe<IdentityIntegrations_Bool_Exp>;
};


export type Subscription_RootIdentityIntegrations_AggregateArgs = {
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


export type Subscription_RootMeemContractIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<MeemContractIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractIntegrations_Order_By>>;
  where?: InputMaybe<MeemContractIntegrations_Bool_Exp>;
};


export type Subscription_RootMeemContractIntegrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemContractIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractIntegrations_Order_By>>;
  where?: InputMaybe<MeemContractIntegrations_Bool_Exp>;
};


export type Subscription_RootMeemContractIntegrations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMeemContractIntegrations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<MeemContractIntegrations_Stream_Cursor_Input>>;
  where?: InputMaybe<MeemContractIntegrations_Bool_Exp>;
};


export type Subscription_RootMeemContractWalletsArgs = {
  distinct_on?: InputMaybe<Array<MeemContractWallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractWallets_Order_By>>;
  where?: InputMaybe<MeemContractWallets_Bool_Exp>;
};


export type Subscription_RootMeemContractWallets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemContractWallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractWallets_Order_By>>;
  where?: InputMaybe<MeemContractWallets_Bool_Exp>;
};


export type Subscription_RootMeemContractWallets_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMeemContractWallets_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<MeemContractWallets_Stream_Cursor_Input>>;
  where?: InputMaybe<MeemContractWallets_Bool_Exp>;
};


export type Subscription_RootMeemContractsArgs = {
  distinct_on?: InputMaybe<Array<MeemContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContracts_Order_By>>;
  where?: InputMaybe<MeemContracts_Bool_Exp>;
};


export type Subscription_RootMeemContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContracts_Order_By>>;
  where?: InputMaybe<MeemContracts_Bool_Exp>;
};


export type Subscription_RootMeemContracts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMeemContracts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<MeemContracts_Stream_Cursor_Input>>;
  where?: InputMaybe<MeemContracts_Bool_Exp>;
};


export type Subscription_RootMeemIdentitiesArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentities_Order_By>>;
  where?: InputMaybe<MeemIdentities_Bool_Exp>;
};


export type Subscription_RootMeemIdentities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentities_Order_By>>;
  where?: InputMaybe<MeemIdentities_Bool_Exp>;
};


export type Subscription_RootMeemIdentities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMeemIdentities_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<MeemIdentities_Stream_Cursor_Input>>;
  where?: InputMaybe<MeemIdentities_Bool_Exp>;
};


export type Subscription_RootMeemIdentityIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentityIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentityIntegrations_Order_By>>;
  where?: InputMaybe<MeemIdentityIntegrations_Bool_Exp>;
};


export type Subscription_RootMeemIdentityIntegrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentityIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentityIntegrations_Order_By>>;
  where?: InputMaybe<MeemIdentityIntegrations_Bool_Exp>;
};


export type Subscription_RootMeemIdentityIntegrations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMeemIdentityIntegrations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<MeemIdentityIntegrations_Stream_Cursor_Input>>;
  where?: InputMaybe<MeemIdentityIntegrations_Bool_Exp>;
};


export type Subscription_RootMeemsArgs = {
  distinct_on?: InputMaybe<Array<Meems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meems_Order_By>>;
  where?: InputMaybe<Meems_Bool_Exp>;
};


export type Subscription_RootMeems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meems_Order_By>>;
  where?: InputMaybe<Meems_Bool_Exp>;
};


export type Subscription_RootMeems_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMeems_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Meems_Stream_Cursor_Input>>;
  where?: InputMaybe<Meems_Bool_Exp>;
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