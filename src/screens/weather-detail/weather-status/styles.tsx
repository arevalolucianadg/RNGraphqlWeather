import { global, styled } from '../../../core/styles';
import { isLightTheme } from '../../../core/utils/theme';

export const StatusWrapper = styled.View`
  margin: 24px 0;
`;
export const StatusMain = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const Temp = styled.Text`
  color: ${({ theme: { colors, themeTitle } }) =>
    isLightTheme(themeTitle) ? colors.gray1 : colors.white};
  font-family: ${global.font.weightBold};
  font-size: 48px;
  margin-bottom: -10px;
`;
export const Title = styled.Text`
  color: ${({ theme: { colors, themeTitle } }) =>
    isLightTheme(themeTitle) ? colors.gray1 : colors.white};
  font-family: ${global.font.weightLight};
  font-size: 18px;
`;

export const WeatherIcon = styled.Image`
  height: 120px;
  width: 120px;
`;

export const StatusExtra = styled.View`
  border: 2px solid ${props => props.theme.colors.gray4};
  border-radius: ${global.border.RadiusSm};
  flex-direction: row;
  justify-content: space-evenly;
  margin: 32px auto 0;
  padding: 12px 0;
  width: 90%;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ItemTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 12px;
  margin-right: 8px;
  text-transform: uppercase;
`;
export const ItemValue = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${global.font.weightSemiBold};
  font-size: 14px;
`;
