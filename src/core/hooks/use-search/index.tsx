/* eslint-disable max-statements */
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ApolloError, useLazyQuery } from '@apollo/client';
import { useIsFocused } from '@react-navigation/native';
import { Keyboard } from 'react-native';

import { AppContext } from '../../../context/app-context/app-context';
import { ByNameQueryVars, CityByNameInfo } from '../../../graphql/interfaces';
import { GET_CITY_BY_NAME } from '../../../graphql/requests';
import { getLastSearch } from '../../utils/search';

/**
 * Types
 */

interface UseSearchHook {
  isFocus: boolean;
  lastSearches: string[];
  loading: boolean;
  searchValue: string;
  getLastSearch: (lastSearches: string[]) => string;
  handleSearch: (inputValue: string) => void;
  handleSubmit: () => void;
  setIsFocus: Dispatch<SetStateAction<boolean>>;
  error?: ApolloError;
  results?: CityByNameInfo;
}

/**
 * useSearch
 */

const useSearch = (): UseSearchHook => {
  const { temperatureUnit } = useContext(AppContext);
  const screenFocused = useIsFocused();

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [lastSearches, setLastSearches] = useState<string[]>([]);
  const [currentSearch, setCurrentSearch] = useState('');
  const [search, setSearch] = useState('');

  const [results, setResults] = useState<CityByNameInfo | undefined>(undefined);

  const handleSearch = useCallback((inputValue: string): void => {
    setCurrentSearch(inputValue);
    setIsFocus(true);
  }, []);

  const [loadData, { data, loading, error }] = useLazyQuery<
    CityByNameInfo,
    ByNameQueryVars
  >(GET_CITY_BY_NAME, {
    variables: {
      config: {
        units: temperatureUnit,
      },
      name: search,
    },
    fetchPolicy: 'no-cache',
  });

  const handleSubmit = (): void => {
    setSearch(currentSearch);

    loadData();

    Keyboard.dismiss();

    setCurrentSearch('');
    setLastSearches([...lastSearches, currentSearch]);
    setIsFocus(false);
  };

  const removeResults = (): void => {
    setResults(undefined);
  };

  useEffect(() => {
    if (!loading && data) {
      setResults(data);
    }
  }, [loading, data]);

  useEffect(() => {
    if (screenFocused) {
      removeResults();
    }
  }, [screenFocused]);

  return {
    error,
    isFocus,
    lastSearches,
    loading,
    results,
    searchValue: currentSearch,
    getLastSearch,
    handleSearch,
    handleSubmit,
    setIsFocus,
  };
};

export default useSearch;
