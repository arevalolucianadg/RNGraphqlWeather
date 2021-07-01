import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';

import {
  NoResultsIcon,
  NoResultsText,
  NoResultsTitle,
  NoResultsWrapper,
} from './NoResults.styles';
import CloseSvg from '../../assets/svg/close.svg';

const NoResults = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <NoResultsWrapper>
      <NoResultsIcon>
        <CloseSvg height="100%" width="100%" fill={colors.text} />
      </NoResultsIcon>
      <NoResultsTitle>No results found</NoResultsTitle>
      <NoResultsText>Check your search and try again.</NoResultsText>
    </NoResultsWrapper>
  );
};

export default NoResults;
