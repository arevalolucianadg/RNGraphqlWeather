import { global } from '../../core/styles/global-styles';
import styled from '../../core/styles/styled-components';

export const TitleWrapper = styled.View`
  margin-bottom: 40px;
`;

export const ResultsView = styled.View`
  flex: 1;
  margin-top: 40px;
`;

export const ResultTitle = styled.View`
  margin-bottom: 40px;
`;

export const ResultText = styled.Text`
  color: ${props => props.theme.colors.gray3};
  font-family: ${global.font.weightRegular};
  font-size: 12px;
  margin-right: 16px;
  text-transform: uppercase;
`;
export const ResultValue = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${global.font.weightBold};
  font-size: 24px;
`;
