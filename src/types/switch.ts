export interface ISwitchSelectorOption {
  label: string;
  value: string | number;
  customIcon?: JSX.Element;
  imageIcon?: string;
  activeColor?: string;
  accessibilityLabel?: string;
  testID?: string;
}
