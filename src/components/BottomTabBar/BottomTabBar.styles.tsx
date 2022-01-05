import styled from 'styled-components/native';

import {global} from '../../styles/global-styles';

export const BottomTabBarWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.paper};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px 0;
`;
