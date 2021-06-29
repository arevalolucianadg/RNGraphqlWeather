import {useState} from 'react';

import {ISwitchSelectorOption} from '../types/switch';

const useSwitchFormatTemp = () => {
  const [formatTemp, setFormatTemp] = useState<
    string | number | ISwitchSelectorOption
  >('metric');

  interface TempOptionsProps {
    label: string;
    value: string;
  }
  const tempOptions: TempOptionsProps[] = [
    {label: 'C°', value: 'metric'},
    {label: 'F°', value: 'imperial'},
  ];

  const toggleFormatTemp = (value: string | number | ISwitchSelectorOption) => {
    setFormatTemp(value);
  };

  return {
    formatTemp,
    tempOptions,
    toggleFormatTemp,
  };
};

export default useSwitchFormatTemp;
