import {AppAction} from './AppActions';
import {AppStateProps} from './interfaces';

export const AppReducer = (
  state: AppStateProps,
  action: AppAction,
): AppStateProps => {
  switch (action.type) {
    case 'HANDLE_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    case 'ADD_CITY':
      return {
        ...state,
        cities: [...state.cities, action.payload.cityId],
      };
    case 'UPDATE_CITIES':
      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
};
