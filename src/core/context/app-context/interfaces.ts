import { ReactElement } from 'react';

import { ISwitchSelectorOption } from '@components/switch/types';

export interface AppContextProps {
  theme: string | number | ISwitchSelectorOption;
  cities: string[];
  favoriteCities: string[];
  temperatureUnit: string | number | ISwitchSelectorOption;

  addCity: (cityId: string) => void;
  addFavoriteCity: (cityId: string) => void;
  handleTheme: (theme: string | number | ISwitchSelectorOption) => void;
  updateCities: (cities: string[]) => void;
  updateFavorites: (favCities: string[]) => void;
  toggleTempUnit: (tempUnit: string | number | ISwitchSelectorOption) => void;
}

export interface AppProviderProps {
  children: ReactElement;
}

export interface AppStateProps {
  theme: string | number | ISwitchSelectorOption;
  cities: string[];
  favoriteCities: string[];
  temperatureUnit: string | number | ISwitchSelectorOption;
}
