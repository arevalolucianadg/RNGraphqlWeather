import styled from 'styled-components/native';
import {global} from '../../styles/global-styles';

export const NoResultsWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const NoResultsIcon = styled.View`
  height: 60px;
  margin-bottom: 32px;
  width: 60px;
`;

export const NoResultsTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${global.font.weightBold};
  font-size: 24px;
`;
export const NoResultsText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${global.font.weightRegular};
  font-size: 14px;
`;
