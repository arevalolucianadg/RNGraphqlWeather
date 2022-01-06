import styled, {css} from 'styled-components/native';

import {global} from '../../styles/global-styles';

interface IsFavoriteProps {
  isFavorite: boolean;
}
export const WeatherCardWrapper = styled.TouchableOpacity<IsFavoriteProps>`
  background-color: ${props =>
    props.isFavorite ? props.theme.colors.primary : props.theme.colors.paper};
  border-radius: ${global.border.RadiusMd};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  margin-bottom: 16px;
  padding: 16px;
`;

const textColor = css<IsFavoriteProps>`
  color: ${props =>
    props.isFavorite ? props.theme.colors.white : props.theme.colors.text};
  font-family: ${global.font.weightMedium};
`;

export const CityName = styled.Text<IsFavoriteProps>`
  ${textColor}
  font-family: ${global.font.weightMedium};
  font-size: 22px;
  margin-bottom: 8px;
`;
export const Info = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
export const CityTemp = styled.Text<IsFavoriteProps>`
  ${textColor}
  font-family: ${global.font.weightBold};
  font-size: 18px;
  letter-spacing: 0.4px;
  margin-right: 8px;
`;
export const CitySummaryTitle = styled.Text<IsFavoriteProps>`
  ${textColor}
  font-family: ${global.font.weightLight};
  font-size: 14px;
`;

export const WeatherIcon = styled.Image`
  height: 70px;
  width: 70px;
`;
