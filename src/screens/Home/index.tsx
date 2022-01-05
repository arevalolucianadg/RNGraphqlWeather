import React, {FunctionComponent, useContext, useState} from 'react';
import {useQuery} from '@apollo/client';
import {FlatList, ListRenderItemInfo, RefreshControl, Text} from 'react-native';

import {Heading, LayoutBase, LoadingView, WeatherCard} from '../../components';
import {LayoutSpacing} from '../../components/layout-base/styles';
import {AppContext} from '../../Context/AppContext/AppContext';
import {CitiesInfo, QueryVars, WeatherInfo} from '../../graphql/interfaces';
import {GET_WEATHER_INFO} from '../../graphql/requests';
import { wait } from '../../utils/global';
import {TitleWrapper, CitiesList} from './styles';

/**
 * Constants
 */
const STYLES_LIST = {
  flex: 1
}

export interface HomeCityProps {
  id: string;
  isFavorite: boolean;
  name: string;
  summaryIcon: string;
  summaryTitle: string;
  temperature: string;
}

const Home: FunctionComponent = () => {
  const {cities, favoriteCities, temperatureUnit} = useContext(AppContext);
  const [refreshing, setRefreshing] = useState(false);

  const isFavorite = (city: ListRenderItemInfo<WeatherInfo>): boolean => favoriteCities.includes(city.item.id);

  const variables = {
    id: cities,
    config: {
      units: temperatureUnit,
    },
  };

  const {data, loading, error, refetch} = useQuery<CitiesInfo, QueryVars>(
    GET_WEATHER_INFO,
    {
      variables, 
      fetchPolicy: 'no-cache'
    },
  );

  if (loading) return <LoadingView />;
  if (error) return <Text>Ocurrió un error.</Text>;

  const onRefresh = (): void => {
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
            style={STYLES_LIST}
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
