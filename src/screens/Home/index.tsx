import React, { FunctionComponent, useContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import { StackScreenProps } from '@react-navigation/stack';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  Text,
} from 'react-native';

import {
  Heading,
  LayoutBase,
  LoadingView,
  WeatherCard,
} from '../../components';
import { LayoutSpacing } from '../../components/layout-base/styles';
import { AppContext } from '../../context/app-context/app-context';
import { wait } from '../../core/utils/global';
import { CitiesInfo, QueryVars, WeatherInfo } from '../../graphql/interfaces';
import { GET_WEATHER_INFO } from '../../graphql/requests';
import { RootStackParamList } from '../../routes/root-params';
import { TitleWrapper, CitiesList } from './styles';

/**
 * Types
 */

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Main'>;

/**
 * Constants
 */

const STYLES_LIST = {
  flex: 1,
};

const Home: FunctionComponent<HomeScreenProps> = ({
  navigation: { navigate },
}) => {
  const { cities, favoriteCities, temperatureUnit } = useContext(AppContext);
  const [refreshing, setRefreshing] = useState(false);

  const isFavorite = (city: ListRenderItemInfo<WeatherInfo>): boolean =>
    favoriteCities.includes(city.item.id);

  const variables = {
    id: cities,
    config: {
      units: temperatureUnit,
    },
  };

  const { data, loading, error, refetch } = useQuery<CitiesInfo, QueryVars>(
    GET_WEATHER_INFO,
    {
      variables,
      fetchPolicy: 'no-cache',
    },
  );

  if (loading) return <LoadingView />;
  if (error) return <Text>Ocurrió un error.</Text>;

  const handleDetailPress = (cityId: string): void => {
    navigate('WeatherDetail', {
      cityId,
    });
  };

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
              <WeatherCard
                city={city.item}
                isFavorite={isFavorite(city)}
                onPress={id => handleDetailPress(id)}
              />
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
