/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
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
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "logs" */
export type Logs = {
  __typename?: 'logs';
  address: Scalars['String']['output'];
  block_number: Scalars['numeric']['output'];
  block_timestamp: Scalars['timestamptz']['output'];
  decoded: Scalars['jsonb']['output'];
  from: Scalars['String']['output'];
  to: Scalars['String']['output'];
  transaction_hash: Scalars['String']['output'];
};


/** columns and relationships of "logs" */
export type LogsDecodedArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "logs" */
export type Logs_Aggregate = {
  __typename?: 'logs_aggregate';
  aggregate?: Maybe<Logs_Aggregate_Fields>;
  nodes: Array<Logs>;
};

/** aggregate fields of "logs" */
export type Logs_Aggregate_Fields = {
  __typename?: 'logs_aggregate_fields';
  avg?: Maybe<Logs_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Logs_Max_Fields>;
  min?: Maybe<Logs_Min_Fields>;
  stddev?: Maybe<Logs_Stddev_Fields>;
  stddev_pop?: Maybe<Logs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Logs_Stddev_Samp_Fields>;
  sum?: Maybe<Logs_Sum_Fields>;
  var_pop?: Maybe<Logs_Var_Pop_Fields>;
  var_samp?: Maybe<Logs_Var_Samp_Fields>;
  variance?: Maybe<Logs_Variance_Fields>;
};


