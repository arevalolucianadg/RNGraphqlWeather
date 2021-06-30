import {getStorage} from '../../utils/asyncStorage';
import { KEY_THEME_STORE, KEY_CITIES_STORE } from '../../utils/constants';

export const getThemeStored = async () => {
  return await getStorage(KEY_THEME_STORE);
};

export const getCitiesStored = async () => {
  return await getStorage(KEY_CITIES_STORE);
};
