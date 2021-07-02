import {AppStateProps} from './interfaces';
import {INITIAL_CITIES} from '../../utils/constants';

const initialState: AppStateProps = {
  theme: 'light',
  cities: INITIAL_CITIES,
  favoriteCities: [],
  temperatureUnit: 'metric',
};

export default initialState;