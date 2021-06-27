import React from 'react';
import {Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from '../../routes/RootParams';

interface WeatherDetailProps {
  route: RouteProp<RootStackParamList, 'WeatherDetail'>;
}

const WeatherDetail = ({route}: WeatherDetailProps) => {
  const cityID = route.params.cityId;

  return (
    <View>
      <Text>Weather detail ${cityID}</Text>
    </View>
  );
};

export default WeatherDetail;
