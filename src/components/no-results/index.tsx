import React, { FunctionComponent, useContext } from 'react';
import { ThemeContext } from '../../core/styles';
import { Close } from '../icons';

import {
  NoResultsIcon,
  NoResultsText,
  NoResultsTitle,
  NoResultsWrapper,
} from './styles';

const NoResults: FunctionComponent = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <NoResultsWrapper>
      <NoResultsIcon>
        <Close height="100%" width="100%" fill={colors.text} />
      </NoResultsIcon>
      <NoResultsTitle>No results found</NoResultsTitle>
      <NoResultsText>Check your search and try again.</NoResultsText>
    </NoResultsWrapper>
  );
};

export default NoResults;
