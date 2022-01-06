import React, {useEffect, createContext, useReducer, FunctionComponent, useCallback} from 'react';

import {ISwitchSelectorOption} from '../../types/switch';
import {AppReducer} from './app-reducers';
import INITIAL_STATE from './initial-state';
import {AppContextProps, AppProviderProps} from './interfaces';
import {getThemeStored, getCitiesStored, getFavCities, getTempUnit} from './utils';

/**
 * Types
 */
type ThemeProps = string | number | ISwitchSelectorOption;

export const AppContext = createContext({} as AppContextProps);

export const AppProvider: FunctionComponent<AppProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  const handleTheme = (theme: ThemeProps): void => {
    dispatch({
      type: 'HANDLE_THEME',
      payload: theme,
    });
  };

  const addCity = (cityId: string): void => {
    dispatch({
      type: 'ADD_CITY',
      payload: {
        cityId,
      },
    });
  };

  const updateCities = (cities: string[]): void => {
    dispatch({
      type: 'UPDATE_CITIES',
      payload: cities,
    });
  };

  const addFavoriteCity = (cityId: string): void => {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: {
        cityId,
      },
    });
  };

  const updateFavorites = (favCities: string[]): void => {
    dispatch({
      type: 'UPDATE_FAVORITES',
      payload: favCities,
    });
  };

  const toggleTempUnit = (
    tempUnit: ThemeProps,
  ): void => {
    dispatch({
      type: 'TOGGLE_TEMP_UNIT',
      payload: tempUnit,
    });
  };

  const getDataFromStorage = useCallback(
    async (): Promise<void> => {
      const themeStored = await getThemeStored();
      const citiesStored = await getCitiesStored();
      const favCitiesStored = await getFavCities();
      const tempUnitStored = await getTempUnit();

      themeStored && handleTheme(themeStored as ThemeProps);
      citiesStored && updateCities(citiesStored as string[]);
      favCitiesStored && updateFavorites(favCitiesStored as string[]);
      tempUnitStored && toggleTempUnit(tempUnitStored as ThemeProps);
    },
    [],
  )

  useEffect(() => {
    getDataFromStorage();
  }, [getDataFromStorage]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        addCity,
        addFavoriteCity,
        handleTheme,
        updateCities,
        updateFavorites,
        toggleTempUnit,
      }}>
      {children}
    </AppContext.Provider>
  );
};
