import React, { FunctionComponent } from 'react';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { View } from 'react-native';

import {
  Heading,
  LayoutBase,
  LoadingView,
  NoResults,
  SafeArea,
  SearchBar,
  WeatherCard,
} from '@components';
import { useSearch } from '@core/hooks';
import { RootStackParamList, RootTabParamList } from '@routes/types';
import {
  TitleWrapper,
  ResultsView,
  ResultTitle,
  ResultValue,
  ResultText,
} from './styles';

/**
 * Types
 */

type SearchScreen = CompositeScreenProps<
  StackScreenProps<RootTabParamList, 'Search'>,
  StackScreenProps<RootStackParamList>
>;

/**
 * Search
 */

const Search: FunctionComponent<SearchScreen> = ({
  navigation: { navigate },
}) => {
  const {
    error,
    isFocus,
    lastSearches,
    loading,
    results,
    searchValue,
    getLastSearch,
    handleSearch,
    handleSubmit,
    setIsFocus,
  } = useSearch();

  if (error) return <View />;

  const handleDetailPress = (cityId: string): void => {
    navigate('WeatherDetail', {
      cityId,
    });
  };

  return (
    <SafeArea>
      <LayoutBase spacing>
        <View>
          <TitleWrapper>
            <Heading>Search</Heading>
          </TitleWrapper>
          <SearchBar
            isFocus={isFocus}
            searchValue={searchValue}
            handleSearch={handleSearch}
            handleSubmit={handleSubmit}
            setIsFocus={setIsFocus}
          />
        </View>
        <ResultsView>
          {loading && <LoadingView />}
          {!loading && results?.getCityByName && (
            <>
              <ResultTitle>
                <ResultText>Last search</ResultText>
                <ResultValue>{getLastSearch(lastSearches)}</ResultValue>
              </ResultTitle>
              <WeatherCard
                isFavorite={false}
                city={results.getCityByName}
                onPress={id => handleDetailPress(id)}
              />
            </>
          )}
          {!loading && results?.getCityByName === null && <NoResults />}
        </ResultsView>
      </LayoutBase>
    </SafeArea>
  );
};

export default Search;
