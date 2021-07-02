import {useContext, useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {useLazyQuery} from '@apollo/client';
import {Keyboard} from 'react-native';

import {ByNameQueryVars, CityByNameInfo} from '../graphql/interfaces';
import {GET_CITY_BY_NAME} from '../graphql/requests';
import {getLastSearch} from '../utils/search';
import { AppContext } from '../Context/AppContext/AppContext';

const useSearch = () => {
  const {temperatureUnit} = useContext(AppContext);
  const screenFocused = useIsFocused();
  
  const [searchValue, setSearchValue] = useState('');
  const [lastSearches, setLastSearches] = useState<string[]>([]);
  const [isFocus, setIsFocus] = useState(false);
  const [results, setResults] = useState<CityByNameInfo | undefined>(undefined);


  const [variables, setVariables] = useState({
    name: '',
    config: {
      units: temperatureUnit,
    },
  });
  

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

  const removeResults = () => {
    setResults(undefined);
  };

  useEffect(() => {
    if (!loading && data) {
      setResults(data);
    }
  }, [loading, data]);

  useEffect(() => {
    screenFocused && removeResults();
  }, [screenFocused]);

  return {
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
  };
};

export default useSearch;
