import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherCard from '..';
import { ThemeProvider } from '../../../core/styles';

import { light } from '../../../core/styles/theme';

const mockedDispatch = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

describe('weather card component', () => {
  const city = {
    id: '2267057',
    name: 'Lisbon',
    weather: {
      summary: {
        icon: '03n',
        title: 'Clouds',
      },
      temperature: {
        actual: 15.81,
      },
    },
  };

  it('should render a snapshot', () => {
    const { toJSON } = render(
      <ThemeProvider theme={light}>
        <WeatherCard isFavorite={false} city={city} onPress={jest.fn()} />
      </ThemeProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the city name', () => {
    const WeatherName = render(
      <ThemeProvider theme={light}>
        <WeatherCard isFavorite={false} city={city} onPress={jest.fn()} />
      </ThemeProvider>,
    );

    expect(WeatherName.getByText(city.name)).toBeDefined();
  });
});
