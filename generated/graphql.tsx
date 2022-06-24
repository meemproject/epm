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
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

export type Boolean_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _cast?: InputMaybe<Boolean_Cast_Exp>;
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
  id: Scalars['uuid'];
  order: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
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
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
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
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
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
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Bundles". */
export type Bundles_Order_By = {
  BundleContracts_aggregate?: InputMaybe<BundleContracts_Aggregate_Order_By>;
  Creator?: InputMaybe<Wallets_Order_By>;
  CreatorId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "Bundles" */
export enum Bundles_Select_Column {
  /** column name */
  CreatorId = 'CreatorId',
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

/** columns and relationships of "Clippings" */
export type Clippings = {
  __typename?: 'Clippings';
  /** An object relationship */
  Meem?: Maybe<Meems>;
  MeemId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  MeemIdentification?: Maybe<MeemIdentifications>;
  MeemIdentificationId?: Maybe<Scalars['uuid']>;
  address: Scalars['String'];
  clippedAt: Scalars['timestamptz'];
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** order by aggregate values of table "Clippings" */
export type Clippings_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Clippings_Max_Order_By>;
  min?: InputMaybe<Clippings_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "Clippings". All fields are combined with a logical 'AND'. */
export type Clippings_Bool_Exp = {
  Meem?: InputMaybe<Meems_Bool_Exp>;
  MeemId?: InputMaybe<Uuid_Comparison_Exp>;
  MeemIdentification?: InputMaybe<MeemIdentifications_Bool_Exp>;
  MeemIdentificationId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Clippings_Bool_Exp>>;
  _not?: InputMaybe<Clippings_Bool_Exp>;
  _or?: InputMaybe<Array<Clippings_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  clippedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "Clippings" */
export type Clippings_Max_Order_By = {
  MeemId?: InputMaybe<Order_By>;
  MeemIdentificationId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  clippedAt?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Clippings" */
export type Clippings_Min_Order_By = {
  MeemId?: InputMaybe<Order_By>;
  MeemIdentificationId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  clippedAt?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Clippings". */
export type Clippings_Order_By = {
  Meem?: InputMaybe<Meems_Order_By>;
  MeemId?: InputMaybe<Order_By>;
  MeemIdentification?: InputMaybe<MeemIdentifications_Order_By>;
  MeemIdentificationId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  clippedAt?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "Clippings" */
export enum Clippings_Select_Column {
  /** column name */
  MeemId = 'MeemId',
  /** column name */
  MeemIdentificationId = 'MeemIdentificationId',
  /** column name */
  Address = 'address',
  /** column name */
  ClippedAt = 'clippedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

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

/** order by stddev() on columns of table "Contracts" */
export type Contracts_Stddev_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Contracts" */
export type Contracts_Stddev_Pop_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Contracts" */
export type Contracts_Stddev_Samp_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "Contracts" */
export type Contracts_Sum_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "Contracts" */
export type Contracts_Var_Pop_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Contracts" */
export type Contracts_Var_Samp_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Contracts" */
export type Contracts_Variance_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** columns and relationships of "Hashtags" */
export type Hashtags = {
  __typename?: 'Hashtags';
  /** An array relationship */
  TweetHashtags: Array<TweetHashtags>;
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  tag: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "Hashtags" */
export type HashtagsTweetHashtagsArgs = {
  distinct_on?: InputMaybe<Array<TweetHashtags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TweetHashtags_Order_By>>;
  where?: InputMaybe<TweetHashtags_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "Hashtags". All fields are combined with a logical 'AND'. */
export type Hashtags_Bool_Exp = {
  TweetHashtags?: InputMaybe<TweetHashtags_Bool_Exp>;
  _and?: InputMaybe<Array<Hashtags_Bool_Exp>>;
  _not?: InputMaybe<Hashtags_Bool_Exp>;
  _or?: InputMaybe<Array<Hashtags_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tag?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "Hashtags". */
export type Hashtags_Order_By = {
  TweetHashtags_aggregate?: InputMaybe<TweetHashtags_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "Hashtags" */
export enum Hashtags_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  Tag = 'tag',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Int_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _cast?: InputMaybe<Int_Cast_Exp>;
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

/** order by max() on columns of table "MeemContractIntegrations" */
export type MeemContractIntegrations_Max_Order_By = {
  IntegrationId?: InputMaybe<Order_By>;
  MeemContractId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
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

/** columns and relationships of "MeemContracts" */
export type MeemContracts = {
  __typename?: 'MeemContracts';
  /** An object relationship */
  DefaultChildProperties?: Maybe<MeemProperties>;
  DefaultChildPropertiesId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  DefaultProperties?: Maybe<MeemProperties>;
  DefaultPropertiesId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  MeemContractIntegrations: Array<MeemContractIntegrations>;
  /** An array relationship */
  MeemContractWallets: Array<MeemContractWallets>;
  /** An array relationship */
  Meems: Array<Meems>;
  /** An aggregate relationship */
  Meems_aggregate: Meems_Aggregate;
  address: Scalars['String'];
  contractURI: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  isTransferrable: Scalars['Boolean'];
  isTransferrableLockedBy: Scalars['String'];
  metadata: Scalars['jsonb'];
  mintDatesLockedBy: Scalars['String'];
  mintEndAt?: Maybe<Scalars['timestamp']>;
  mintPermissions: Scalars['jsonb'];
  mintPermissionsLockedBy: Scalars['String'];
  mintStartAt?: Maybe<Scalars['timestamp']>;
  name: Scalars['String'];
  originalsPerWallet: Scalars['String'];
  originalsPerWalletLockedBy: Scalars['String'];
  slug: Scalars['String'];
  splits: Scalars['jsonb'];
  splitsLockedBy: Scalars['String'];
  symbol: Scalars['String'];
  totalOriginalsSupply: Scalars['String'];
  totalOriginalsSupplyLockedBy: Scalars['String'];
  transferLockupUntil?: Maybe<Scalars['timestamp']>;
  transferLockupUntilLockedBy: Scalars['String'];
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
export type MeemContractsMeemContractWalletsArgs = {
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
  count: Scalars['Int'];
  max?: Maybe<MeemContracts_Max_Fields>;
  min?: Maybe<MeemContracts_Min_Fields>;
};


/** aggregate fields of "MeemContracts" */
export type MeemContracts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MeemContracts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "MeemContracts" */
export type MeemContracts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<MeemContracts_Max_Order_By>;
  min?: InputMaybe<MeemContracts_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "MeemContracts". All fields are combined with a logical 'AND'. */
export type MeemContracts_Bool_Exp = {
  DefaultChildProperties?: InputMaybe<MeemProperties_Bool_Exp>;
  DefaultChildPropertiesId?: InputMaybe<Uuid_Comparison_Exp>;
  DefaultProperties?: InputMaybe<MeemProperties_Bool_Exp>;
  DefaultPropertiesId?: InputMaybe<Uuid_Comparison_Exp>;
  MeemContractIntegrations?: InputMaybe<MeemContractIntegrations_Bool_Exp>;
  MeemContractWallets?: InputMaybe<MeemContractWallets_Bool_Exp>;
  Meems?: InputMaybe<Meems_Bool_Exp>;
  _and?: InputMaybe<Array<MeemContracts_Bool_Exp>>;
  _not?: InputMaybe<MeemContracts_Bool_Exp>;
  _or?: InputMaybe<Array<MeemContracts_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  contractURI?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isTransferrable?: InputMaybe<Boolean_Comparison_Exp>;
  isTransferrableLockedBy?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mintDatesLockedBy?: InputMaybe<String_Comparison_Exp>;
  mintEndAt?: InputMaybe<Timestamp_Comparison_Exp>;
  mintPermissions?: InputMaybe<Jsonb_Comparison_Exp>;
  mintPermissionsLockedBy?: InputMaybe<String_Comparison_Exp>;
  mintStartAt?: InputMaybe<Timestamp_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  originalsPerWallet?: InputMaybe<String_Comparison_Exp>;
  originalsPerWalletLockedBy?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  splits?: InputMaybe<Jsonb_Comparison_Exp>;
  splitsLockedBy?: InputMaybe<String_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  totalOriginalsSupply?: InputMaybe<String_Comparison_Exp>;
  totalOriginalsSupplyLockedBy?: InputMaybe<String_Comparison_Exp>;
  transferLockupUntil?: InputMaybe<Timestamp_Comparison_Exp>;
  transferLockupUntilLockedBy?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type MeemContracts_Max_Fields = {
  __typename?: 'MeemContracts_max_fields';
  DefaultChildPropertiesId?: Maybe<Scalars['uuid']>;
  DefaultPropertiesId?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  contractURI?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  isTransferrableLockedBy?: Maybe<Scalars['String']>;
  mintDatesLockedBy?: Maybe<Scalars['String']>;
  mintEndAt?: Maybe<Scalars['timestamp']>;
  mintPermissionsLockedBy?: Maybe<Scalars['String']>;
  mintStartAt?: Maybe<Scalars['timestamp']>;
  name?: Maybe<Scalars['String']>;
  originalsPerWallet?: Maybe<Scalars['String']>;
  originalsPerWalletLockedBy?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  splitsLockedBy?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  totalOriginalsSupply?: Maybe<Scalars['String']>;
  totalOriginalsSupplyLockedBy?: Maybe<Scalars['String']>;
  transferLockupUntil?: Maybe<Scalars['timestamp']>;
  transferLockupUntilLockedBy?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "MeemContracts" */
export type MeemContracts_Max_Order_By = {
  DefaultChildPropertiesId?: InputMaybe<Order_By>;
  DefaultPropertiesId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  contractURI?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isTransferrableLockedBy?: InputMaybe<Order_By>;
  mintDatesLockedBy?: InputMaybe<Order_By>;
  mintEndAt?: InputMaybe<Order_By>;
  mintPermissionsLockedBy?: InputMaybe<Order_By>;
  mintStartAt?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  originalsPerWallet?: InputMaybe<Order_By>;
  originalsPerWalletLockedBy?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  splitsLockedBy?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  totalOriginalsSupply?: InputMaybe<Order_By>;
  totalOriginalsSupplyLockedBy?: InputMaybe<Order_By>;
  transferLockupUntil?: InputMaybe<Order_By>;
  transferLockupUntilLockedBy?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type MeemContracts_Min_Fields = {
  __typename?: 'MeemContracts_min_fields';
  DefaultChildPropertiesId?: Maybe<Scalars['uuid']>;
  DefaultPropertiesId?: Maybe<Scalars['uuid']>;
  address?: Maybe<Scalars['String']>;
  contractURI?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  isTransferrableLockedBy?: Maybe<Scalars['String']>;
  mintDatesLockedBy?: Maybe<Scalars['String']>;
  mintEndAt?: Maybe<Scalars['timestamp']>;
  mintPermissionsLockedBy?: Maybe<Scalars['String']>;
  mintStartAt?: Maybe<Scalars['timestamp']>;
  name?: Maybe<Scalars['String']>;
  originalsPerWallet?: Maybe<Scalars['String']>;
  originalsPerWalletLockedBy?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  splitsLockedBy?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  totalOriginalsSupply?: Maybe<Scalars['String']>;
  totalOriginalsSupplyLockedBy?: Maybe<Scalars['String']>;
  transferLockupUntil?: Maybe<Scalars['timestamp']>;
  transferLockupUntilLockedBy?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "MeemContracts" */
export type MeemContracts_Min_Order_By = {
  DefaultChildPropertiesId?: InputMaybe<Order_By>;
  DefaultPropertiesId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  contractURI?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isTransferrableLockedBy?: InputMaybe<Order_By>;
  mintDatesLockedBy?: InputMaybe<Order_By>;
  mintEndAt?: InputMaybe<Order_By>;
  mintPermissionsLockedBy?: InputMaybe<Order_By>;
  mintStartAt?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  originalsPerWallet?: InputMaybe<Order_By>;
  originalsPerWalletLockedBy?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  splitsLockedBy?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  totalOriginalsSupply?: InputMaybe<Order_By>;
  totalOriginalsSupplyLockedBy?: InputMaybe<Order_By>;
  transferLockupUntil?: InputMaybe<Order_By>;
  transferLockupUntilLockedBy?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "MeemContracts". */
export type MeemContracts_Order_By = {
  DefaultChildProperties?: InputMaybe<MeemProperties_Order_By>;
  DefaultChildPropertiesId?: InputMaybe<Order_By>;
  DefaultProperties?: InputMaybe<MeemProperties_Order_By>;
  DefaultPropertiesId?: InputMaybe<Order_By>;
  MeemContractIntegrations_aggregate?: InputMaybe<MeemContractIntegrations_Aggregate_Order_By>;
  MeemContractWallets_aggregate?: InputMaybe<MeemContractWallets_Aggregate_Order_By>;
  Meems_aggregate?: InputMaybe<Meems_Aggregate_Order_By>;
  address?: InputMaybe<Order_By>;
  contractURI?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isTransferrable?: InputMaybe<Order_By>;
  isTransferrableLockedBy?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  mintDatesLockedBy?: InputMaybe<Order_By>;
  mintEndAt?: InputMaybe<Order_By>;
  mintPermissions?: InputMaybe<Order_By>;
  mintPermissionsLockedBy?: InputMaybe<Order_By>;
  mintStartAt?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  originalsPerWallet?: InputMaybe<Order_By>;
  originalsPerWalletLockedBy?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  splits?: InputMaybe<Order_By>;
  splitsLockedBy?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  totalOriginalsSupply?: InputMaybe<Order_By>;
  totalOriginalsSupplyLockedBy?: InputMaybe<Order_By>;
  transferLockupUntil?: InputMaybe<Order_By>;
  transferLockupUntilLockedBy?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "MeemContracts" */
export enum MeemContracts_Select_Column {
  /** column name */
  DefaultChildPropertiesId = 'DefaultChildPropertiesId',
  /** column name */
  DefaultPropertiesId = 'DefaultPropertiesId',
  /** column name */
  Address = 'address',
  /** column name */
  ContractUri = 'contractURI',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsTransferrable = 'isTransferrable',
  /** column name */
  IsTransferrableLockedBy = 'isTransferrableLockedBy',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MintDatesLockedBy = 'mintDatesLockedBy',
  /** column name */
  MintEndAt = 'mintEndAt',
  /** column name */
  MintPermissions = 'mintPermissions',
  /** column name */
  MintPermissionsLockedBy = 'mintPermissionsLockedBy',
  /** column name */
  MintStartAt = 'mintStartAt',
  /** column name */
  Name = 'name',
  /** column name */
  OriginalsPerWallet = 'originalsPerWallet',
  /** column name */
  OriginalsPerWalletLockedBy = 'originalsPerWalletLockedBy',
  /** column name */
  Slug = 'slug',
  /** column name */
  Splits = 'splits',
  /** column name */
  SplitsLockedBy = 'splitsLockedBy',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  TotalOriginalsSupply = 'totalOriginalsSupply',
  /** column name */
  TotalOriginalsSupplyLockedBy = 'totalOriginalsSupplyLockedBy',
  /** column name */
  TransferLockupUntil = 'transferLockupUntil',
  /** column name */
  TransferLockupUntilLockedBy = 'transferLockupUntilLockedBy',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "MeemIdentifications" */
export type MeemIdentifications = {
  __typename?: 'MeemIdentifications';
  /** An array relationship */
  Clippings: Array<Clippings>;
  /** An array relationship */
  MeemPasses: Array<MeemPasses>;
  /** An array relationship */
  MeemVotes: Array<MeemVotes>;
  /** An array relationship */
  Reactions: Array<Reactions>;
  /** An array relationship */
  Twitters: Array<Twitters>;
  /** An array relationship */
  Wallets: Array<Wallets>;
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  hasOnboarded: Scalars['Boolean'];
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "MeemIdentifications" */
export type MeemIdentificationsClippingsArgs = {
  distinct_on?: InputMaybe<Array<Clippings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Clippings_Order_By>>;
  where?: InputMaybe<Clippings_Bool_Exp>;
};


/** columns and relationships of "MeemIdentifications" */
export type MeemIdentificationsMeemPassesArgs = {
  distinct_on?: InputMaybe<Array<MeemPasses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemPasses_Order_By>>;
  where?: InputMaybe<MeemPasses_Bool_Exp>;
};


/** columns and relationships of "MeemIdentifications" */
export type MeemIdentificationsMeemVotesArgs = {
  distinct_on?: InputMaybe<Array<MeemVotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemVotes_Order_By>>;
  where?: InputMaybe<MeemVotes_Bool_Exp>;
};


/** columns and relationships of "MeemIdentifications" */
export type MeemIdentificationsReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


/** columns and relationships of "MeemIdentifications" */
export type MeemIdentificationsTwittersArgs = {
  distinct_on?: InputMaybe<Array<Twitters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Twitters_Order_By>>;
  where?: InputMaybe<Twitters_Bool_Exp>;
};


/** columns and relationships of "MeemIdentifications" */
export type MeemIdentificationsWalletsArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "MeemIdentifications". All fields are combined with a logical 'AND'. */
export type MeemIdentifications_Bool_Exp = {
  Clippings?: InputMaybe<Clippings_Bool_Exp>;
  MeemPasses?: InputMaybe<MeemPasses_Bool_Exp>;
  MeemVotes?: InputMaybe<MeemVotes_Bool_Exp>;
  Reactions?: InputMaybe<Reactions_Bool_Exp>;
  Twitters?: InputMaybe<Twitters_Bool_Exp>;
  Wallets?: InputMaybe<Wallets_Bool_Exp>;
  _and?: InputMaybe<Array<MeemIdentifications_Bool_Exp>>;
  _not?: InputMaybe<MeemIdentifications_Bool_Exp>;
  _or?: InputMaybe<Array<MeemIdentifications_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  hasOnboarded?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "MeemIdentifications". */
export type MeemIdentifications_Order_By = {
  Clippings_aggregate?: InputMaybe<Clippings_Aggregate_Order_By>;
  MeemPasses_aggregate?: InputMaybe<MeemPasses_Aggregate_Order_By>;
  MeemVotes_aggregate?: InputMaybe<MeemVotes_Aggregate_Order_By>;
  Reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
  Twitters_aggregate?: InputMaybe<Twitters_Aggregate_Order_By>;
  Wallets_aggregate?: InputMaybe<Wallets_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  hasOnboarded?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "MeemIdentifications" */
export enum MeemIdentifications_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  HasOnboarded = 'hasOnboarded',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "MeemPasses" */
export type MeemPasses = {
  __typename?: 'MeemPasses';
  /** An object relationship */
  MeemIdentification?: Maybe<MeemIdentifications>;
  MeemIdentificationId?: Maybe<Scalars['uuid']>;
  canCreateProjects: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  hasApplied: Scalars['Boolean'];
  id: Scalars['uuid'];
  isAdmin: Scalars['Boolean'];
  tweetsPerDayQuota: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** order by aggregate values of table "MeemPasses" */
export type MeemPasses_Aggregate_Order_By = {
  avg?: InputMaybe<MeemPasses_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<MeemPasses_Max_Order_By>;
  min?: InputMaybe<MeemPasses_Min_Order_By>;
  stddev?: InputMaybe<MeemPasses_Stddev_Order_By>;
  stddev_pop?: InputMaybe<MeemPasses_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<MeemPasses_Stddev_Samp_Order_By>;
  sum?: InputMaybe<MeemPasses_Sum_Order_By>;
  var_pop?: InputMaybe<MeemPasses_Var_Pop_Order_By>;
  var_samp?: InputMaybe<MeemPasses_Var_Samp_Order_By>;
  variance?: InputMaybe<MeemPasses_Variance_Order_By>;
};

/** order by avg() on columns of table "MeemPasses" */
export type MeemPasses_Avg_Order_By = {
  tweetsPerDayQuota?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "MeemPasses". All fields are combined with a logical 'AND'. */
export type MeemPasses_Bool_Exp = {
  MeemIdentification?: InputMaybe<MeemIdentifications_Bool_Exp>;
  MeemIdentificationId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<MeemPasses_Bool_Exp>>;
  _not?: InputMaybe<MeemPasses_Bool_Exp>;
  _or?: InputMaybe<Array<MeemPasses_Bool_Exp>>;
  canCreateProjects?: InputMaybe<Boolean_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  hasApplied?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAdmin?: InputMaybe<Boolean_Comparison_Exp>;
  tweetsPerDayQuota?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "MeemPasses" */
export type MeemPasses_Max_Order_By = {
  MeemIdentificationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tweetsPerDayQuota?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "MeemPasses" */
export type MeemPasses_Min_Order_By = {
  MeemIdentificationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tweetsPerDayQuota?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "MeemPasses". */
export type MeemPasses_Order_By = {
  MeemIdentification?: InputMaybe<MeemIdentifications_Order_By>;
  MeemIdentificationId?: InputMaybe<Order_By>;
  canCreateProjects?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  hasApplied?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAdmin?: InputMaybe<Order_By>;
  tweetsPerDayQuota?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "MeemPasses" */
export enum MeemPasses_Select_Column {
  /** column name */
  MeemIdentificationId = 'MeemIdentificationId',
  /** column name */
  CanCreateProjects = 'canCreateProjects',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  HasApplied = 'hasApplied',
  /** column name */
  Id = 'id',
  /** column name */
  IsAdmin = 'isAdmin',
  /** column name */
  TweetsPerDayQuota = 'tweetsPerDayQuota',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** order by stddev() on columns of table "MeemPasses" */
export type MeemPasses_Stddev_Order_By = {
  tweetsPerDayQuota?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "MeemPasses" */
export type MeemPasses_Stddev_Pop_Order_By = {
  tweetsPerDayQuota?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "MeemPasses" */
export type MeemPasses_Stddev_Samp_Order_By = {
  tweetsPerDayQuota?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "MeemPasses" */
export type MeemPasses_Sum_Order_By = {
  tweetsPerDayQuota?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "MeemPasses" */
export type MeemPasses_Var_Pop_Order_By = {
  tweetsPerDayQuota?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "MeemPasses" */
export type MeemPasses_Var_Samp_Order_By = {
  tweetsPerDayQuota?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "MeemPasses" */
export type MeemPasses_Variance_Order_By = {
  tweetsPerDayQuota?: InputMaybe<Order_By>;
};

/** columns and relationships of "MeemProperties" */
export type MeemProperties = {
  __typename?: 'MeemProperties';
  /** An array relationship */
  MeemContracts: Array<MeemContracts>;
  /** An aggregate relationship */
  MeemContracts_aggregate: MeemContracts_Aggregate;
  /** An array relationship */
  Meems: Array<Meems>;
  /** An aggregate relationship */
  Meems_aggregate: Meems_Aggregate;
  copiesPerWallet: Scalars['String'];
  copiesPerWalletLockedBy: Scalars['String'];
  copyPermissions: Scalars['jsonb'];
  copyPermissionsLockedBy: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  isTransferrable: Scalars['Boolean'];
  isTransferrableLockedBy: Scalars['String'];
  /** An array relationship */
  meemContractsByDefaultpropertiesid: Array<MeemContracts>;
  /** An aggregate relationship */
  meemContractsByDefaultpropertiesid_aggregate: MeemContracts_Aggregate;
  /** An array relationship */
  meemsByPropertiesid: Array<Meems>;
  /** An aggregate relationship */
  meemsByPropertiesid_aggregate: Meems_Aggregate;
  mintDatesLockedBy: Scalars['String'];
  mintEndAt?: Maybe<Scalars['timestamp']>;
  mintStartAt?: Maybe<Scalars['timestamp']>;
  readPermissions: Scalars['jsonb'];
  readPermissionsLockedBy: Scalars['String'];
  remixPermissions: Scalars['jsonb'];
  remixPermissionsLockedBy: Scalars['String'];
  remixesPerWallet: Scalars['String'];
  remixesPerWalletLockedBy: Scalars['String'];
  splits: Scalars['jsonb'];
  splitsLockedBy: Scalars['String'];
  totalCopies: Scalars['String'];
  totalCopiesLockedBy: Scalars['String'];
  totalRemixes: Scalars['String'];
  totalRemixesLockedBy: Scalars['String'];
  transferLockupUntil?: Maybe<Scalars['timestamp']>;
  transferLockupUntilLockedBy: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "MeemProperties" */
export type MeemPropertiesMeemContractsArgs = {
  distinct_on?: InputMaybe<Array<MeemContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContracts_Order_By>>;
  where?: InputMaybe<MeemContracts_Bool_Exp>;
};


/** columns and relationships of "MeemProperties" */
export type MeemPropertiesMeemContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContracts_Order_By>>;
  where?: InputMaybe<MeemContracts_Bool_Exp>;
};


/** columns and relationships of "MeemProperties" */
export type MeemPropertiesMeemsArgs = {
  distinct_on?: InputMaybe<Array<Meems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meems_Order_By>>;
  where?: InputMaybe<Meems_Bool_Exp>;
};


/** columns and relationships of "MeemProperties" */
export type MeemPropertiesMeems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meems_Order_By>>;
  where?: InputMaybe<Meems_Bool_Exp>;
};


/** columns and relationships of "MeemProperties" */
export type MeemPropertiesCopyPermissionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "MeemProperties" */
export type MeemPropertiesMeemContractsByDefaultpropertiesidArgs = {
  distinct_on?: InputMaybe<Array<MeemContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContracts_Order_By>>;
  where?: InputMaybe<MeemContracts_Bool_Exp>;
};


/** columns and relationships of "MeemProperties" */
export type MeemPropertiesMeemContractsByDefaultpropertiesid_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MeemContracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContracts_Order_By>>;
  where?: InputMaybe<MeemContracts_Bool_Exp>;
};


/** columns and relationships of "MeemProperties" */
export type MeemPropertiesMeemsByPropertiesidArgs = {
  distinct_on?: InputMaybe<Array<Meems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meems_Order_By>>;
  where?: InputMaybe<Meems_Bool_Exp>;
};


/** columns and relationships of "MeemProperties" */
export type MeemPropertiesMeemsByPropertiesid_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meems_Order_By>>;
  where?: InputMaybe<Meems_Bool_Exp>;
};


/** columns and relationships of "MeemProperties" */
export type MeemPropertiesReadPermissionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "MeemProperties" */
export type MeemPropertiesRemixPermissionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "MeemProperties" */
export type MeemPropertiesSplitsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "MeemProperties". All fields are combined with a logical 'AND'. */
export type MeemProperties_Bool_Exp = {
  MeemContracts?: InputMaybe<MeemContracts_Bool_Exp>;
  Meems?: InputMaybe<Meems_Bool_Exp>;
  _and?: InputMaybe<Array<MeemProperties_Bool_Exp>>;
  _not?: InputMaybe<MeemProperties_Bool_Exp>;
  _or?: InputMaybe<Array<MeemProperties_Bool_Exp>>;
  copiesPerWallet?: InputMaybe<String_Comparison_Exp>;
  copiesPerWalletLockedBy?: InputMaybe<String_Comparison_Exp>;
  copyPermissions?: InputMaybe<Jsonb_Comparison_Exp>;
  copyPermissionsLockedBy?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isTransferrable?: InputMaybe<Boolean_Comparison_Exp>;
  isTransferrableLockedBy?: InputMaybe<String_Comparison_Exp>;
  meemContractsByDefaultpropertiesid?: InputMaybe<MeemContracts_Bool_Exp>;
  meemsByPropertiesid?: InputMaybe<Meems_Bool_Exp>;
  mintDatesLockedBy?: InputMaybe<String_Comparison_Exp>;
  mintEndAt?: InputMaybe<Timestamp_Comparison_Exp>;
  mintStartAt?: InputMaybe<Timestamp_Comparison_Exp>;
  readPermissions?: InputMaybe<Jsonb_Comparison_Exp>;
  readPermissionsLockedBy?: InputMaybe<String_Comparison_Exp>;
  remixPermissions?: InputMaybe<Jsonb_Comparison_Exp>;
  remixPermissionsLockedBy?: InputMaybe<String_Comparison_Exp>;
  remixesPerWallet?: InputMaybe<String_Comparison_Exp>;
  remixesPerWalletLockedBy?: InputMaybe<String_Comparison_Exp>;
  splits?: InputMaybe<Jsonb_Comparison_Exp>;
  splitsLockedBy?: InputMaybe<String_Comparison_Exp>;
  totalCopies?: InputMaybe<String_Comparison_Exp>;
  totalCopiesLockedBy?: InputMaybe<String_Comparison_Exp>;
  totalRemixes?: InputMaybe<String_Comparison_Exp>;
  totalRemixesLockedBy?: InputMaybe<String_Comparison_Exp>;
  transferLockupUntil?: InputMaybe<Timestamp_Comparison_Exp>;
  transferLockupUntilLockedBy?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "MeemProperties". */
export type MeemProperties_Order_By = {
  MeemContracts_aggregate?: InputMaybe<MeemContracts_Aggregate_Order_By>;
  Meems_aggregate?: InputMaybe<Meems_Aggregate_Order_By>;
  copiesPerWallet?: InputMaybe<Order_By>;
  copiesPerWalletLockedBy?: InputMaybe<Order_By>;
  copyPermissions?: InputMaybe<Order_By>;
  copyPermissionsLockedBy?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isTransferrable?: InputMaybe<Order_By>;
  isTransferrableLockedBy?: InputMaybe<Order_By>;
  meemContractsByDefaultpropertiesid_aggregate?: InputMaybe<MeemContracts_Aggregate_Order_By>;
  meemsByPropertiesid_aggregate?: InputMaybe<Meems_Aggregate_Order_By>;
  mintDatesLockedBy?: InputMaybe<Order_By>;
  mintEndAt?: InputMaybe<Order_By>;
  mintStartAt?: InputMaybe<Order_By>;
  readPermissions?: InputMaybe<Order_By>;
  readPermissionsLockedBy?: InputMaybe<Order_By>;
  remixPermissions?: InputMaybe<Order_By>;
  remixPermissionsLockedBy?: InputMaybe<Order_By>;
  remixesPerWallet?: InputMaybe<Order_By>;
  remixesPerWalletLockedBy?: InputMaybe<Order_By>;
  splits?: InputMaybe<Order_By>;
  splitsLockedBy?: InputMaybe<Order_By>;
  totalCopies?: InputMaybe<Order_By>;
  totalCopiesLockedBy?: InputMaybe<Order_By>;
  totalRemixes?: InputMaybe<Order_By>;
  totalRemixesLockedBy?: InputMaybe<Order_By>;
  transferLockupUntil?: InputMaybe<Order_By>;
  transferLockupUntilLockedBy?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "MeemProperties" */
export enum MeemProperties_Select_Column {
  /** column name */
  CopiesPerWallet = 'copiesPerWallet',
  /** column name */
  CopiesPerWalletLockedBy = 'copiesPerWalletLockedBy',
  /** column name */
  CopyPermissions = 'copyPermissions',
  /** column name */
  CopyPermissionsLockedBy = 'copyPermissionsLockedBy',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsTransferrable = 'isTransferrable',
  /** column name */
  IsTransferrableLockedBy = 'isTransferrableLockedBy',
  /** column name */
  MintDatesLockedBy = 'mintDatesLockedBy',
  /** column name */
  MintEndAt = 'mintEndAt',
  /** column name */
  MintStartAt = 'mintStartAt',
  /** column name */
  ReadPermissions = 'readPermissions',
  /** column name */
  ReadPermissionsLockedBy = 'readPermissionsLockedBy',
  /** column name */
  RemixPermissions = 'remixPermissions',
  /** column name */
  RemixPermissionsLockedBy = 'remixPermissionsLockedBy',
  /** column name */
  RemixesPerWallet = 'remixesPerWallet',
  /** column name */
  RemixesPerWalletLockedBy = 'remixesPerWalletLockedBy',
  /** column name */
  Splits = 'splits',
  /** column name */
  SplitsLockedBy = 'splitsLockedBy',
  /** column name */
  TotalCopies = 'totalCopies',
  /** column name */
  TotalCopiesLockedBy = 'totalCopiesLockedBy',
  /** column name */
  TotalRemixes = 'totalRemixes',
  /** column name */
  TotalRemixesLockedBy = 'totalRemixesLockedBy',
  /** column name */
  TransferLockupUntil = 'transferLockupUntil',
  /** column name */
  TransferLockupUntilLockedBy = 'transferLockupUntilLockedBy',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "MeemVotes" */
export type MeemVotes = {
  __typename?: 'MeemVotes';
  /** An object relationship */
  Meem?: Maybe<Meems>;
  MeemId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  MeemIdentification?: Maybe<MeemIdentifications>;
  MeemIdentificationId?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  voteType: Scalars['Int'];
};

/** order by aggregate values of table "MeemVotes" */
export type MeemVotes_Aggregate_Order_By = {
  avg?: InputMaybe<MeemVotes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<MeemVotes_Max_Order_By>;
  min?: InputMaybe<MeemVotes_Min_Order_By>;
  stddev?: InputMaybe<MeemVotes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<MeemVotes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<MeemVotes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<MeemVotes_Sum_Order_By>;
  var_pop?: InputMaybe<MeemVotes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<MeemVotes_Var_Samp_Order_By>;
  variance?: InputMaybe<MeemVotes_Variance_Order_By>;
};

/** order by avg() on columns of table "MeemVotes" */
export type MeemVotes_Avg_Order_By = {
  voteType?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "MeemVotes". All fields are combined with a logical 'AND'. */
export type MeemVotes_Bool_Exp = {
  Meem?: InputMaybe<Meems_Bool_Exp>;
  MeemId?: InputMaybe<Uuid_Comparison_Exp>;
  MeemIdentification?: InputMaybe<MeemIdentifications_Bool_Exp>;
  MeemIdentificationId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<MeemVotes_Bool_Exp>>;
  _not?: InputMaybe<MeemVotes_Bool_Exp>;
  _or?: InputMaybe<Array<MeemVotes_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  voteType?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "MeemVotes" */
export type MeemVotes_Max_Order_By = {
  MeemId?: InputMaybe<Order_By>;
  MeemIdentificationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  voteType?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "MeemVotes" */
export type MeemVotes_Min_Order_By = {
  MeemId?: InputMaybe<Order_By>;
  MeemIdentificationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  voteType?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "MeemVotes". */
export type MeemVotes_Order_By = {
  Meem?: InputMaybe<Meems_Order_By>;
  MeemId?: InputMaybe<Order_By>;
  MeemIdentification?: InputMaybe<MeemIdentifications_Order_By>;
  MeemIdentificationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  voteType?: InputMaybe<Order_By>;
};

/** select columns of table "MeemVotes" */
export enum MeemVotes_Select_Column {
  /** column name */
  MeemId = 'MeemId',
  /** column name */
  MeemIdentificationId = 'MeemIdentificationId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VoteType = 'voteType'
}

/** order by stddev() on columns of table "MeemVotes" */
export type MeemVotes_Stddev_Order_By = {
  voteType?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "MeemVotes" */
export type MeemVotes_Stddev_Pop_Order_By = {
  voteType?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "MeemVotes" */
export type MeemVotes_Stddev_Samp_Order_By = {
  voteType?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "MeemVotes" */
export type MeemVotes_Sum_Order_By = {
  voteType?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "MeemVotes" */
export type MeemVotes_Var_Pop_Order_By = {
  voteType?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "MeemVotes" */
export type MeemVotes_Var_Samp_Order_By = {
  voteType?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "MeemVotes" */
export type MeemVotes_Variance_Order_By = {
  voteType?: InputMaybe<Order_By>;
};

/** columns and relationships of "Meems" */
export type Meems = {
  __typename?: 'Meems';
  ChildPropertiesId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  Clippings: Array<Clippings>;
  /** An object relationship */
  MeemContract?: Maybe<MeemContracts>;
  MeemContractId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  MeemProperty?: Maybe<MeemProperties>;
  /** An array relationship */
  MeemVotes: Array<MeemVotes>;
  PropertiesId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  Reactions: Array<Reactions>;
  /** An array relationship */
  Transfers: Array<Transfers>;
  /** An array relationship */
  Tweets: Array<Tweets>;
  createdAt: Scalars['timestamptz'];
  data: Scalars['String'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  generation: Scalars['Int'];
  id: Scalars['uuid'];
  meemId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  meemPropertyByPropertiesid?: Maybe<MeemProperties>;
  meemType: Scalars['Int'];
  metadata: Scalars['jsonb'];
  mintedAt: Scalars['timestamptz'];
  mintedBy: Scalars['String'];
  numCopies: Scalars['Int'];
  numRemixes: Scalars['Int'];
  owner: Scalars['String'];
  parent: Scalars['String'];
  parentChain: Scalars['Int'];
  parentTokenId: Scalars['String'];
  reactionCounts: Scalars['jsonb'];
  reactionTypes: Scalars['jsonb'];
  root: Scalars['String'];
  rootChain: Scalars['Int'];
  rootTokenId: Scalars['String'];
  tokenId: Scalars['String'];
  tokenURI: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  uriLockedBy: Scalars['String'];
  uriSource: Scalars['Int'];
};


/** columns and relationships of "Meems" */
export type MeemsClippingsArgs = {
  distinct_on?: InputMaybe<Array<Clippings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Clippings_Order_By>>;
  where?: InputMaybe<Clippings_Bool_Exp>;
};


/** columns and relationships of "Meems" */
export type MeemsMeemVotesArgs = {
  distinct_on?: InputMaybe<Array<MeemVotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemVotes_Order_By>>;
  where?: InputMaybe<MeemVotes_Bool_Exp>;
};


/** columns and relationships of "Meems" */
export type MeemsReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
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
export type MeemsTweetsArgs = {
  distinct_on?: InputMaybe<Array<Tweets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tweets_Order_By>>;
  where?: InputMaybe<Tweets_Bool_Exp>;
};


/** columns and relationships of "Meems" */
export type MeemsMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "Meems" */
export type MeemsReactionCountsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "Meems" */
export type MeemsReactionTypesArgs = {
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
  generation?: Maybe<Scalars['Float']>;
  meemType?: Maybe<Scalars['Float']>;
  numCopies?: Maybe<Scalars['Float']>;
  numRemixes?: Maybe<Scalars['Float']>;
  parentChain?: Maybe<Scalars['Float']>;
  rootChain?: Maybe<Scalars['Float']>;
  uriSource?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Meems" */
export type Meems_Avg_Order_By = {
  generation?: InputMaybe<Order_By>;
  meemType?: InputMaybe<Order_By>;
  numCopies?: InputMaybe<Order_By>;
  numRemixes?: InputMaybe<Order_By>;
  parentChain?: InputMaybe<Order_By>;
  rootChain?: InputMaybe<Order_By>;
  uriSource?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Meems". All fields are combined with a logical 'AND'. */
export type Meems_Bool_Exp = {
  ChildPropertiesId?: InputMaybe<Uuid_Comparison_Exp>;
  Clippings?: InputMaybe<Clippings_Bool_Exp>;
  MeemContract?: InputMaybe<MeemContracts_Bool_Exp>;
  MeemContractId?: InputMaybe<Uuid_Comparison_Exp>;
  MeemProperty?: InputMaybe<MeemProperties_Bool_Exp>;
  MeemVotes?: InputMaybe<MeemVotes_Bool_Exp>;
  PropertiesId?: InputMaybe<Uuid_Comparison_Exp>;
  Reactions?: InputMaybe<Reactions_Bool_Exp>;
  Transfers?: InputMaybe<Transfers_Bool_Exp>;
  Tweets?: InputMaybe<Tweets_Bool_Exp>;
  _and?: InputMaybe<Array<Meems_Bool_Exp>>;
  _not?: InputMaybe<Meems_Bool_Exp>;
  _or?: InputMaybe<Array<Meems_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<String_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  generation?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  meemId?: InputMaybe<Uuid_Comparison_Exp>;
  meemPropertyByPropertiesid?: InputMaybe<MeemProperties_Bool_Exp>;
  meemType?: InputMaybe<Int_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mintedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  mintedBy?: InputMaybe<String_Comparison_Exp>;
  numCopies?: InputMaybe<Int_Comparison_Exp>;
  numRemixes?: InputMaybe<Int_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  parent?: InputMaybe<String_Comparison_Exp>;
  parentChain?: InputMaybe<Int_Comparison_Exp>;
  parentTokenId?: InputMaybe<String_Comparison_Exp>;
  reactionCounts?: InputMaybe<Jsonb_Comparison_Exp>;
  reactionTypes?: InputMaybe<Jsonb_Comparison_Exp>;
  root?: InputMaybe<String_Comparison_Exp>;
  rootChain?: InputMaybe<Int_Comparison_Exp>;
  rootTokenId?: InputMaybe<String_Comparison_Exp>;
  tokenId?: InputMaybe<String_Comparison_Exp>;
  tokenURI?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uriLockedBy?: InputMaybe<String_Comparison_Exp>;
  uriSource?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Meems_Max_Fields = {
  __typename?: 'Meems_max_fields';
  ChildPropertiesId?: Maybe<Scalars['uuid']>;
  MeemContractId?: Maybe<Scalars['uuid']>;
  PropertiesId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  generation?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  meemId?: Maybe<Scalars['uuid']>;
  meemType?: Maybe<Scalars['Int']>;
  mintedAt?: Maybe<Scalars['timestamptz']>;
  mintedBy?: Maybe<Scalars['String']>;
  numCopies?: Maybe<Scalars['Int']>;
  numRemixes?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  parentChain?: Maybe<Scalars['Int']>;
  parentTokenId?: Maybe<Scalars['String']>;
  root?: Maybe<Scalars['String']>;
  rootChain?: Maybe<Scalars['Int']>;
  rootTokenId?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenURI?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uriLockedBy?: Maybe<Scalars['String']>;
  uriSource?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Meems" */
export type Meems_Max_Order_By = {
  ChildPropertiesId?: InputMaybe<Order_By>;
  MeemContractId?: InputMaybe<Order_By>;
  PropertiesId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  generation?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meemId?: InputMaybe<Order_By>;
  meemType?: InputMaybe<Order_By>;
  mintedAt?: InputMaybe<Order_By>;
  mintedBy?: InputMaybe<Order_By>;
  numCopies?: InputMaybe<Order_By>;
  numRemixes?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
  parentChain?: InputMaybe<Order_By>;
  parentTokenId?: InputMaybe<Order_By>;
  root?: InputMaybe<Order_By>;
  rootChain?: InputMaybe<Order_By>;
  rootTokenId?: InputMaybe<Order_By>;
  tokenId?: InputMaybe<Order_By>;
  tokenURI?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uriLockedBy?: InputMaybe<Order_By>;
  uriSource?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Meems_Min_Fields = {
  __typename?: 'Meems_min_fields';
  ChildPropertiesId?: Maybe<Scalars['uuid']>;
  MeemContractId?: Maybe<Scalars['uuid']>;
  PropertiesId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['timestamptz']>;
  generation?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  meemId?: Maybe<Scalars['uuid']>;
  meemType?: Maybe<Scalars['Int']>;
  mintedAt?: Maybe<Scalars['timestamptz']>;
  mintedBy?: Maybe<Scalars['String']>;
  numCopies?: Maybe<Scalars['Int']>;
  numRemixes?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  parentChain?: Maybe<Scalars['Int']>;
  parentTokenId?: Maybe<Scalars['String']>;
  root?: Maybe<Scalars['String']>;
  rootChain?: Maybe<Scalars['Int']>;
  rootTokenId?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  tokenURI?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uriLockedBy?: Maybe<Scalars['String']>;
  uriSource?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Meems" */
export type Meems_Min_Order_By = {
  ChildPropertiesId?: InputMaybe<Order_By>;
  MeemContractId?: InputMaybe<Order_By>;
  PropertiesId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  generation?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meemId?: InputMaybe<Order_By>;
  meemType?: InputMaybe<Order_By>;
  mintedAt?: InputMaybe<Order_By>;
  mintedBy?: InputMaybe<Order_By>;
  numCopies?: InputMaybe<Order_By>;
  numRemixes?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
  parentChain?: InputMaybe<Order_By>;
  parentTokenId?: InputMaybe<Order_By>;
  root?: InputMaybe<Order_By>;
  rootChain?: InputMaybe<Order_By>;
  rootTokenId?: InputMaybe<Order_By>;
  tokenId?: InputMaybe<Order_By>;
  tokenURI?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uriLockedBy?: InputMaybe<Order_By>;
  uriSource?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Meems". */
export type Meems_Order_By = {
  ChildPropertiesId?: InputMaybe<Order_By>;
  Clippings_aggregate?: InputMaybe<Clippings_Aggregate_Order_By>;
  MeemContract?: InputMaybe<MeemContracts_Order_By>;
  MeemContractId?: InputMaybe<Order_By>;
  MeemProperty?: InputMaybe<MeemProperties_Order_By>;
  MeemVotes_aggregate?: InputMaybe<MeemVotes_Aggregate_Order_By>;
  PropertiesId?: InputMaybe<Order_By>;
  Reactions_aggregate?: InputMaybe<Reactions_Aggregate_Order_By>;
  Transfers_aggregate?: InputMaybe<Transfers_Aggregate_Order_By>;
  Tweets_aggregate?: InputMaybe<Tweets_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  generation?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meemId?: InputMaybe<Order_By>;
  meemPropertyByPropertiesid?: InputMaybe<MeemProperties_Order_By>;
  meemType?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  mintedAt?: InputMaybe<Order_By>;
  mintedBy?: InputMaybe<Order_By>;
  numCopies?: InputMaybe<Order_By>;
  numRemixes?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
  parentChain?: InputMaybe<Order_By>;
  parentTokenId?: InputMaybe<Order_By>;
  reactionCounts?: InputMaybe<Order_By>;
  reactionTypes?: InputMaybe<Order_By>;
  root?: InputMaybe<Order_By>;
  rootChain?: InputMaybe<Order_By>;
  rootTokenId?: InputMaybe<Order_By>;
  tokenId?: InputMaybe<Order_By>;
  tokenURI?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uriLockedBy?: InputMaybe<Order_By>;
  uriSource?: InputMaybe<Order_By>;
};

/** select columns of table "Meems" */
export enum Meems_Select_Column {
  /** column name */
  ChildPropertiesId = 'ChildPropertiesId',
  /** column name */
  MeemContractId = 'MeemContractId',
  /** column name */
  PropertiesId = 'PropertiesId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Data = 'data',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Generation = 'generation',
  /** column name */
  Id = 'id',
  /** column name */
  MeemId = 'meemId',
  /** column name */
  MeemType = 'meemType',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MintedAt = 'mintedAt',
  /** column name */
  MintedBy = 'mintedBy',
  /** column name */
  NumCopies = 'numCopies',
  /** column name */
  NumRemixes = 'numRemixes',
  /** column name */
  Owner = 'owner',
  /** column name */
  Parent = 'parent',
  /** column name */
  ParentChain = 'parentChain',
  /** column name */
  ParentTokenId = 'parentTokenId',
  /** column name */
  ReactionCounts = 'reactionCounts',
  /** column name */
  ReactionTypes = 'reactionTypes',
  /** column name */
  Root = 'root',
  /** column name */
  RootChain = 'rootChain',
  /** column name */
  RootTokenId = 'rootTokenId',
  /** column name */
  TokenId = 'tokenId',
  /** column name */
  TokenUri = 'tokenURI',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UriLockedBy = 'uriLockedBy',
  /** column name */
  UriSource = 'uriSource'
}

/** aggregate stddev on columns */
export type Meems_Stddev_Fields = {
  __typename?: 'Meems_stddev_fields';
  generation?: Maybe<Scalars['Float']>;
  meemType?: Maybe<Scalars['Float']>;
  numCopies?: Maybe<Scalars['Float']>;
  numRemixes?: Maybe<Scalars['Float']>;
  parentChain?: Maybe<Scalars['Float']>;
  rootChain?: Maybe<Scalars['Float']>;
  uriSource?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Meems" */
export type Meems_Stddev_Order_By = {
  generation?: InputMaybe<Order_By>;
  meemType?: InputMaybe<Order_By>;
  numCopies?: InputMaybe<Order_By>;
  numRemixes?: InputMaybe<Order_By>;
  parentChain?: InputMaybe<Order_By>;
  rootChain?: InputMaybe<Order_By>;
  uriSource?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Meems_Stddev_Pop_Fields = {
  __typename?: 'Meems_stddev_pop_fields';
  generation?: Maybe<Scalars['Float']>;
  meemType?: Maybe<Scalars['Float']>;
  numCopies?: Maybe<Scalars['Float']>;
  numRemixes?: Maybe<Scalars['Float']>;
  parentChain?: Maybe<Scalars['Float']>;
  rootChain?: Maybe<Scalars['Float']>;
  uriSource?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Meems" */
export type Meems_Stddev_Pop_Order_By = {
  generation?: InputMaybe<Order_By>;
  meemType?: InputMaybe<Order_By>;
  numCopies?: InputMaybe<Order_By>;
  numRemixes?: InputMaybe<Order_By>;
  parentChain?: InputMaybe<Order_By>;
  rootChain?: InputMaybe<Order_By>;
  uriSource?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Meems_Stddev_Samp_Fields = {
  __typename?: 'Meems_stddev_samp_fields';
  generation?: Maybe<Scalars['Float']>;
  meemType?: Maybe<Scalars['Float']>;
  numCopies?: Maybe<Scalars['Float']>;
  numRemixes?: Maybe<Scalars['Float']>;
  parentChain?: Maybe<Scalars['Float']>;
  rootChain?: Maybe<Scalars['Float']>;
  uriSource?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Meems" */
export type Meems_Stddev_Samp_Order_By = {
  generation?: InputMaybe<Order_By>;
  meemType?: InputMaybe<Order_By>;
  numCopies?: InputMaybe<Order_By>;
  numRemixes?: InputMaybe<Order_By>;
  parentChain?: InputMaybe<Order_By>;
  rootChain?: InputMaybe<Order_By>;
  uriSource?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Meems_Sum_Fields = {
  __typename?: 'Meems_sum_fields';
  generation?: Maybe<Scalars['Int']>;
  meemType?: Maybe<Scalars['Int']>;
  numCopies?: Maybe<Scalars['Int']>;
  numRemixes?: Maybe<Scalars['Int']>;
  parentChain?: Maybe<Scalars['Int']>;
  rootChain?: Maybe<Scalars['Int']>;
  uriSource?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Meems" */
export type Meems_Sum_Order_By = {
  generation?: InputMaybe<Order_By>;
  meemType?: InputMaybe<Order_By>;
  numCopies?: InputMaybe<Order_By>;
  numRemixes?: InputMaybe<Order_By>;
  parentChain?: InputMaybe<Order_By>;
  rootChain?: InputMaybe<Order_By>;
  uriSource?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Meems_Var_Pop_Fields = {
  __typename?: 'Meems_var_pop_fields';
  generation?: Maybe<Scalars['Float']>;
  meemType?: Maybe<Scalars['Float']>;
  numCopies?: Maybe<Scalars['Float']>;
  numRemixes?: Maybe<Scalars['Float']>;
  parentChain?: Maybe<Scalars['Float']>;
  rootChain?: Maybe<Scalars['Float']>;
  uriSource?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Meems" */
export type Meems_Var_Pop_Order_By = {
  generation?: InputMaybe<Order_By>;
  meemType?: InputMaybe<Order_By>;
  numCopies?: InputMaybe<Order_By>;
  numRemixes?: InputMaybe<Order_By>;
  parentChain?: InputMaybe<Order_By>;
  rootChain?: InputMaybe<Order_By>;
  uriSource?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Meems_Var_Samp_Fields = {
  __typename?: 'Meems_var_samp_fields';
  generation?: Maybe<Scalars['Float']>;
  meemType?: Maybe<Scalars['Float']>;
  numCopies?: Maybe<Scalars['Float']>;
  numRemixes?: Maybe<Scalars['Float']>;
  parentChain?: Maybe<Scalars['Float']>;
  rootChain?: Maybe<Scalars['Float']>;
  uriSource?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Meems" */
export type Meems_Var_Samp_Order_By = {
  generation?: InputMaybe<Order_By>;
  meemType?: InputMaybe<Order_By>;
  numCopies?: InputMaybe<Order_By>;
  numRemixes?: InputMaybe<Order_By>;
  parentChain?: InputMaybe<Order_By>;
  rootChain?: InputMaybe<Order_By>;
  uriSource?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Meems_Variance_Fields = {
  __typename?: 'Meems_variance_fields';
  generation?: Maybe<Scalars['Float']>;
  meemType?: Maybe<Scalars['Float']>;
  numCopies?: Maybe<Scalars['Float']>;
  numRemixes?: Maybe<Scalars['Float']>;
  parentChain?: Maybe<Scalars['Float']>;
  rootChain?: Maybe<Scalars['Float']>;
  uriSource?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Meems" */
export type Meems_Variance_Order_By = {
  generation?: InputMaybe<Order_By>;
  meemType?: InputMaybe<Order_By>;
  numCopies?: InputMaybe<Order_By>;
  numRemixes?: InputMaybe<Order_By>;
  parentChain?: InputMaybe<Order_By>;
  rootChain?: InputMaybe<Order_By>;
  uriSource?: InputMaybe<Order_By>;
};

/** columns and relationships of "Reactions" */
export type Reactions = {
  __typename?: 'Reactions';
  /** An object relationship */
  Meem?: Maybe<Meems>;
  MeemId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  MeemIdentification?: Maybe<MeemIdentifications>;
  MeemIdentificationId?: Maybe<Scalars['uuid']>;
  address: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  reactedAt: Scalars['timestamptz'];
  reaction: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** order by aggregate values of table "Reactions" */
export type Reactions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Reactions_Max_Order_By>;
  min?: InputMaybe<Reactions_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "Reactions". All fields are combined with a logical 'AND'. */
export type Reactions_Bool_Exp = {
  Meem?: InputMaybe<Meems_Bool_Exp>;
  MeemId?: InputMaybe<Uuid_Comparison_Exp>;
  MeemIdentification?: InputMaybe<MeemIdentifications_Bool_Exp>;
  MeemIdentificationId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Reactions_Bool_Exp>>;
  _not?: InputMaybe<Reactions_Bool_Exp>;
  _or?: InputMaybe<Array<Reactions_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  reactedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  reaction?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "Reactions" */
export type Reactions_Max_Order_By = {
  MeemId?: InputMaybe<Order_By>;
  MeemIdentificationId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reactedAt?: InputMaybe<Order_By>;
  reaction?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Reactions" */
export type Reactions_Min_Order_By = {
  MeemId?: InputMaybe<Order_By>;
  MeemIdentificationId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reactedAt?: InputMaybe<Order_By>;
  reaction?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Reactions". */
export type Reactions_Order_By = {
  Meem?: InputMaybe<Meems_Order_By>;
  MeemId?: InputMaybe<Order_By>;
  MeemIdentification?: InputMaybe<MeemIdentifications_Order_By>;
  MeemIdentificationId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reactedAt?: InputMaybe<Order_By>;
  reaction?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "Reactions" */
export enum Reactions_Select_Column {
  /** column name */
  MeemId = 'MeemId',
  /** column name */
  MeemIdentificationId = 'MeemIdentificationId',
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  ReactedAt = 'reactedAt',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  UpdatedAt = 'updatedAt'
}

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

/** columns and relationships of "TweetHashtags" */
export type TweetHashtags = {
  __typename?: 'TweetHashtags';
  /** An object relationship */
  Hashtag?: Maybe<Hashtags>;
  HashtagId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  Tweet?: Maybe<Tweets>;
  TweetId?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** order by aggregate values of table "TweetHashtags" */
export type TweetHashtags_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<TweetHashtags_Max_Order_By>;
  min?: InputMaybe<TweetHashtags_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "TweetHashtags". All fields are combined with a logical 'AND'. */
export type TweetHashtags_Bool_Exp = {
  Hashtag?: InputMaybe<Hashtags_Bool_Exp>;
  HashtagId?: InputMaybe<Uuid_Comparison_Exp>;
  Tweet?: InputMaybe<Tweets_Bool_Exp>;
  TweetId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<TweetHashtags_Bool_Exp>>;
  _not?: InputMaybe<TweetHashtags_Bool_Exp>;
  _or?: InputMaybe<Array<TweetHashtags_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "TweetHashtags" */
export type TweetHashtags_Max_Order_By = {
  HashtagId?: InputMaybe<Order_By>;
  TweetId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "TweetHashtags" */
export type TweetHashtags_Min_Order_By = {
  HashtagId?: InputMaybe<Order_By>;
  TweetId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "TweetHashtags". */
export type TweetHashtags_Order_By = {
  Hashtag?: InputMaybe<Hashtags_Order_By>;
  HashtagId?: InputMaybe<Order_By>;
  Tweet?: InputMaybe<Tweets_Order_By>;
  TweetId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "TweetHashtags" */
export enum TweetHashtags_Select_Column {
  /** column name */
  HashtagId = 'HashtagId',
  /** column name */
  TweetId = 'TweetId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "Tweets" */
export type Tweets = {
  __typename?: 'Tweets';
  /** An object relationship */
  Meem?: Maybe<Meems>;
  MeemId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  TweetHashtags: Array<TweetHashtags>;
  conversationId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  text: Scalars['String'];
  tweetId: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  userId: Scalars['String'];
  userProfileImageUrl: Scalars['String'];
  username: Scalars['String'];
};


/** columns and relationships of "Tweets" */
export type TweetsTweetHashtagsArgs = {
  distinct_on?: InputMaybe<Array<TweetHashtags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TweetHashtags_Order_By>>;
  where?: InputMaybe<TweetHashtags_Bool_Exp>;
};

/** order by aggregate values of table "Tweets" */
export type Tweets_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tweets_Max_Order_By>;
  min?: InputMaybe<Tweets_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "Tweets". All fields are combined with a logical 'AND'. */
export type Tweets_Bool_Exp = {
  Meem?: InputMaybe<Meems_Bool_Exp>;
  MeemId?: InputMaybe<Uuid_Comparison_Exp>;
  TweetHashtags?: InputMaybe<TweetHashtags_Bool_Exp>;
  _and?: InputMaybe<Array<Tweets_Bool_Exp>>;
  _not?: InputMaybe<Tweets_Bool_Exp>;
  _or?: InputMaybe<Array<Tweets_Bool_Exp>>;
  conversationId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  tweetId?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
  userProfileImageUrl?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "Tweets" */
export type Tweets_Max_Order_By = {
  MeemId?: InputMaybe<Order_By>;
  conversationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  tweetId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  userProfileImageUrl?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Tweets" */
export type Tweets_Min_Order_By = {
  MeemId?: InputMaybe<Order_By>;
  conversationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  tweetId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  userProfileImageUrl?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Tweets". */
export type Tweets_Order_By = {
  Meem?: InputMaybe<Meems_Order_By>;
  MeemId?: InputMaybe<Order_By>;
  TweetHashtags_aggregate?: InputMaybe<TweetHashtags_Aggregate_Order_By>;
  conversationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  tweetId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  userProfileImageUrl?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** select columns of table "Tweets" */
export enum Tweets_Select_Column {
  /** column name */
  MeemId = 'MeemId',
  /** column name */
  ConversationId = 'conversationId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  TweetId = 'tweetId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  UserProfileImageUrl = 'userProfileImageUrl',
  /** column name */
  Username = 'username'
}

/** columns and relationships of "Twitters" */
export type Twitters = {
  __typename?: 'Twitters';
  /** An object relationship */
  MeemIdentification?: Maybe<MeemIdentifications>;
  MeemIdentificationId?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  isDefault: Scalars['Boolean'];
  twitterId: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** order by aggregate values of table "Twitters" */
export type Twitters_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Twitters_Max_Order_By>;
  min?: InputMaybe<Twitters_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "Twitters". All fields are combined with a logical 'AND'. */
export type Twitters_Bool_Exp = {
  MeemIdentification?: InputMaybe<MeemIdentifications_Bool_Exp>;
  MeemIdentificationId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Twitters_Bool_Exp>>;
  _not?: InputMaybe<Twitters_Bool_Exp>;
  _or?: InputMaybe<Array<Twitters_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDefault?: InputMaybe<Boolean_Comparison_Exp>;
  twitterId?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "Twitters" */
export type Twitters_Max_Order_By = {
  MeemIdentificationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  twitterId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Twitters" */
export type Twitters_Min_Order_By = {
  MeemIdentificationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  twitterId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Twitters". */
export type Twitters_Order_By = {
  MeemIdentification?: InputMaybe<MeemIdentifications_Order_By>;
  MeemIdentificationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDefault?: InputMaybe<Order_By>;
  twitterId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "Twitters" */
export enum Twitters_Select_Column {
  /** column name */
  MeemIdentificationId = 'MeemIdentificationId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'isDefault',
  /** column name */
  TwitterId = 'twitterId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

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
  deletedAt?: Maybe<Scalars['timestamptz']>;
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
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
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
  deletedAt?: Maybe<Scalars['timestamptz']>;
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
  deletedAt?: InputMaybe<Order_By>;
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
  deletedAt?: Maybe<Scalars['timestamptz']>;
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
  deletedAt?: InputMaybe<Order_By>;
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
  deletedAt?: InputMaybe<Order_By>;
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
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "Wallets" */
export type Wallets = {
  __typename?: 'Wallets';
  /** An array relationship */
  Bundles: Array<Bundles>;
  /** An aggregate relationship */
  Bundles_aggregate: Bundles_Aggregate;
  /** An array relationship */
  Contracts: Array<Contracts>;
  /** An array relationship */
  MeemContractWallets: Array<MeemContractWallets>;
  /** An object relationship */
  MeemIdentification?: Maybe<MeemIdentifications>;
  MeemIdentificationId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  WalletContractInstances: Array<WalletContractInstances>;
  /** An aggregate relationship */
  WalletContractInstances_aggregate: WalletContractInstances_Aggregate;
  address: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  deletedAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  isDefault: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
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
export type WalletsMeemContractWalletsArgs = {
  distinct_on?: InputMaybe<Array<MeemContractWallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractWallets_Order_By>>;
  where?: InputMaybe<MeemContractWallets_Bool_Exp>;
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

/** order by aggregate values of table "Wallets" */
export type Wallets_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Wallets_Max_Order_By>;
  min?: InputMaybe<Wallets_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "Wallets". All fields are combined with a logical 'AND'. */
export type Wallets_Bool_Exp = {
  Bundles?: InputMaybe<Bundles_Bool_Exp>;
  Contracts?: InputMaybe<Contracts_Bool_Exp>;
  MeemContractWallets?: InputMaybe<MeemContractWallets_Bool_Exp>;
  MeemIdentification?: InputMaybe<MeemIdentifications_Bool_Exp>;
  MeemIdentificationId?: InputMaybe<Uuid_Comparison_Exp>;
  WalletContractInstances?: InputMaybe<WalletContractInstances_Bool_Exp>;
  _and?: InputMaybe<Array<Wallets_Bool_Exp>>;
  _not?: InputMaybe<Wallets_Bool_Exp>;
  _or?: InputMaybe<Array<Wallets_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDefault?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "Wallets" */
export type Wallets_Max_Order_By = {
  MeemIdentificationId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Wallets" */
export type Wallets_Min_Order_By = {
  MeemIdentificationId?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Wallets". */
export type Wallets_Order_By = {
  Bundles_aggregate?: InputMaybe<Bundles_Aggregate_Order_By>;
  Contracts_aggregate?: InputMaybe<Contracts_Aggregate_Order_By>;
  MeemContractWallets_aggregate?: InputMaybe<MeemContractWallets_Aggregate_Order_By>;
  MeemIdentification?: InputMaybe<MeemIdentifications_Order_By>;
  MeemIdentificationId?: InputMaybe<Order_By>;
  WalletContractInstances_aggregate?: InputMaybe<WalletContractInstances_Aggregate_Order_By>;
  address?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDefault?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "Wallets" */
export enum Wallets_Select_Column {
  /** column name */
  MeemIdentificationId = 'MeemIdentificationId',
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'isDefault',
  /** column name */
  UpdatedAt = 'updatedAt'
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
  Clippings: Array<Clippings>;
  /** fetch data from the table: "Clippings" using primary key columns */
  Clippings_by_pk?: Maybe<Clippings>;
  /** An array relationship */
  ContractInstances: Array<ContractInstances>;
  /** An aggregate relationship */
  ContractInstances_aggregate: ContractInstances_Aggregate;
  /** fetch data from the table: "ContractInstances" using primary key columns */
  ContractInstances_by_pk?: Maybe<ContractInstances>;
  /** An array relationship */
  Contracts: Array<Contracts>;
  /** fetch data from the table: "Contracts" using primary key columns */
  Contracts_by_pk?: Maybe<Contracts>;
  /** fetch data from the table: "Hashtags" */
  Hashtags: Array<Hashtags>;
  /** fetch data from the table: "Hashtags" using primary key columns */
  Hashtags_by_pk?: Maybe<Hashtags>;
  /** fetch data from the table: "Integrations" */
  Integrations: Array<Integrations>;
  /** fetch data from the table: "Integrations" using primary key columns */
  Integrations_by_pk?: Maybe<Integrations>;
  /** An array relationship */
  MeemContractIntegrations: Array<MeemContractIntegrations>;
  /** fetch data from the table: "MeemContractIntegrations" using primary key columns */
  MeemContractIntegrations_by_pk?: Maybe<MeemContractIntegrations>;
  /** An array relationship */
  MeemContractWallets: Array<MeemContractWallets>;
  /** fetch data from the table: "MeemContractWallets" using primary key columns */
  MeemContractWallets_by_pk?: Maybe<MeemContractWallets>;
  /** An array relationship */
  MeemContracts: Array<MeemContracts>;
  /** An aggregate relationship */
  MeemContracts_aggregate: MeemContracts_Aggregate;
  /** fetch data from the table: "MeemContracts" using primary key columns */
  MeemContracts_by_pk?: Maybe<MeemContracts>;
  /** fetch data from the table: "MeemIdentifications" */
  MeemIdentifications: Array<MeemIdentifications>;
  /** fetch data from the table: "MeemIdentifications" using primary key columns */
  MeemIdentifications_by_pk?: Maybe<MeemIdentifications>;
  /** An array relationship */
  MeemPasses: Array<MeemPasses>;
  /** fetch data from the table: "MeemPasses" using primary key columns */
  MeemPasses_by_pk?: Maybe<MeemPasses>;
  /** fetch data from the table: "MeemProperties" */
  MeemProperties: Array<MeemProperties>;
  /** fetch data from the table: "MeemProperties" using primary key columns */
  MeemProperties_by_pk?: Maybe<MeemProperties>;
  /** An array relationship */
  MeemVotes: Array<MeemVotes>;
  /** fetch data from the table: "MeemVotes" using primary key columns */
  MeemVotes_by_pk?: Maybe<MeemVotes>;
  /** An array relationship */
  Meems: Array<Meems>;
  /** An aggregate relationship */
  Meems_aggregate: Meems_Aggregate;
  /** fetch data from the table: "Meems" using primary key columns */
  Meems_by_pk?: Maybe<Meems>;
  /** An array relationship */
  Reactions: Array<Reactions>;
  /** fetch data from the table: "Reactions" using primary key columns */
  Reactions_by_pk?: Maybe<Reactions>;
  /** An array relationship */
  Transfers: Array<Transfers>;
  /** fetch data from the table: "Transfers" using primary key columns */
  Transfers_by_pk?: Maybe<Transfers>;
  /** An array relationship */
  TweetHashtags: Array<TweetHashtags>;
  /** fetch data from the table: "TweetHashtags" using primary key columns */
  TweetHashtags_by_pk?: Maybe<TweetHashtags>;
  /** An array relationship */
  Tweets: Array<Tweets>;
  /** fetch data from the table: "Tweets" using primary key columns */
  Tweets_by_pk?: Maybe<Tweets>;
  /** An array relationship */
  Twitters: Array<Twitters>;
  /** fetch data from the table: "Twitters" using primary key columns */
  Twitters_by_pk?: Maybe<Twitters>;
  /** An array relationship */
  WalletContractInstances: Array<WalletContractInstances>;
  /** An aggregate relationship */
  WalletContractInstances_aggregate: WalletContractInstances_Aggregate;
  /** fetch data from the table: "WalletContractInstances" using primary key columns */
  WalletContractInstances_by_pk?: Maybe<WalletContractInstances>;
  /** An array relationship */
  Wallets: Array<Wallets>;
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


export type Query_RootClippingsArgs = {
  distinct_on?: InputMaybe<Array<Clippings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Clippings_Order_By>>;
  where?: InputMaybe<Clippings_Bool_Exp>;
};


export type Query_RootClippings_By_PkArgs = {
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


export type Query_RootContracts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootHashtagsArgs = {
  distinct_on?: InputMaybe<Array<Hashtags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hashtags_Order_By>>;
  where?: InputMaybe<Hashtags_Bool_Exp>;
};


export type Query_RootHashtags_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootIntegrationsArgs = {
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


export type Query_RootMeemIdentificationsArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentifications_Order_By>>;
  where?: InputMaybe<MeemIdentifications_Bool_Exp>;
};


export type Query_RootMeemIdentifications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMeemPassesArgs = {
  distinct_on?: InputMaybe<Array<MeemPasses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemPasses_Order_By>>;
  where?: InputMaybe<MeemPasses_Bool_Exp>;
};


export type Query_RootMeemPasses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMeemPropertiesArgs = {
  distinct_on?: InputMaybe<Array<MeemProperties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemProperties_Order_By>>;
  where?: InputMaybe<MeemProperties_Bool_Exp>;
};


export type Query_RootMeemProperties_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMeemVotesArgs = {
  distinct_on?: InputMaybe<Array<MeemVotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemVotes_Order_By>>;
  where?: InputMaybe<MeemVotes_Bool_Exp>;
};


export type Query_RootMeemVotes_By_PkArgs = {
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


export type Query_RootReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


export type Query_RootReactions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTransfersArgs = {
  distinct_on?: InputMaybe<Array<Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transfers_Order_By>>;
  where?: InputMaybe<Transfers_Bool_Exp>;
};


export type Query_RootTransfers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTweetHashtagsArgs = {
  distinct_on?: InputMaybe<Array<TweetHashtags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TweetHashtags_Order_By>>;
  where?: InputMaybe<TweetHashtags_Bool_Exp>;
};


export type Query_RootTweetHashtags_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTweetsArgs = {
  distinct_on?: InputMaybe<Array<Tweets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tweets_Order_By>>;
  where?: InputMaybe<Tweets_Bool_Exp>;
};


export type Query_RootTweets_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTwittersArgs = {
  distinct_on?: InputMaybe<Array<Twitters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Twitters_Order_By>>;
  where?: InputMaybe<Twitters_Bool_Exp>;
};


export type Query_RootTwitters_By_PkArgs = {
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
  /** An array relationship */
  Bundles: Array<Bundles>;
  /** An aggregate relationship */
  Bundles_aggregate: Bundles_Aggregate;
  /** fetch data from the table: "Bundles" using primary key columns */
  Bundles_by_pk?: Maybe<Bundles>;
  /** An array relationship */
  Clippings: Array<Clippings>;
  /** fetch data from the table: "Clippings" using primary key columns */
  Clippings_by_pk?: Maybe<Clippings>;
  /** An array relationship */
  ContractInstances: Array<ContractInstances>;
  /** An aggregate relationship */
  ContractInstances_aggregate: ContractInstances_Aggregate;
  /** fetch data from the table: "ContractInstances" using primary key columns */
  ContractInstances_by_pk?: Maybe<ContractInstances>;
  /** An array relationship */
  Contracts: Array<Contracts>;
  /** fetch data from the table: "Contracts" using primary key columns */
  Contracts_by_pk?: Maybe<Contracts>;
  /** fetch data from the table: "Hashtags" */
  Hashtags: Array<Hashtags>;
  /** fetch data from the table: "Hashtags" using primary key columns */
  Hashtags_by_pk?: Maybe<Hashtags>;
  /** fetch data from the table: "Integrations" */
  Integrations: Array<Integrations>;
  /** fetch data from the table: "Integrations" using primary key columns */
  Integrations_by_pk?: Maybe<Integrations>;
  /** An array relationship */
  MeemContractIntegrations: Array<MeemContractIntegrations>;
  /** fetch data from the table: "MeemContractIntegrations" using primary key columns */
  MeemContractIntegrations_by_pk?: Maybe<MeemContractIntegrations>;
  /** An array relationship */
  MeemContractWallets: Array<MeemContractWallets>;
  /** fetch data from the table: "MeemContractWallets" using primary key columns */
  MeemContractWallets_by_pk?: Maybe<MeemContractWallets>;
  /** An array relationship */
  MeemContracts: Array<MeemContracts>;
  /** An aggregate relationship */
  MeemContracts_aggregate: MeemContracts_Aggregate;
  /** fetch data from the table: "MeemContracts" using primary key columns */
  MeemContracts_by_pk?: Maybe<MeemContracts>;
  /** fetch data from the table: "MeemIdentifications" */
  MeemIdentifications: Array<MeemIdentifications>;
  /** fetch data from the table: "MeemIdentifications" using primary key columns */
  MeemIdentifications_by_pk?: Maybe<MeemIdentifications>;
  /** An array relationship */
  MeemPasses: Array<MeemPasses>;
  /** fetch data from the table: "MeemPasses" using primary key columns */
  MeemPasses_by_pk?: Maybe<MeemPasses>;
  /** fetch data from the table: "MeemProperties" */
  MeemProperties: Array<MeemProperties>;
  /** fetch data from the table: "MeemProperties" using primary key columns */
  MeemProperties_by_pk?: Maybe<MeemProperties>;
  /** An array relationship */
  MeemVotes: Array<MeemVotes>;
  /** fetch data from the table: "MeemVotes" using primary key columns */
  MeemVotes_by_pk?: Maybe<MeemVotes>;
  /** An array relationship */
  Meems: Array<Meems>;
  /** An aggregate relationship */
  Meems_aggregate: Meems_Aggregate;
  /** fetch data from the table: "Meems" using primary key columns */
  Meems_by_pk?: Maybe<Meems>;
  /** An array relationship */
  Reactions: Array<Reactions>;
  /** fetch data from the table: "Reactions" using primary key columns */
  Reactions_by_pk?: Maybe<Reactions>;
  /** An array relationship */
  Transfers: Array<Transfers>;
  /** fetch data from the table: "Transfers" using primary key columns */
  Transfers_by_pk?: Maybe<Transfers>;
  /** An array relationship */
  TweetHashtags: Array<TweetHashtags>;
  /** fetch data from the table: "TweetHashtags" using primary key columns */
  TweetHashtags_by_pk?: Maybe<TweetHashtags>;
  /** An array relationship */
  Tweets: Array<Tweets>;
  /** fetch data from the table: "Tweets" using primary key columns */
  Tweets_by_pk?: Maybe<Tweets>;
  /** An array relationship */
  Twitters: Array<Twitters>;
  /** fetch data from the table: "Twitters" using primary key columns */
  Twitters_by_pk?: Maybe<Twitters>;
  /** An array relationship */
  WalletContractInstances: Array<WalletContractInstances>;
  /** An aggregate relationship */
  WalletContractInstances_aggregate: WalletContractInstances_Aggregate;
  /** fetch data from the table: "WalletContractInstances" using primary key columns */
  WalletContractInstances_by_pk?: Maybe<WalletContractInstances>;
  /** An array relationship */
  Wallets: Array<Wallets>;
  /** fetch data from the table: "Wallets" using primary key columns */
  Wallets_by_pk?: Maybe<Wallets>;
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


export type Subscription_RootClippingsArgs = {
  distinct_on?: InputMaybe<Array<Clippings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Clippings_Order_By>>;
  where?: InputMaybe<Clippings_Bool_Exp>;
};


export type Subscription_RootClippings_By_PkArgs = {
  id: Scalars['uuid'];
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


export type Subscription_RootContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Subscription_RootContracts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootHashtagsArgs = {
  distinct_on?: InputMaybe<Array<Hashtags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hashtags_Order_By>>;
  where?: InputMaybe<Hashtags_Bool_Exp>;
};


export type Subscription_RootHashtags_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<Integrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integrations_Order_By>>;
  where?: InputMaybe<Integrations_Bool_Exp>;
};


export type Subscription_RootIntegrations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMeemContractIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<MeemContractIntegrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractIntegrations_Order_By>>;
  where?: InputMaybe<MeemContractIntegrations_Bool_Exp>;
};


export type Subscription_RootMeemContractIntegrations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMeemContractWalletsArgs = {
  distinct_on?: InputMaybe<Array<MeemContractWallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemContractWallets_Order_By>>;
  where?: InputMaybe<MeemContractWallets_Bool_Exp>;
};


export type Subscription_RootMeemContractWallets_By_PkArgs = {
  id: Scalars['uuid'];
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


export type Subscription_RootMeemIdentificationsArgs = {
  distinct_on?: InputMaybe<Array<MeemIdentifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemIdentifications_Order_By>>;
  where?: InputMaybe<MeemIdentifications_Bool_Exp>;
};


export type Subscription_RootMeemIdentifications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMeemPassesArgs = {
  distinct_on?: InputMaybe<Array<MeemPasses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemPasses_Order_By>>;
  where?: InputMaybe<MeemPasses_Bool_Exp>;
};


export type Subscription_RootMeemPasses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMeemPropertiesArgs = {
  distinct_on?: InputMaybe<Array<MeemProperties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemProperties_Order_By>>;
  where?: InputMaybe<MeemProperties_Bool_Exp>;
};


export type Subscription_RootMeemProperties_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMeemVotesArgs = {
  distinct_on?: InputMaybe<Array<MeemVotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MeemVotes_Order_By>>;
  where?: InputMaybe<MeemVotes_Bool_Exp>;
};


export type Subscription_RootMeemVotes_By_PkArgs = {
  id: Scalars['uuid'];
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


export type Subscription_RootReactionsArgs = {
  distinct_on?: InputMaybe<Array<Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reactions_Order_By>>;
  where?: InputMaybe<Reactions_Bool_Exp>;
};


export type Subscription_RootReactions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTransfersArgs = {
  distinct_on?: InputMaybe<Array<Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transfers_Order_By>>;
  where?: InputMaybe<Transfers_Bool_Exp>;
};


export type Subscription_RootTransfers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTweetHashtagsArgs = {
  distinct_on?: InputMaybe<Array<TweetHashtags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TweetHashtags_Order_By>>;
  where?: InputMaybe<TweetHashtags_Bool_Exp>;
};


export type Subscription_RootTweetHashtags_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTweetsArgs = {
  distinct_on?: InputMaybe<Array<Tweets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tweets_Order_By>>;
  where?: InputMaybe<Tweets_Bool_Exp>;
};


export type Subscription_RootTweets_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTwittersArgs = {
  distinct_on?: InputMaybe<Array<Twitters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Twitters_Order_By>>;
  where?: InputMaybe<Twitters_Bool_Exp>;
};


export type Subscription_RootTwitters_By_PkArgs = {
  id: Scalars['uuid'];
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


export type Subscription_RootWalletsArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Subscription_RootWallets_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Timestamp_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _cast?: InputMaybe<Timestamp_Cast_Exp>;
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

export type Timestamptz_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _cast?: InputMaybe<Timestamptz_Cast_Exp>;
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

export type Uuid_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _cast?: InputMaybe<Uuid_Cast_Exp>;
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

export type ContractPartsFragment = { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string }>, Creator?: { __typename?: 'Wallets', address: string } | null };

export type SearchContractsQueryVariables = Exact<{
  contractType?: InputMaybe<Scalars['String']>;
  searchTerm?: InputMaybe<Scalars['String']>;
}>;


export type SearchContractsQuery = { __typename?: 'query_root', Contracts: Array<{ __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string }>, Creator?: { __typename?: 'Wallets', address: string } | null }> };

export type GetContractsByAddressesQueryVariables = Exact<{
  addresses?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetContractsByAddressesQuery = { __typename?: 'query_root', ContractInstances: Array<{ __typename?: 'ContractInstances', id: any, address: string, Contract?: { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string }>, Creator?: { __typename?: 'Wallets', address: string } | null } | null }> };

export type GetContractsByIdQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type GetContractsByIdQuery = { __typename?: 'query_root', Contracts: Array<{ __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string }>, Creator?: { __typename?: 'Wallets', address: string } | null }> };

export type GetMyContractsSubscriptionSubscriptionVariables = Exact<{
  address: Scalars['String'];
}>;


export type GetMyContractsSubscriptionSubscription = { __typename?: 'subscription_root', Wallets: Array<{ __typename?: 'Wallets', id: any, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', id: any, note?: string | null, name?: string | null, ContractInstance?: { __typename?: 'ContractInstances', id: any, address: string, chainId: number, Contract?: { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string }>, Creator?: { __typename?: 'Wallets', address: string } | null } | null } | null }> }> };

export type GetMyContractsQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type GetMyContractsQuery = { __typename?: 'query_root', Wallets: Array<{ __typename?: 'Wallets', id: any, WalletContractInstances: Array<{ __typename?: 'WalletContractInstances', id: any, note?: string | null, name?: string | null, ContractInstance?: { __typename?: 'ContractInstances', id: any, address: string, chainId: number, Contract?: { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string }>, Creator?: { __typename?: 'Wallets', address: string } | null } | null } | null }> }> };

export type SearchBundlesQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']>;
}>;


export type SearchBundlesQuery = { __typename?: 'query_root', Bundles: Array<{ __typename?: 'Bundles', id: any, name: string, description: string, BundleContracts: Array<{ __typename?: 'BundleContracts', order: number, Contract?: { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string }>, Creator?: { __typename?: 'Wallets', address: string } | null } | null }>, Creator?: { __typename?: 'Wallets', address: string } | null }> };

export type GetBundleByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetBundleByIdQuery = { __typename?: 'query_root', Bundles: Array<{ __typename?: 'Bundles', id: any, name: string, description: string, BundleContracts: Array<{ __typename?: 'BundleContracts', order: number, Contract?: { __typename?: 'Contracts', id: any, name: string, description: string, abi: any, bytecode: string, contractType: string, functionSelectors: any, CreatorId?: any | null, ContractInstances: Array<{ __typename?: 'ContractInstances', chainId: number, address: string }>, Creator?: { __typename?: 'Wallets', address: string } | null } | null }>, Creator?: { __typename?: 'Wallets', address: string } | null }> };

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
    BundleContracts {
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