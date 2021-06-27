import React, {useState} from 'react';
import {FlatList} from 'react-native';

import LayoutBase from '../../components/LayoutBase';
import {TitleWrapper, TitleHome, CitiesList, HomeWrapper} from './styles';
import WeatherCard from '../../components/WeatherCard/index';

export interface HomeCityProps {
  id: string;
  isFavorite: boolean;
  name: string;
  summaryIcon: string;
  summaryTitle: string;
  temperature: string;
}

const CITIES_WEATHER: HomeCityProps[] = [
  {
    id: '2643743',
    isFavorite: true,
    name: 'Buenos Aires',
    summaryIcon: '04d',
    summaryTitle: 'Cloudy',
    temperature: '14°',
  },
  {
    id: '2643744',
    isFavorite: false,
    name: 'Dubai',
    summaryIcon: '04d',
    summaryTitle: 'Cloudy',
    temperature: '14°',
  },
  {
    id: '2643745',
    isFavorite: false,
    name: 'Londres',
    summaryIcon: '04d',
    summaryTitle: 'Cloudy',
    temperature: '14°',
  },
  {
    id: '2643746',
    isFavorite: false,
    name: 'París',
    summaryIcon: '04d',
    summaryTitle: 'Cloudy',
    temperature: '14°',
  },
  {
    id: '2643747',
    isFavorite: false,
    name: 'Bogotá',
    summaryIcon: '04d',
    summaryTitle: 'Cloudy',
    temperature: '14°',
  },
  {
    id: '2643748',
    isFavorite: false,
    name: 'Madrid',
    summaryIcon: '04d',
    summaryTitle: 'Cloudy',
    temperature: '14°',
  },
];

const Home = () => {
  const [citiesInfo, setCitiesInfo] = useState<HomeCityProps[]>(CITIES_WEATHER);

  return (
    <LayoutBase>
      <HomeWrapper>
        <CitiesList>
          <FlatList
            data={citiesInfo}
            style={{flex: 1}}
            keyExtractor={city => city.id}
            renderItem={city => <WeatherCard city={city} onPress={() => {}} />}
            showsVerticalScrollIndicator={false}
            
            ListHeaderComponent={(
              <TitleWrapper>
                <TitleHome>Weather</TitleHome>
                <TitleHome primary>Today</TitleHome>
              </TitleWrapper>
            )}
          />
        </CitiesList>
      </HomeWrapper>
    </LayoutBase>
  );
};

export default Home;
