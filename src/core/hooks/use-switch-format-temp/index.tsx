import {useContext} from 'react';

import { AppContext } from '../../../context/app-context/app-context';
import { ISwitchSelectorOption } from '../../../../types/switch';
import { saveStorage } from '../../utils/async-storage';
import { KEY_TEMPERATURE_UNIT } from '../../utils/constants';

/**
 * Types
 */
 interface TempOptionsProps {
  label: string;
  value: string;
}

interface UseSwitchFormatTempHook {
  initialTemp: number;
  tempOptions: TempOptionsProps[];
  temperatureUnit: string | number | ISwitchSelectorOption;
  toggleFormatTemp: (value: string) => void;
}

const useSwitchFormatTemp = (): UseSwitchFormatTempHook => {
  const {temperatureUnit, toggleTempUnit} = useContext(AppContext);
  
  const tempOptions: TempOptionsProps[] = [
    {
      label: 'C°', 
      value: 'metric',
    },
    {
      label: 'F°', 
      value: 'imperial',
    },
  ];

  const toggleFormatTemp = (value: string): void => {
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
