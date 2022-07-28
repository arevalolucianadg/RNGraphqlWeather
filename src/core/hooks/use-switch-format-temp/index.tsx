import { useContext } from 'react';

import { ISwitchSelectorOption } from '@components/switch/types';
import { AppContext } from '@core/context/app-context';
import { saveStorage, KEY_TEMPERATURE_UNIT } from '@core/utils';

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

export const useSwitchFormatTemp = (): UseSwitchFormatTempHook => {
  const { temperatureUnit, toggleTempUnit } = useContext(AppContext);

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
    });
  };

  const initialTemp = temperatureUnit === 'metric' ? 0 : 1;

  return {
    initialTemp,
    tempOptions,
    temperatureUnit,
    toggleFormatTemp,
  };
};
