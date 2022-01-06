import {INITIAL_CITIES} from '../../utils/constants';
import {AppStateProps} from './interfaces';

const initialState: AppStateProps = {
  theme: 'light',
  cities: INITIAL_CITIES,
  favoriteCities: [],
  temperatureUnit: 'metric',
};

export default initialState;