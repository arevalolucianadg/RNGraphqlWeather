import styled from 'styled-components/native';

import {global} from '../../styles/GlobalStyles';

export const BottomTabBarWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: ${global.spacing.base} 0;
`;
