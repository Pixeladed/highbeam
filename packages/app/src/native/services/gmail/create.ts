import { ClientFactory } from '@highbeam/interface';
import { RefreshTokenUtil } from '../../base/refresh_token_util';
import { Crypt } from '../../base/crypt';
import { GmailNativeService } from './gmail_native_service';
import { GmailNativeStore } from './gmail_native_store';

const STORE_NAME = 'gmail_native_store';

export const createGmailNativeService = ({
  clientFactory,
  redirectOrigin,
  crypt,
}: {
  redirectOrigin: string;
  clientFactory: ClientFactory;
  crypt: Crypt;
}) => {
  const store = new GmailNativeStore(STORE_NAME, crypt);
  const gmailClient = clientFactory.for('gmail');
  const refreshUtil = new RefreshTokenUtil(refreshToken =>
    gmailClient.call('refreshToken', { refreshToken })
  );
  const gmailNativeService = new GmailNativeService(
    redirectOrigin,
    gmailClient,
    store,
    refreshUtil
  );

  return { gmailNativeService };
};
