import { EdgeInsets } from 'react-native-safe-area-context';
import { styled } from '@core/styles';

/**
 * Types
 */

interface BottomTabBarWrapperProps {
  insets: EdgeInsets;
}

/**
 * Components
 */

export const BottomTabBarWrapper = styled.View<BottomTabBarWrapperProps>`
  background-color: ${props => props.theme.colors.paper};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  ${({ insets: { bottom } }) => `padding: 10px 0 ${bottom}px`};
`;
