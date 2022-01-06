import React, { FunctionComponent } from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

import ICON from '../../../assets/png/weatherIcons';
import {WeatherInfo} from '../../graphql/interfaces';
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
  city: WeatherInfo | null;
  isFavorite: boolean;
}

const WeatherCard: FunctionComponent<WeatherCardProps> = ({city, isFavorite}) => {
  const navigation = useNavigation();

  if (!city) {
    return <View />
  };

  const {id, name, weather: {summary, temperature}} = city;


  return (
    <WeatherCardWrapper
      isFavorite={isFavorite}
      // TODO: remove navigation
      onPress={() => navigation.navigate('WeatherDetail', {cityId: id})}>
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
};

export default WeatherCard;
