import { env } from '../../base/env';

export type WebConfig = {
  redirectOrigin: string;
  auth0: Auth0Config;
};

export type Auth0Config = {
  audience: string;
  domain: string;
  clientId: string;
};

export const webConfig: WebConfig = {
  redirectOrigin: env('REACT_APP_REDIRECT_ORIGIN'),
  auth0: {
    audience: env('REACT_APP_AUTH0_AUDIENCE'),
    domain: env('REACT_APP_AUTH0_DOMAIN'),
    clientId: env('REACT_APP_AUTH0_CLIENT_ID'),
  },
};
