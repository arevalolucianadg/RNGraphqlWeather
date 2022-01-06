import styled from 'styled-components/native';
import {global} from '../../../core/styles/global-styles';

export const WeatherExtraWrapper = styled.View`
  background-color: ${props => props.theme.colors.primary};
  border-top-left-radius: ${global.border.Radius};
  border-top-right-radius: ${global.border.Radius};
  display: flex;
  flex: 1;
  padding: 32px 16px 0;
`;

export const ExtraItems = styled.View`
flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ExtraItem = styled.View`
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: ${global.border.RadiusMd};
  margin-bottom: 16px;
  padding: 24px;
  width: 48%;
`;
export const ItemTitle = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${global.font.weightRegular};
  font-size: 14px;
  text-transform: uppercase;
`;
export const ItemValue = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${global.font.weightSemiBold};
  font-size: 24px;
`;
