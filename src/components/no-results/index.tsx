import React, { FunctionComponent, useContext } from 'react';

import { Close } from '@components/icons';
import { ThemeContext } from '@core/styles';
import {
  NoResultsIcon,
  NoResultsText,
  NoResultsTitle,
  NoResultsWrapper,
} from './styles';

export const NoResults: FunctionComponent = () => {
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
