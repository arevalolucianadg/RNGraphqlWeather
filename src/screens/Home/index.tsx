import React from 'react';
import {FlatList, Text} from 'react-native';

import {LayoutBase, LoadingView, WeatherCard} from '../../components';
import {TitleWrapper, TitleHome, CitiesList} from './styles';
import useWeather from '../../hooks/useWeather';
import {LayoutSpacing} from '../../components/LayoutBase/LayoutBase.styles';

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

  const {data, loading, error} = useWeather({variables, type: 'INFO'});

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
            renderItem={city => <WeatherCard city={city} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <TitleWrapper>
                <TitleHome>Weather</TitleHome>
                <TitleHome primary>Today</TitleHome>
              </TitleWrapper>
            }
          />
        </CitiesList>
      </LayoutSpacing>
    </LayoutBase>
  );
};

export default Home;
