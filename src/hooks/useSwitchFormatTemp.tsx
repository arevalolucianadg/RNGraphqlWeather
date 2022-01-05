import {useContext} from 'react';

import { AppContext } from '../Context/AppContext/AppContext';
import { saveStorage } from '../utils/async-storage';
import { KEY_TEMPERATURE_UNIT } from '../utils/constants';


const useSwitchFormatTemp = () => {
  const {temperatureUnit, toggleTempUnit} = useContext(AppContext);
  interface TempOptionsProps {
    label: string;
    value: string;
  }
  const tempOptions: TempOptionsProps[] = [
    {label: 'C°', value: 'metric'},
    {label: 'F°', value: 'imperial'},
  ];

  const toggleFormatTemp = (value: string) => {
    toggleTempUnit(value);
    saveStorage({
      key: KEY_TEMPERATURE_UNIT,
      item: value,
    })
  };

  const initialTemp = temperatureUnit === 'metric' ? 0 : 1;

  return {
    initialTemp,
    tempOptions,
    temperatureUnit,
    toggleFormatTemp,
  };
};

export default useSwitchFormatTemp;
