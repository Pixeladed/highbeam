import { IGmailService } from './gmail';
import { IGoogleDriveService } from './google_drive';
import { ISlackService } from './slack';
import { IUsageService } from './usage';

export * as Slack from './slack';
export * as GoogleDrive from './google_drive';
export * as Gmail from './gmail';
export * as Google from './google';
export * as Usage from './usage';
export * from './base';

export type IServiceMap = {
  slack: ISlackService;
  google_drive: IGoogleDriveService;
  gmail: IGmailService;
  usage: IUsageService;
};
export type Services = keyof IServiceMap;
export type IServices = IServiceMap[keyof IServiceMap];
