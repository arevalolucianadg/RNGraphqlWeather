import styled from 'styled-components/native';
import { global } from '../../../styles/GlobalStyles';

export const TopBar = styled.View`
  display: flex;
  flex-direction: row;
  height: 60px;
`;

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  height: 100%;
  width: 32px;
`;

export const TopBarContent = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 16px;
`;

export const CityName = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: ${global.font.weightSemiBold};
  font-size: 22px;
`;

export const DateInfo = styled.Text`
  color: ${props => props.theme.colors.gray3};
  font-family: ${global.font.weightRegular};
  font-size: 14px;
  text-transform: uppercase;
`;

export const ActionButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.yellow};
  border-radius: 36px;
  height: 40px;
  padding: 6px;
  width: 40px;
`;