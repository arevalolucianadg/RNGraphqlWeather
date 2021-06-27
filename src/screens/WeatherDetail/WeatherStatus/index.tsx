import React from 'react';
import {View} from 'react-native';

import {
  Item,
  ItemTitle,
  ItemValue,
  StatusExtra,
  StatusMain,
  StatusWrapper,
  Temp,
  Title,
  WeatherIcon,
} from './WeatherStatus.styles';
import {CityDetail} from '../../../graphql/interfaces';
import ICON from '../../../assets/png/weatherIcons';

const WeatherStatus = ({city}: {city: CityDetail}) => {
  const {summary, temperature} = city.weather;

  return (
    <StatusWrapper>
      <StatusMain>
        <View>
          <Temp>{`${temperature.actual.toFixed(1)}°`}</Temp>
          <Title>{summary.title}</Title>
        </View>
        <WeatherIcon source={ICON[`icon${summary.icon}`]} />
      </StatusMain>
      <StatusExtra>
        <Item>
          <ItemTitle>Feels like</ItemTitle>
          <ItemValue>{temperature.feelsLike}°</ItemValue>
        </Item>
        <Item>
          <ItemTitle>MIN</ItemTitle>
          <ItemValue>{temperature.min}°</ItemValue>
        </Item>
        <Item>
          <ItemTitle>MAX</ItemTitle>
          <ItemValue>{temperature.max}°</ItemValue>
        </Item>
      </StatusExtra>
    </StatusWrapper>
  );
};

export default WeatherStatus;
