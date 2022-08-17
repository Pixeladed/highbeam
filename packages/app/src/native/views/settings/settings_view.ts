import { Routes } from '../../../routes';
import { View, WindowSource } from '../view';

export class SettingsView extends View {
  constructor(baseSource: WindowSource) {
    super(View.extendWindowSource(baseSource, Routes.settings()), {});
  }
}