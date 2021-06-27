import React from 'react';

import {CityDetail} from '../../../graphql/interfaces';
import {
  ExtraItem,
  ItemTitle,
  ItemValue,
  WeatherExtraWrapper,
} from './WeatherExtra.styles';

const WeatherExtra = ({city}: {city: CityDetail}) => {
  const {wind, clouds} = city.weather;

  return (
    <WeatherExtraWrapper>
      <ExtraItem>
        <ItemTitle>Wind</ItemTitle>
        <ItemValue>{`${wind.speed} m/s`}</ItemValue>
      </ExtraItem>
      <ExtraItem>
        <ItemTitle>Clouds</ItemTitle>
        <ItemValue>{`${clouds.all}  %`}</ItemValue>
      </ExtraItem>
      <ExtraItem>
        <ItemTitle>Visibility</ItemTitle>
        <ItemValue>{`${clouds.visibility}`}</ItemValue>
      </ExtraItem>
      <ExtraItem>
        <ItemTitle>Humidity</ItemTitle>
        <ItemValue>{`${clouds.humidity}  %`}</ItemValue>
      </ExtraItem>
    </WeatherExtraWrapper>
  );
};

export default WeatherExtra;
