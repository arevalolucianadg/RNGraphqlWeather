import React, {useCallback, useContext, useState} from 'react';
import {FlatList, ListRenderItemInfo, RefreshControl, Text} from 'react-native';
import {useQuery} from '@apollo/client';

import {AppContext} from '../../Context/AppContext/AppContext';
import {GET_WEATHER_INFO} from '../../graphql/requests';
import {CitiesInfo, QueryVars, WeatherInfo} from '../../graphql/interfaces';
import {Heading, LayoutBase, LoadingView, WeatherCard} from '../../components';
import {LayoutSpacing} from '../../components/LayoutBase/LayoutBase.styles';
import {TitleWrapper, CitiesList} from './styles';
import { wait } from '../../utils/global';

export interface HomeCityProps {
  id: string;
  isFavorite: boolean;
  name: string;
  summaryIcon: string;
  summaryTitle: string;
  temperature: string;
}

const Home = () => {
  const {cities, favoriteCities, temperatureUnit} = useContext(AppContext);
  const [refreshing, setRefreshing] = useState(false);

  const isFavorite = (city: ListRenderItemInfo<WeatherInfo>) => {
    return favoriteCities.includes(city.item.id);
  };

  const variables = {
    id: cities,
    config: {
      units: temperatureUnit,
    },
  };

  const {data, loading, error, refetch} = useQuery<CitiesInfo, QueryVars>(
    GET_WEATHER_INFO,
    {variables, fetchPolicy: 'no-cache'},
  );

  if (loading) return <LoadingView />;
  if (error) return <Text>Ocurrió un error.</Text>;

  const onRefresh = () => {
    setRefreshing(true);
    refetch();
    wait(2000).then(() => setRefreshing(false));
  };

  return (
    <LayoutBase>
      <LayoutSpacing>
        <CitiesList>
          <FlatList
            data={data?.getCityById}
            style={{flex: 1}}
            keyExtractor={city => city.id}
            renderItem={city => (
              <WeatherCard city={city.item} isFavorite={isFavorite(city)} />
            )}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <TitleWrapper>
                <Heading>Weather</Heading>
                <Heading primary>Today</Heading>
              </TitleWrapper>
            }
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </CitiesList>
      </LayoutSpacing>
    </LayoutBase>
  );
};

export default Home;
