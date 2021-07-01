import { ISwitchSelectorOption } from "../../types/switch";

export type AppAction =
  | {type: 'HANDLE_THEME'; payload: string | number | ISwitchSelectorOption;}
  | {type: 'ADD_CITY'; payload: {cityId: string};}
  | {type: 'UPDATE_CITIES'; payload: string[];}
  | {type: 'ADD_FAVORITE'; payload: {cityId: string};}
  | {type: 'UPDATE_FAVORITES'; payload: string[];}