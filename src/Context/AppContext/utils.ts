import {getStorage} from '../../utils/asyncStorage';
import { KEY_THEME_STORE, CITIES_STORE, FAV_CITIES_STORE } from '../../utils/constants';

export const getThemeStored = async () => {
  return await getStorage(KEY_THEME_STORE);
};

export const getCitiesStored = async () => {
  return await getStorage(CITIES_STORE);
};

export const getFavCities = async () => {
  return await getStorage(FAV_CITIES_STORE);
}