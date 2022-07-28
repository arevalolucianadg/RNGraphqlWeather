import React, { FunctionComponent } from 'react';
import { View } from 'react-native';

import { LayoutBase, Heading, Switch, SafeArea } from '@components';
import { useSwitchFormatTemp, useSwitchTheme } from '@core/hooks';
import {
  SettingGroup,
  TitleWrapper,
  SettingTitle,
  SettingRow,
  SettingItem,
} from './styles';

const Settings: FunctionComponent = () => {
  const { initialTemp, tempOptions, toggleFormatTemp } = useSwitchFormatTemp();
  const { initialTheme, themeOptions, toggleTheme } = useSwitchTheme();

  return (
    <SafeArea>
      <LayoutBase spacing>
        <View>
          <TitleWrapper>
            <Heading>Settings</Heading>
          </TitleWrapper>

          <View>
            <SettingGroup>
              <SettingTitle>Weather</SettingTitle>
              <SettingRow>
                <SettingItem>Temperature</SettingItem>
                <Switch
                  initial={initialTemp}
                  options={tempOptions}
                  onPress={toggleFormatTemp}
                />
              </SettingRow>
            </SettingGroup>
            <SettingGroup>
              <SettingTitle>Other</SettingTitle>
              <SettingRow>
                <SettingItem>Dark Mode</SettingItem>
                <Switch
                  initial={initialTheme}
                  options={themeOptions}
                  onPress={toggleTheme}
                />
              </SettingRow>
            </SettingGroup>
          </View>
        </View>
      </LayoutBase>
    </SafeArea>
  );
};

export default Settings;
