import { GoogleOAuthConfig } from '../../base/config';
import { GoogleService } from '../google/google_service';

export const createGoogleCalendarService = (config: GoogleOAuthConfig) => {
  const scopes = ['https://www.googleapis.com/auth/calendar.readonly'];
  const googleCalendarService = new GoogleService(config, scopes);

  return { googleCalendarService };
};
