import {Dispatch, SetStateAction, useContext, useEffect, useState} from 'react';
import {ApolloError, useLazyQuery} from '@apollo/client';
import {useIsFocused} from '@react-navigation/native';
import {Keyboard} from 'react-native';

import { AppContext } from '../../../context/app-context/app-context';
import {ByNameQueryVars, CityByNameInfo} from '../../../graphql/interfaces';
import {GET_CITY_BY_NAME} from '../../../graphql/requests';
import { ISwitchSelectorOption } from '../../../types/switch';
import {getLastSearch} from '../../../utils/search';

/**
 * Types
 */
interface UseSearchHook {
  isFocus: boolean;
  lastSearches: string[];
  loading: boolean;
  searchValue: string,
  getLastSearch: (lastSearches: string[]) => string;
  handleSearch: (inputValue: string) => void;
  handleSubmit: () => void;
  setIsFocus: Dispatch<SetStateAction<boolean>>;
  error?: ApolloError;
  results?: CityByNameInfo;
}

interface ConfigProps {
  units: string | number | ISwitchSelectorOption;
}

interface VariableProps {
  name: string;
  config: ConfigProps;
}

interface SearchProps {
  lastSearches: string[];
  searchValue: string;
  variables: VariableProps;
}

const useSearch = (): UseSearchHook => {
  const {temperatureUnit} = useContext(AppContext);
  const screenFocused = useIsFocused();
  
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [search, setSearch] = useState<SearchProps>({
    lastSearches: [],
    searchValue: '',
    variables: {
      name: '',
      config: {
        units: temperatureUnit,
      },
    }
  });

  const [results, setResults] = useState<CityByNameInfo | undefined>(undefined);
  

  const handleSearch = (inputValue: string): void => {
    setSearch({
      ...search,
      searchValue: inputValue
    });
    setIsFocus(true);
  };

  const [loadData, {data, loading, error}] = useLazyQuery<
    CityByNameInfo,
    ByNameQueryVars
  >(GET_CITY_BY_NAME, {
    variables: search.variables, 
    fetchPolicy: 'no-cache'
  });

  const handleSubmit = (): void => {
    setSearch({
      ...search,
      variables: {
        ...search.variables,
        name: search.searchValue,
      }
    });

    loadData();

    Keyboard.dismiss();
    setSearch({
      ...search,
      lastSearches: [
        ...search.lastSearches,
        search.searchValue,
      ],
      searchValue: '',
    });
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
    if(screenFocused) {
      removeResults();
    }
  }, [screenFocused]);

  return {
    error,
    isFocus,
    lastSearches: search.lastSearches,
    loading,
    results,
    searchValue: search.searchValue,
    getLastSearch,
    handleSearch,
    handleSubmit,
    setIsFocus,
  };
};

export default useSearch;
