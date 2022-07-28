import React, { FunctionComponent } from 'react';
import { View } from 'react-native';

import ICON from '../../../assets/png/weatherIcons';
import { WeatherInfo } from '../../graphql/interfaces';
import {
  CityName,
  Info,
  WeatherCardWrapper,
  CityTemp,
  CitySummaryTitle,
  WeatherIcon,
} from './styles';

/**
 * Types
 */
interface WeatherCardProps {
  city: WeatherInfo;
  isFavorite?: boolean;
  onPress: (cityId: string) => void;
}

/**
 * WeatherCard
 */

const WeatherCard: FunctionComponent<WeatherCardProps> = ({
  city: {
    id,
    name,
    weather: { summary, temperature },
  },
  isFavorite = false,
  onPress,
}) => (
  <WeatherCardWrapper isFavorite={isFavorite} onPress={() => onPress(id)}>
    <View>
      <CityName isFavorite={isFavorite}>{name}</CityName>
      <Info>
        <CityTemp isFavorite={isFavorite}>
          {temperature.actual.toFixed(1)}°
        </CityTemp>
        <CitySummaryTitle isFavorite={isFavorite}>
          {summary.title}
        </CitySummaryTitle>
      </Info>
    </View>
    <WeatherIcon source={ICON[`icon${summary.icon}`]} />
  </WeatherCardWrapper>
);

export default WeatherCard;
