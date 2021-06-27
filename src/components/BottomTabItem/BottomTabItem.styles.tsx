import styled from 'styled-components/native';

import {global} from '../../styles/GlobalStyles';

export const TabItem = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TabIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 14px;
  margin-bottom: 2px;
  width: 14px;
`;

interface TabLabelProps {
  active?: boolean;
}
export const TabLabel = styled.Text<TabLabelProps>`
  color: ${props =>
    props.active
      ? props.theme.colors.primary
      : props.theme.colors.inactiveIcon};
  font-family: ${props =>
    props.active ? global.font.weightSemiBold : global.font.weightMedium};
`;
