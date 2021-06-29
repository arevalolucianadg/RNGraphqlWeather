import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

import {LayoutBase, Heading} from '../../components';
import {LayoutSpacing} from '../../components/LayoutBase/LayoutBase.styles';
import {
  SettingGroup,
  TitleWrapper,
  SettingTitle,
  SettingRow,
  SettingItem,
} from './styles';

import LightSvg from '../../assets/svg/sun.svg';
import DarkSvg from '../../assets/svg/moon.svg';
import {ThemeContext} from 'styled-components';
import {global} from '../../styles/GlobalStyles';

interface SettingsProps {
  formatTemperature: 'metric' | 'imperial';
  darkMode: boolean;
}

const Settings = () => {
  const {colors} = useContext(ThemeContext);
  const [formatTemp, setFormatTemp] = useState<string | number | ISwitchSelectorOption>('metric');
  const [theme, setTheme] = useState<string | number | ISwitchSelectorOption>('light');
  interface ISwitchSelectorOption {
    label: string;
    value: string | number;
    customIcon?: JSX.Element;
    imageIcon?: string;
    activeColor?: string;
    accessibilityLabel?: string;
    testID?: string;
  }

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
  }

  const themeOptions = [
    {
      label: '',
      value: 'light',
      customIcon: <LightSvg height="20px" width="20px" fill={theme === 'light' ? colors.white : colors.gray1} />,
    },
    {
      label: '',
      value: 'dark',
      customIcon: <DarkSvg height="20px" width="20px" fill={theme === 'dark' ? colors.white : colors.gray1} />,
    },
  ];

  const toggleTheme = (value: string | number | ISwitchSelectorOption) => {
    setTheme(value);
    console.log('V', value);
    console.log('T', theme);
  }

  return (
    <LayoutBase>
      <LayoutSpacing>
        <View>
          <TitleWrapper>
            <Heading>Settings</Heading>
          </TitleWrapper>

          <View>
            <SettingGroup>
              <SettingTitle>Weather</SettingTitle>
              <SettingRow>
                <SettingItem>Temperature</SettingItem>
                <SwitchSelector
                  initial={0}
                  options={tempOptions}
                  borderColor={colors.primary}
                  buttonColor={colors.primary}
                  hasPadding
                  onPress={value => toggleFormatTemp(value)}
                  style={{
                    paddingRight: 3,
                    width: 150,
                  }}
                  textColor={colors.gray1}
                  textStyle={{
                    fontFamily: global.font.weightMedium,
                  }}
                />
              </SettingRow>
            </SettingGroup>
            <SettingGroup>
              <SettingTitle>Other</SettingTitle>
              <SettingRow>
                <SettingItem>Dark Mode</SettingItem>
                <SwitchSelector
                  initial={0}
                  options={themeOptions}
                  borderColor={colors.primary}
                  buttonColor={colors.primary}
                  hasPadding
                  onPress={value => toggleTheme(value)}
                  style={{
                    paddingRight: 3,
                    width: 150,
                  }}
                  textColor={colors.gray1}
                  textStyle={{
                    fontFamily: global.font.weightMedium,
                  }}
                />
              </SettingRow>
            </SettingGroup>
          </View>
        </View>
      </LayoutSpacing>
    </LayoutBase>
  );
};

export default Settings;
