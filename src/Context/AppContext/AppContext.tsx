import React, {useEffect, createContext, useReducer} from 'react';

import {AppReducer} from './AppReducers';
import INITIAL_STATE from './initialState';

import {AppContextProps, AppProviderProps} from './interfaces';
import {ISwitchSelectorOption} from '../../types/switch';
import {getThemeStored, getCitiesStored, getFavCities, getTempUnit} from './utils';

export const AppContext = createContext({} as AppContextProps);

export const AppProvider = ({children}: AppProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  const getDataFromStorage = async () => {
    const themeStored = await getThemeStored();
    const citiesStored = await getCitiesStored();
    const favCitiesStored = await getFavCities();
    const tempUnitStored = await getTempUnit();

    themeStored && handleTheme(themeStored);
    citiesStored && updateCities(citiesStored);
    favCitiesStored && updateFavorites(favCitiesStored);
    tempUnitStored && toggleTempUnit(tempUnitStored);
  };

  useEffect(() => {
    getDataFromStorage();
  }, []);

  const handleTheme = (theme: string | number | ISwitchSelectorOption) => {
    dispatch({
      type: 'HANDLE_THEME',
      payload: theme,
    });
  };

  const addCity = (cityId: string) => {
    dispatch({
      type: 'ADD_CITY',
      payload: {
        cityId,
      },
    });
  };

  const updateCities = (cities: string[]) => {
    dispatch({
      type: 'UPDATE_CITIES',
      payload: cities,
    });
  };

  const addFavoriteCity = (cityId: string) => {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: {
        cityId,
      },
    });
  };

  const updateFavorites = (favCities: string[]) => {
    dispatch({
      type: 'UPDATE_FAVORITES',
      payload: favCities,
    });
  };

  const toggleTempUnit = (
    tempUnit: string | number | ISwitchSelectorOption,
  ) => {
    dispatch({
      type: 'TOGGLE_TEMP_UNIT',
      payload: tempUnit,
    });
  };

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
