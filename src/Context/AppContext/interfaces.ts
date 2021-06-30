import {ISwitchSelectorOption} from '../../types/switch';

export interface AppContextProps {
  theme: string | number | ISwitchSelectorOption;
  cities: string[];

  addCity: (cityId: string) => void;
  handleTheme: (theme: string | number | ISwitchSelectorOption) => void;
  updateCities: (cities: string[]) => void;
}

export interface AppProviderProps {
  children: JSX.Element;
}

export interface AppStateProps {
  theme: string | number | ISwitchSelectorOption;
  cities: string[];
}
