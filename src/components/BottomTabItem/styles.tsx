import styled from 'styled-components/native';

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
  color: ${props => (props.active ? '#504ED3' : '#828282')};
  font-weight: ${props => (props.active ? 600 : 500)};
`;
