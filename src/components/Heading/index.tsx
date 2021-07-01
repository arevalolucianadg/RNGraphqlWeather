import React from 'react';

import {TitleText} from './Heading.styles';

interface HeadingProps {
  primary?: boolean;
  children: string;
}

const Heading = ({primary, children}: HeadingProps) => {
  return <TitleText primary={primary}>{children}</TitleText>;
};

export default Heading;
