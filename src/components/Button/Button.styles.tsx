import styled from 'styled-components/native';
import {global} from '../../styles/GlobalStyles';
import {handleBGColor, handleTextColor} from '../../utils/theme';

interface ButtonWrapperProps {
  themeButton?: 'primary' | 'secondary' | 'danger' | 'warning' | undefined;
}

export const ButtonWrapper = styled.TouchableOpacity<ButtonWrapperProps>`
  background-color: ${props =>
    handleBGColor({color: props.themeButton, theme: props.theme})};
  border-radius: ${global.border.RadiusMd};
  height: 60px;
  justify-content: center;
  width: 100%;
`;

interface ButtonTextProps {
  themeText?: 'primary' | 'secondary' | 'danger' | 'warning' | undefined;
}

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${props =>
    handleTextColor({color: props.themeText, theme: props.theme})};
  font-family: ${global.font.weightMedium};
  font-size: 16px;
  text-align: center;
`;
