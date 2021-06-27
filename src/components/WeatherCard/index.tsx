import React from 'react';
import {ListRenderItemInfo, View} from 'react-native';

import styled, {css} from 'styled-components/native';
import {HomeCityProps} from '../../screens/Home/index';
import {global} from '../../styles/GlobalStyles';
import CloudySvg from '../../assets/svg/weatherIcons/cloudy.svg';

interface IsFavoriteProps {
  isFavorite: boolean;
}
export const WeatherCardWrapper = styled.TouchableOpacity<IsFavoriteProps>`
  background-color: ${props =>
    props.isFavorite ? props.theme.colors.primary : props.theme.colors.paper};
  border-radius: ${global.border.RadiusMd};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  margin-bottom: 16px;
  padding: 16px;
`;

const textColor = css<IsFavoriteProps>`
  color: ${props =>
    props.isFavorite ? props.theme.colors.white : props.theme.colors.text};
  font-family: ${global.font.weightMedium};
`;

export const CityName = styled.Text<IsFavoriteProps>`
  ${textColor}
  font-family: ${global.font.weightMedium};
  font-size: 22px;
  margin-bottom: 8px;
`;
export const Info = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
export const CityTemp = styled.Text<IsFavoriteProps>`
  ${textColor}
  font-family: ${global.font.weightBold};
  font-size: 18px;
  letter-spacing: 0.4px;
  margin-right: 8px;
`;
export const CitySummaryTitle = styled.Text<IsFavoriteProps>`
  ${textColor}
  font-family: ${global.font.weightLight};
  font-size: 14px;
`;

export const WeatherIcon = styled.View`
  height: 70px;
  width: 70px;
`;

interface WeatherCardProps {
  city: ListRenderItemInfo<HomeCityProps>;
  onPress: () => void;
}

const WeatherCard = ({city: {item}, onPress}: WeatherCardProps) => {
  const {id, isFavorite, name, summaryIcon, summaryTitle, temperature} = item;

  return (
    <WeatherCardWrapper isFavorite={isFavorite} onPress={onPress}>
      <View>
        <CityName isFavorite={isFavorite}>{name}</CityName>
        <Info>
          <CityTemp isFavorite={isFavorite}>{temperature}</CityTemp>
          <CitySummaryTitle isFavorite={isFavorite}>
            {summaryTitle}
          </CitySummaryTitle>
        </Info>
      </View>
      <WeatherIcon>
        <CloudySvg height="100%" width="100%" />
      </WeatherIcon>
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
