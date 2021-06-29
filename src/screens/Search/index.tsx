import React, {useEffect, useState} from 'react';
import {Keyboard, View} from 'react-native';
import {useLazyQuery} from '@apollo/client';

import {
  CityByNameInfo,
  ByNameQueryVars,
} from '../../graphql/interfaces';
import {GET_CITY_BY_NAME} from '../../graphql/requests';
import {
  Heading,
  LayoutBase,
  LoadingView,
  WeatherCard,
  NoResults,
} from '../../components';
import {LayoutSpacing} from '../../components/LayoutBase/LayoutBase.styles';
import {
  SearchBar,
  SearchButton,
  SearchInput,
  TitleWrapper,
  ResultsView,
  ResultTitle,
  ResultValue,
  ResultText,
} from './styles';

import SearchIcon from '../../assets/svg/bottomTabIcons/search-icon.svg';
import {useIsFocused} from '@react-navigation/native';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [lastSearches, setLastSearches] = useState<string[]>([]);
  const [variables, setVariables] = useState({
    name: '',
    config: {
      units: 'metric',
    },
  });
  const [isFocus, setIsFocus] = useState(false);
  const [results, setResults] = useState<CityByNameInfo | undefined>(undefined);

  const screenFocused = useIsFocused();

  const handleSearch = (inputValue: string) => {
    setSearchValue(inputValue);
    setIsFocus(true);
  };

  const [loadData, {data, loading, error}] = useLazyQuery<
    CityByNameInfo,
    ByNameQueryVars
  >(GET_CITY_BY_NAME, {variables, fetchPolicy: 'no-cache'});

  const handleSubmit = () => {
    setVariables({
      ...variables,
      name: searchValue,
    });

    loadData();

    Keyboard.dismiss();
    setLastSearches([...lastSearches, searchValue]);
    setSearchValue('');
    setIsFocus(false);
  };

  const getLastSearch = (lastSearches: string[]) => {
    const lastPosition = lastSearches.length - 1;

    return lastSearches[lastPosition];
  };

  if (error) return;

  useEffect(() => {
    if (!loading && data) {
      setResults(data);
    }
  }, [loading, data]);


  const removeResults = () => {
    setResults(undefined);
  }

  useEffect(() => {
    screenFocused && removeResults();
    console.log('S', screenFocused);
  }, [screenFocused])

  return (
    <LayoutBase>
      <LayoutSpacing>
        <View>
          <TitleWrapper>
            <Heading>Search</Heading>
          </TitleWrapper>

          <SearchBar isFocus={isFocus}>
            <SearchInput
              autoFocus
              keyboardType="web-search"
              onChangeText={handleSearch}
              onFocus={() => setIsFocus(true)}
              onSubmitEditing={handleSubmit}
              placeholder="Country name"
              value={searchValue}
            />
            <SearchButton onPress={handleSubmit}>
              <SearchIcon height="100%" width="100%" fill="#fff" />
            </SearchButton>
          </SearchBar>
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
