import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';

export const LayoutBg = styled(ScrollView)`
  background-color: ${props => props.theme.colors.background};
  flex: 1;
`;
