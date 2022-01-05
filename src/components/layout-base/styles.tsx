import styled from 'styled-components/native';

export const LayoutSpacing = styled.View`
  flex: 1;
  padding: 32px 16px 0;
`;

export const LayoutSafe = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.background};
  flex: 1;
`;