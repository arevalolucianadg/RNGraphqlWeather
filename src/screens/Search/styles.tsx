import styled from 'styled-components/native';
import {global} from '../../styles/GlobalStyles';

export const TitleWrapper = styled.View`
  margin-bottom: 40px;
`;
interface SearchBarProps {
  isFocus: boolean;
}

export const SearchBar = styled.View<SearchBarProps>`
  background-color: ${props => props.theme.colors.paper};
  border: 2px solid
    ${props => (props.isFocus ? props.theme.colors.primary : 'transparent')};
  border-radius: ${global.border.Radius};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;

export const SearchInput = styled.TextInput`
  color: ${props => props.theme.colors.text};
  flex: 1;
  font-family: ${global.font.weightMedium};
  font-size: 16px;
  padding-left: 15px;
`;

const BUTTON_SIZE = '50px';

export const SearchButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${global.border.Radius};
  height: ${BUTTON_SIZE};
  margin-left: 16px;
  padding: 16px;
  width: ${BUTTON_SIZE};
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
