import React from 'react';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';

import WeatherCard from './';
import {light} from '../../styles/theme';

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

describe('Weather Card', () => {
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

  it('Renderiza correctamente', () => {
    const {toJSON} = render(
      <ThemeProvider theme={light}>
        <WeatherCard isFavorite={false} city={city} />
      </ThemeProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('Muestra el nombre de la ciudad', () => {
    const WeatherName = render(
      <ThemeProvider theme={light}>
        <WeatherCard isFavorite={false} city={city} />
      </ThemeProvider>,
    );
    expect(WeatherName.getByText(city.name)).toBeTruthy;
  });
});
