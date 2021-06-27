import styled from 'styled-components/native';
import {global} from '../../styles/GlobalStyles';

export const HomeWrapper = styled.View`
  flex: 1;
`;

export const TitleWrapper = styled.View`
  margin-bottom: 40px;
`;

interface TitleHomeProps {
  primary?: boolean;
}
export const TitleHome = styled.Text<TitleHomeProps>`
  color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.text};
  font-family: ${global.font.weightBold};
  font-size: 32px;
  line-height: 38px;
`;

export const CitiesList = styled.View`
  flex-grow: 1;
  width: 100%;
`;
