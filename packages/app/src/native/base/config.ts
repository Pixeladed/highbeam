import content from '../../config.json';
import { Assert } from '@highbeam/utils';

export const env = (label: string) => {
  const val = content[label as keyof typeof content];
  return Assert.exists(val, `expected config ${label} to exist`);
};

export type NativeConfig = {
  apiOrigin: string;
  redirectOrigin: string;
  auth0: Auth0Config;
};

export type Auth0Config = {
  audience: string;
  domain: string;
  clientId: string;
};

export const nativeConfig: NativeConfig = {
  apiOrigin: env('API_ORIGIN'),
  redirectOrigin: env('REDIRECT_ORIGIN'),
  auth0: {
    audience: env('AUTH0_AUDIENCE'),
    domain: env('AUTH0_DOMAIN'),
    clientId: env('AUTH0_CLIENT_ID'),
  },
};