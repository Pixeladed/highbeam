import { ManualPromise } from '../../../base/manual_promise';
import { Routes } from '../../../routes';
import { SlackOAuthView } from '../../views/slack_oauth/slack_oauth_view';

export class SlackNativeService {
  constructor(
    private readonly clientId: string,
    private readonly redirectOrigin: string
  ) {}

  startOAuth = async () => {
    const redirectUrl = this.createRedirectUrl();
    const oAuthUrl = this.createOAuthUrl(redirectUrl);

    let connected = false;
    const operation = new ManualPromise();
    const view = new SlackOAuthView(oAuthUrl);
    view.open();

    view.browserWindow?.webContents.on('will-navigate', (event, newUrl) => {
      if (!this.isSameOriginAndPath(redirectUrl, newUrl)) {
        operation.resolve({ success: false, cancelled: false });
        return;
      }

      const url = new URL(newUrl);
      const code = url.searchParams.get('code');
      const state = url.searchParams.get('state');

      console.log(`Code: ${code}, state: ${state}`);
      connected = true;
      operation.resolve({ success: true, data: {} });
      view.browserWindow?.close();
    });

    view.browserWindow?.on('close', () => {
      if (connected) {
        return;
      }

      operation.resolve({
        success: false,
        cancelled: true,
      });
    });

    return operation;
  };

  private isSameOriginAndPath = (urlA: string, urlB: string) => {
    const a = new URL(urlA);
    const b = new URL(urlB);

    return a.origin === b.origin && a.pathname === b.pathname;
  };

  private createOAuthUrl = (redirectUrl: string) => {
    const url = new URL('https://slack.com/oauth/v2/authorize');
    url.searchParams.set('client_id', this.clientId);
    url.searchParams.set('user_scope', 'search:read');
    url.searchParams.set('redirect_uri', redirectUrl);
    return url.toString();
  };

  private createRedirectUrl = () => {
    const url = new URL(this.redirectOrigin);
    url.pathname = Routes.slackIntegrationCallback();
    url.search = '';
    url.hash = '';
    return url.toString();
  };
}
