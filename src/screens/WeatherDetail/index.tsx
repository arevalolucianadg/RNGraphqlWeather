import React from 'react';
import {Text} from 'react-native';
import {useQuery} from '@apollo/client';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../routes/RootParams';
import {LayoutBase, LoadingView} from '../../components';

import {GET_WEATHER_DETAIL} from '../../graphql/requests';
import {CityInfo, QueryVars} from '../../graphql/interfaces';
import HeaderDetail from './HeaderDetail';
import WeatherStatus from './WeatherStatus';
import WeatherExtra from './WeatherExtra';
import {Spacing} from './WeatherDetail.styles';

interface WeatherDetailProps {
  navigation: StackNavigationProp<RootStackParamList, 'WeatherDetail'>;
  route: RouteProp<RootStackParamList, 'WeatherDetail'>;
}

const WeatherDetail = ({route}: WeatherDetailProps) => {
  const cityID = route.params.cityId;

  const variables = {
    id: [cityID],
    config: {
      units: 'metric',
    },
  };

  const {data, loading, error} = useQuery<CityInfo, QueryVars>(
    GET_WEATHER_DETAIL,
    {variables},
  );

  if (loading) return <LoadingView />;
  // TODO: mejorar vista de error
  if (error) return <Text>Ocurrió un error.</Text>;

  if (!data) return null;
  if (data.getCityById === null) return null;

  const city = data.getCityById[0];

  return (
    <LayoutBase>
      <>
        <Spacing>
          <HeaderDetail city={city} />
          <WeatherStatus city={city} />
        </Spacing>
        <WeatherExtra city={city} />
      </>
    </LayoutBase>
  );
};

export default WeatherDetail;
