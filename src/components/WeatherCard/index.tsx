import React from 'react';
import {ListRenderItemInfo, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {HomeCityProps} from '../../screens/Home';
import {
  CityName,
  Info,
  WeatherCardWrapper,
  CityTemp,
  CitySummaryTitle,
  WeatherIcon,
} from './WeatherCard.styles';

import ICON from '../../assets/png';

interface WeatherCardProps {
  city: ListRenderItemInfo<HomeCityProps>;
}

const WeatherCard = ({city: {item}}: WeatherCardProps) => {
  const {id, isFavorite, name, summaryIcon, summaryTitle, temperature} = item;

  const navigation = useNavigation();

  return (
    <WeatherCardWrapper
      isFavorite={isFavorite}
      onPress={() => navigation.navigate('WeatherDetail', {cityId: id})}>
      <View>
        <CityName isFavorite={isFavorite}>{name}</CityName>
        <Info>
          <CityTemp isFavorite={isFavorite}>{temperature}</CityTemp>
          <CitySummaryTitle isFavorite={isFavorite}>
            {summaryTitle}
          </CitySummaryTitle>
        </Info>
      </View>
      <WeatherIcon source={ICON[`icon${summaryIcon}`]} />
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
