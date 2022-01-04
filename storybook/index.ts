import {getStorybookUI, configure} from '@storybook/react-native';
import { Platform } from 'react-native';

import {loadStories} from './story-loader';
import './rn-addons';

/**
 * Constants
 */
const STORYBOOK_PORT = 7007;

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  port: STORYBOOK_PORT,
  host: Platform.OS === 'android' ? '127.0.0.1' : '0.0.0.0',
  asyncStorage: null,
});

export default StorybookUIRoot;
