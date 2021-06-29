import React from 'react';
import {FlatList, Text} from 'react-native';
import {useQuery} from '@apollo/client';

import {GET_WEATHER_INFO} from '../../graphql/requests';
import {CitiesInfo, QueryVars} from '../../graphql/interfaces';
import {Heading, LayoutBase, LoadingView, WeatherCard} from '../../components';
import {LayoutSpacing} from '../../components/LayoutBase/LayoutBase.styles';
import {TitleWrapper, CitiesList} from './styles';

export interface HomeCityProps {
  id: string;
  isFavorite: boolean;
  name: string;
  summaryIcon: string;
  summaryTitle: string;
  temperature: string;
}

const Home = () => {
  const variables = {
    id: [
      '3435910',
      '2988507',
      '292223',
      '2147714',
      '1850144',
      '1261481',
      '3451190',
      '2643743',
    ],
    config: {
      units: 'metric',
    },
  };

  const {data, loading, error} = useQuery<CitiesInfo, QueryVars>(
    GET_WEATHER_INFO,
    {variables},
  );

  if (loading) return <LoadingView />;
  if (error) return <Text>Ocurrió un error.</Text>;

  return (
    <LayoutBase>
      <LayoutSpacing>
        <CitiesList>
          <FlatList
            data={data?.getCityById}
            style={{flex: 1}}
            keyExtractor={city => city.id}
            renderItem={city => <WeatherCard city={city.item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <TitleWrapper>
                <Heading>Weather</Heading>
                <Heading primary>Today</Heading>
              </TitleWrapper>
            }
          />
        </CitiesList>
      </LayoutSpacing>
    </LayoutBase>
  );
};

export default Home;
