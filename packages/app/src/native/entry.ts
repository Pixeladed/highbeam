import { ClientFactory } from '@highbeam/interface';
import { app, ipcMain } from 'electron';
import { config } from '../base/config';
import { Messages } from '../interface/bridge';
import { App } from './app';
import { createHandlerReigstrar } from './base/bridge_handler';
import { createSlackNativeService } from './services/slack/create';
import { WindowSource } from './views/view';

const baseSource: WindowSource = app.isPackaged
  ? { type: 'bundled', path: 'index.html' }
  : { type: 'server', url: 'http://localhost:8080' };

const registerHandler = createHandlerReigstrar(ipcMain);
const clientFactory = new ClientFactory(config.apiOrigin);
const { slackNativeService } = createSlackNativeService(clientFactory);
const instance = new App(baseSource);

registerHandler(Messages.navigation.openSettings, instance.openSettings);
registerHandler(Messages.slack.connect, slackNativeService.startOAuth);

app.on('activate', instance.handleActivate);
app.on('ready', instance.handleActivate);
app.on('browser-window-blur', instance.handleBlur);
app.on('browser-window-focus', instance.handleFocus);
