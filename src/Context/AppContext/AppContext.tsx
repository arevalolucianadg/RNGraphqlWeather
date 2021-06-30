import React, {useEffect, createContext, useReducer} from 'react';

import {AppReducer} from './AppReducers';
import INITIAL_STATE from './initialState';

import {AppContextProps, AppProviderProps} from './interfaces';
import {ISwitchSelectorOption} from '../../types/switch';
import {getThemeStored, getCitiesStored} from './utils';

export const AppContext = createContext({} as AppContextProps);

export const AppProvider = ({children}: AppProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  const getDataFromStorage = async () => {
    const themeStored = await getThemeStored();
    const citiesStored = await getCitiesStored();

    handleTheme(themeStored);
    updateCities(citiesStored);
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

  return (
    <AppContext.Provider
      value={{
        ...state,
        addCity,
        handleTheme,
        updateCities,
      }}>
      {children}
    </AppContext.Provider>
  );
};
