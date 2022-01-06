import { global } from '../../core/styles/global-styles';
import styled from '../../core/styles/styled-components';

interface SearchBarProps {
  isFocus: boolean;
}

export const SearchBarWrapper = styled.View<SearchBarProps>`
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
