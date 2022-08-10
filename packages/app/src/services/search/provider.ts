import { MintedPath } from '../../base/path';

/**
 * A provider is an instance of an integration that is capable of taking in a query
 * and return a list of search results for said query. e.g. xyz@email.com provider for the Email integration
 */
export interface Provider {
  id: string;
  name: string;
  search(query: string, options: { page: number }): Promise<SearchResult[]>;
  authenticate(): Promise<OperationResult>;
}

/**
 * An integration is a type of connector that can be configured to create a new provider
 * an integration itself cannot provide searching capabilities
 */
export interface Integration {
  name: string;
  icon: MintedPath;
  connect(): Promise<OperationResult<Provider>>;
}

export type SearchResult = {
  title: string;
  description: string | undefined;
  url: string;
};

export type OperationResult<T = undefined> =
  | {
      data: T;
      success: true;
    }
  | { success: false; cancelled: boolean };

export class UnauthenticatedProviderError extends Error {
  name = 'UnauthenticatedProviderError';
}
