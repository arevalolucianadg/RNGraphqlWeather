import React, { FunctionComponent } from 'react';

import { TitleText } from './styles';

/**
 * Types
 */
interface HeadingProps {
  primary?: boolean;
  children: string;
}

export const Heading: FunctionComponent<HeadingProps> = ({
  primary,
  children,
}) => <TitleText primary={primary}>{children}</TitleText>;
