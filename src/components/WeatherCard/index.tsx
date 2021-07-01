import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  CityName,
  Info,
  WeatherCardWrapper,
  CityTemp,
  CitySummaryTitle,
  WeatherIcon,
} from './WeatherCard.styles';

import ICON from '../../assets/png/weatherIcons';
import {WeatherInfo} from '../../graphql/interfaces';

interface WeatherCardProps {
  city: WeatherInfo | null;
  isFavorite: boolean;
}

const WeatherCard = ({city, isFavorite}: WeatherCardProps) => {

  if (!city) return <View></View>;
  const {id, name, weather: {summary, temperature}} = city;

  const navigation = useNavigation();

  return (
    <WeatherCardWrapper
      isFavorite={isFavorite}
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
