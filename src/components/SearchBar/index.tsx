import React, {useContext} from 'react';

import {SearchBarWrapper, SearchButton, SearchInput} from './SearchBar.styles';
import SearchIcon from '../../assets/svg/bottomTabIcons/search-icon.svg';
import { AppContext } from '../../Context/AppContext/AppContext';
import { ThemeContext } from 'styled-components';

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

  const {theme} = useContext(AppContext);
  const {colors} = useContext(ThemeContext);

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
