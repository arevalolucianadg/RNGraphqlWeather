import React, { FunctionComponent } from 'react';
import {View} from 'react-native';

import {LayoutBase, Heading, Switch} from '../../components';
import {LayoutSpacing} from '../../components/LayoutBase/LayoutBase.styles';
import useSwitchTheme from '../../core/hooks/use-switch-theme';
import useSwitchFormatTemp from '../../core/hooks/useSwitchFormatTemp';
import {
  SettingGroup,
  TitleWrapper,
  SettingTitle,
  SettingRow,
  SettingItem,
} from './styles';


const Settings: FunctionComponent = () => {
  const {initialTemp, tempOptions, toggleFormatTemp} = useSwitchFormatTemp();
  const {initialTheme, themeOptions, toggleTheme} = useSwitchTheme();

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
                <Switch initial={initialTemp} options={tempOptions} onPress={toggleFormatTemp} />
              </SettingRow>
            </SettingGroup>
            <SettingGroup>
              <SettingTitle>Other</SettingTitle>
              <SettingRow>
                <SettingItem>Dark Mode</SettingItem>
                <Switch initial={initialTheme} options={themeOptions} onPress={toggleTheme} />
              </SettingRow>
            </SettingGroup>
          </View>
        </View>
      </LayoutSpacing>
    </LayoutBase>
  );
};

export default Settings;
