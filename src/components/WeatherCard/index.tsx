import React, {useEffect, useState} from 'react';
import {Image, ListRenderItemInfo, View} from 'react-native';

import {HomeCityProps} from '../../screens/Home';
import { CityName, Info, WeatherCardWrapper, CityTemp, CitySummaryTitle, WeatherIcon } from './WeatherCard.styles';

import ICON from '../../assets/png';

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
        <WeatherIcon source={ICON[`icon${summaryIcon}`]} />
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
