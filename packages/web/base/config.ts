import { Assert } from '@highbeam/utils';

export const config: Config = {
  slack: {
    clientId: Assert.exists(
      process.env.SLACK_CLIENT_ID,
      'expected SLACK_CLIENT_ID to exist'
    ),
    clientSecret: Assert.exists(
      process.env.SLACK_CLIENT_SECRET,
      'expected SLACK_CLIENT_SECRET to exist'
    ),
    stateSecret: Assert.exists(
      process.env.SLACK_STATE_SECRET,
      'expected SLACK_STATE_SECRET to exist'
    ),
  },
  googleDrive: {
    clientId: Assert.exists(
      process.env.GOOGLE_DRIVE_CLIENT_ID,
      'expected GOOGLE_DRIVE_CLIENT_ID to exist'
    ),
    clientSecret: Assert.exists(
      process.env.GOOGLE_DRIVE_CLIENT_SECRET,
      'expected GOOGLE_DRIVE_CLIENT_SECRET to exist'
    ),
    redirectUrl: Assert.exists(
      process.env.GOOGLE_DRIVE_REDIRECT_URL,
      'expected GOOGLE_DRIVE_REDIRECT_URL to exist'
    ),
  },
  gmail: {
    clientId: Assert.exists(
      process.env.GMAIL_CLIENT_ID,
      'expected GMAIL_CLIENT_ID to exist'
    ),
    clientSecret: Assert.exists(
      process.env.GMAIL_CLIENT_SECRET,
      'expected GMAIL_CLIENT_SECRET to exist'
    ),
    redirectUrl: Assert.exists(
      process.env.GMAIL_REDIRECT_URL,
      'expected GMAIL_REDIRECT_URL to exist'
    ),
  },
  auth0: {
    audience: Assert.exists(
      process.env.AUTH0_AUDIENCE,
      'expected AUTH0_AUDIENCE to exist'
    ),
    domain: Assert.exists(
      process.env.AUTH0_DOMAIN,
      'expected AUTH0_DOMAIN to exist'
    ),
  },
  stripe: {
    apiKey: Assert.exists(
      process.env.STRIPE_API_KEY,
      'expected stripe api key to exist'
    ),
    defaultPriceId: Assert.exists(
      process.env.STRIPE_DEFAULT_PRICE_ID,
      'expected stripe default price id to exist'
    ),
  },
  updateServerUrl: Assert.exists(
    process.env.NEXT_PUBLIC_UPDATE_SERVER_URL,
    'expected next public update server url to exist'
  ),
};

export type Config = {
  slack: SlackOAuthConfig;
  googleDrive: GoogleOAuthConfig;
  gmail: GoogleOAuthConfig;
  auth0: {
    audience: string;
    domain: string;
  };
  stripe: StripeConfig;
  updateServerUrl: string;
};

export type StripeConfig = {
  apiKey: string;
  defaultPriceId: string;
};

export type SlackOAuthConfig = {
  clientId: string;
  clientSecret: string;
  stateSecret: string;
};

export type GoogleOAuthConfig = {
  clientId: string;
  clientSecret: string;
  redirectUrl: string;
};
