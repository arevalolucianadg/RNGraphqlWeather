import { ReactElement } from 'react';

export interface ISwitchSelectorOption {
  label: string;
  value: string | number;
  customIcon?: ReactElement;
  imageIcon?: string;
  activeColor?: string;
  accessibilityLabel?: string;
  testID?: string;
}
