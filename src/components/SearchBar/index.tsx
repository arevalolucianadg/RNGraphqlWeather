import React from 'react';

import useSearch from '../../hooks/useSearch';
import {SearchBarWrapper, SearchButton, SearchInput} from './SearchBar.styles';
import SearchIcon from '../../assets/svg/bottomTabIcons/search-icon.svg';

interface SearchBarProps {
  isFocus: boolean;
  searchValue: string;
  handleSearch: (inputValue: string) => void;
  handleSubmit: () => void;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar = ({
  isFocus,
  searchValue,
  handleSearch,
  handleSubmit,
  setIsFocus,
}: SearchBarProps) => {
  return (
    <SearchBarWrapper isFocus={isFocus}>
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
    </SearchBarWrapper>
  );
};

export default SearchBar;
