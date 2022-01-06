import { global } from '../../core/styles/global-styles';
import styled from '../../core/styles/styled-components';

export const TitleWrapper = styled.View`
  margin-bottom: 40px;
`;

export const SettingGroup = styled.View`
  margin-bottom: 48px;
`;

export const SettingRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const SettingTitle = styled.Text`
  color: ${props => props.theme.colors.gray3};
  font-family: ${global.font.weightMedium};
  font-size: 14px;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const SettingItem = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${global.font.weightMedium};
  font-size: 18px;
`;