/** aggregate fields of "logs" */
export type Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Logs_Append_Input = {
  decoded?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Logs_Avg_Fields = {
  __typename?: 'logs_avg_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "logs". All fields are combined with a logical 'AND'. */
export type Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Logs_Bool_Exp>>;
  _not?: InputMaybe<Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Logs_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  block_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  decoded?: InputMaybe<Jsonb_Comparison_Exp>;
  from?: InputMaybe<String_Comparison_Exp>;
  to?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "logs" */
export enum Logs_Constraint {
  /** unique or primary key constraint on columns "transaction_hash" */
  LogsPkey = 'logs_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Logs_Delete_At_Path_Input = {
  decoded?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Logs_Delete_Elem_Input = {
  decoded?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Logs_Delete_Key_Input = {
  decoded?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "logs" */
export type Logs_Inc_Input = {
  block_number?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "logs" */
export type Logs_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  block_number?: InputMaybe<Scalars['numeric']['input']>;
  block_timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  decoded?: InputMaybe<Scalars['jsonb']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Logs_Max_Fields = {
  __typename?: 'logs_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  block_timestamp?: Maybe<Scalars['timestamptz']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Logs_Min_Fields = {
  __typename?: 'logs_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  block_timestamp?: Maybe<Scalars['timestamptz']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "logs" */
export type Logs_Mutation_Response = {
  __typename?: 'logs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Logs>;
};

/** on_conflict condition type for table "logs" */
export type Logs_On_Conflict = {
  constraint: Logs_Constraint;
  update_columns?: Array<Logs_Update_Column>;
  where?: InputMaybe<Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "logs". */
export type Logs_Order_By = {
  address?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  decoded?: InputMaybe<Order_By>;
  from?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** primary key columns input for table: logs */
export type Logs_Pk_Columns_Input = {
  transaction_hash: Scalars['String']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Logs_Prepend_Input = {
  decoded?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "logs" */
export enum Logs_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  BlockTimestamp = 'block_timestamp',
  /** column name */
  Decoded = 'decoded',
  /** column name */
  From = 'from',
  /** column name */
  To = 'to',
  /** column name */
  TransactionHash = 'transaction_hash'
}

/** input type for updating data in table "logs" */
export type Logs_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  block_number?: InputMaybe<Scalars['numeric']['input']>;
  block_timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  decoded?: InputMaybe<Scalars['jsonb']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Logs_Stddev_Fields = {
  __typename?: 'logs_stddev_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Logs_Stddev_Pop_Fields = {
  __typename?: 'logs_stddev_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Logs_Stddev_Samp_Fields = {
  __typename?: 'logs_stddev_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "logs" */
export type Logs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Logs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Logs_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  block_number?: InputMaybe<Scalars['numeric']['input']>;
  block_timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  decoded?: InputMaybe<Scalars['jsonb']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Logs_Sum_Fields = {
  __typename?: 'logs_sum_fields';
  block_number?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "logs" */
export enum Logs_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  BlockTimestamp = 'block_timestamp',
  /** column name */
  Decoded = 'decoded',
  /** column name */
  From = 'from',
  /** column name */
  To = 'to',
  /** column name */
  TransactionHash = 'transaction_hash'
}

export type Logs_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Logs_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Logs_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Logs_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Logs_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Logs_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Logs_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Logs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Logs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Logs_Var_Pop_Fields = {
  __typename?: 'logs_var_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Logs_Var_Samp_Fields = {
  __typename?: 'logs_var_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Logs_Variance_Fields = {
  __typename?: 'logs_variance_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "logs" */
  delete_logs?: Maybe<Logs_Mutation_Response>;
  /** delete single row from the table: "logs" */
  delete_logs_by_pk?: Maybe<Logs>;
  /** insert data into the table: "logs" */
  insert_logs?: Maybe<Logs_Mutation_Response>;
  /** insert a single row into the table: "logs" */
  insert_logs_one?: Maybe<Logs>;
  /** update data of the table: "logs" */
  update_logs?: Maybe<Logs_Mutation_Response>;
  /** update single row of the table: "logs" */
  update_logs_by_pk?: Maybe<Logs>;
  /** update multiples rows of table: "logs" */
  update_logs_many?: Maybe<Array<Maybe<Logs_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_LogsArgs = {
  where: Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Logs_By_PkArgs = {
  transaction_hash: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_LogsArgs = {
  objects: Array<Logs_Insert_Input>;
  on_conflict?: InputMaybe<Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Logs_OneArgs = {
  object: Logs_Insert_Input;
  on_conflict?: InputMaybe<Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_LogsArgs = {
  _append?: InputMaybe<Logs_Append_Input>;
  _delete_at_path?: InputMaybe<Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Logs_Delete_Key_Input>;
  _inc?: InputMaybe<Logs_Inc_Input>;
  _prepend?: InputMaybe<Logs_Prepend_Input>;
  _set?: InputMaybe<Logs_Set_Input>;
  where: Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Logs_By_PkArgs = {
  _append?: InputMaybe<Logs_Append_Input>;
  _delete_at_path?: InputMaybe<Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Logs_Delete_Key_Input>;
  _inc?: InputMaybe<Logs_Inc_Input>;
  _prepend?: InputMaybe<Logs_Prepend_Input>;
  _set?: InputMaybe<Logs_Set_Input>;
  pk_columns: Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Logs_ManyArgs = {
  updates: Array<Logs_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
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
  /** fetch data from the table: "logs" */
  logs: Array<Logs>;
  /** fetch aggregated fields from the table: "logs" */
  logs_aggregate: Logs_Aggregate;
  /** fetch data from the table: "logs" using primary key columns */
  logs_by_pk?: Maybe<Logs>;
};


export type Query_RootLogsArgs = {
  distinct_on?: InputMaybe<Array<Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logs_Order_By>>;
  where?: InputMaybe<Logs_Bool_Exp>;
};


export type Query_RootLogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logs_Order_By>>;
  where?: InputMaybe<Logs_Bool_Exp>;
};


export type Query_RootLogs_By_PkArgs = {
  transaction_hash: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "logs" */
  logs: Array<Logs>;
  /** fetch aggregated fields from the table: "logs" */
  logs_aggregate: Logs_Aggregate;
  /** fetch data from the table: "logs" using primary key columns */
  logs_by_pk?: Maybe<Logs>;
  /** fetch data from the table in a streaming manner: "logs" */
  logs_stream: Array<Logs>;
};


export type Subscription_RootLogsArgs = {
  distinct_on?: InputMaybe<Array<Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logs_Order_By>>;
  where?: InputMaybe<Logs_Bool_Exp>;
};


export type Subscription_RootLogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Logs_Order_By>>;
  where?: InputMaybe<Logs_Bool_Exp>;
};


export type Subscription_RootLogs_By_PkArgs = {
  transaction_hash: Scalars['String']['input'];
};


export type Subscription_RootLogs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Logs_Stream_Cursor_Input>>;
  where?: InputMaybe<Logs_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export type GetLogsSubscriptionVariables = Exact<{
  limit: Scalars['Int']['input'];
}>;


export type GetLogsSubscription = { __typename?: 'subscription_root', logs: Array<{ __typename?: 'logs', address: string, block_number: any, block_timestamp: any, decoded: any, from: string, to: string, transaction_hash: string }> };


export const GetLogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"GetLogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"block_timestamp"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"block_number"}},{"kind":"Field","name":{"kind":"Name","value":"block_timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"decoded"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_hash"}}]}}]}}]} as unknown as DocumentNode<GetLogsSubscription, GetLogsSubscriptionVariables>;