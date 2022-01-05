import React, {FunctionComponent, useContext} from 'react';
import {useQuery} from '@apollo/client';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Text} from 'react-native';

import {LayoutBase, LoadingView} from '../../components';
import { AppContext } from '../../Context/AppContext/AppContext';
import {CityInfo, QueryVars} from '../../graphql/interfaces';
import {GET_WEATHER_DETAIL} from '../../graphql/requests';
import {RootStackParamList} from '../../routes/root-params';
import HeaderDetail from './header-detail';
import {Spacing} from './styles';
import WeatherExtra from './weather-extra';
import WeatherStatus from './weather-status';

interface WeatherDetailProps {
  navigation: StackNavigationProp<RootStackParamList, 'WeatherDetail'>;
  route: RouteProp<RootStackParamList, 'WeatherDetail'>;
}

const WeatherDetail: FunctionComponent<WeatherDetailProps> = ({route}) => {
  const cityID = route.params.cityId;
  const {temperatureUnit} = useContext(AppContext);

  const variables = {
    id: [cityID],
    config: {
      units: temperatureUnit,
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
