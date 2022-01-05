import {getStorage} from '../../utils/async-storage';
import { KEY_THEME_STORE, KEY_CITIES_STORE, KEY_FAV_CITIES_STORE, KEY_TEMPERATURE_UNIT } from '../../utils/constants';

export const getThemeStored = async () => {
  return await getStorage(KEY_THEME_STORE);
};

export const getCitiesStored = async () => {
  return await getStorage(KEY_CITIES_STORE);
};

export const getFavCities = async () => {
  return await getStorage(KEY_FAV_CITIES_STORE);
}

export const getTempUnit = async () => {
  return await getStorage(KEY_TEMPERATURE_UNIT);
}