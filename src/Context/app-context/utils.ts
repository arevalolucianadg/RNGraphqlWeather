import {getStorage} from '../../core/utils/async-storage';
import { KEY_THEME_STORE, KEY_CITIES_STORE, KEY_FAV_CITIES_STORE, KEY_TEMPERATURE_UNIT } from '../../core/utils/constants';

export const getThemeStored = async (): Promise<string | [] | undefined> => getStorage(KEY_THEME_STORE);

export const getCitiesStored = async (): Promise<string | [] | undefined> => getStorage(KEY_CITIES_STORE);

export const getFavCities = async (): Promise<string | [] | undefined> => getStorage(KEY_FAV_CITIES_STORE);

export const getTempUnit = async (): Promise<string | [] | undefined> => getStorage(KEY_TEMPERATURE_UNIT);