import { styled } from '@core/styles';

interface LayoutProps {
  spacing: boolean;
}

export const Layout = styled.View<LayoutProps>`
  ${({ spacing }) => spacing && 'padding: 32px 16px 0'};

  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;
