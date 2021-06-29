import React, {useEffect} from 'react';
import {View} from 'react-native';

import useSearch from '../../hooks/useSearch';
import {
  Heading,
  LayoutBase,
  LoadingView,
  WeatherCard,
  NoResults,
} from '../../components';
import {LayoutSpacing} from '../../components/LayoutBase/LayoutBase.styles';
import {
  TitleWrapper,
  ResultsView,
  ResultTitle,
  ResultValue,
  ResultText,
} from './styles';
import SearchBar from '../../components/SearchBar';

const Search = () => {
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

  if (error) return;

  return (
    <LayoutBase>
      <LayoutSpacing>
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
              <WeatherCard city={results.getCityByName} />
            </>
          )}
          {!loading && results?.getCityByName === null && <NoResults />}
        </ResultsView>
      </LayoutSpacing>
    </LayoutBase>
  );
};

export default Search;
