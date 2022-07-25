import React, { FunctionComponent, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { AppContext } from '../../context/app-context/app-context';
import { SearchIcon } from '../icons';
import { SearchBarWrapper, SearchButton, SearchInput } from './styles';

/**
 * Types
 */
interface SearchBarProps {
  isFocus: boolean;
  searchValue: string;
  handleSearch: (inputValue: string) => void;
  handleSubmit: () => void;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
  isFocus,
  searchValue,
  handleSearch,
  handleSubmit,
  setIsFocus,
}) => {
  const { theme } = useContext(AppContext);
  const { colors } = useContext(ThemeContext);

  return (
    <SearchBarWrapper isFocus={isFocus}>
      <SearchInput
        autoFocus
        keyboardType="web-search"
        onChangeText={handleSearch}
        onFocus={() => setIsFocus(true)}
        onSubmitEditing={handleSubmit}
        placeholder="Country name"
        placeholderTextColor={theme === 'light' ? colors.gray2 : colors.gray5}
        value={searchValue}
      />
      <SearchButton onPress={handleSubmit}>
        <SearchIcon height="100%" width="100%" fill="#fff" />
      </SearchButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
