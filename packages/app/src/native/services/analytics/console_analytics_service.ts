import { AnalyticsTrackEndpoint } from '../../../interface/bridge/endpoints';
import { Handler } from '../../base/bridge_handler';
import { AnalyticsNativeService } from './analytics_native_service';

export class ConsoleAnalyticsService implements AnalyticsNativeService {
  track: Handler<AnalyticsTrackEndpoint> = async ({ data }) => {
    console.groupCollapsed(`[ConsoleAnalytics] track ${data.name}`);
    console.dir(data.properties);
    console.groupEnd();
    return {};
  };

  identify = (id: string | undefined) => {
    console.log(`[ConsoleAnalytics] identify ${id}`);
  };

  addContext = (context: Partial<{ planName: string }>) => {
    console.log(`[ConsoleAnalytics] addContext ${context}`);
  };
}
