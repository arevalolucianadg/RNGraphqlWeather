import React from 'react';
import { render } from '@testing-library/react-native';

import WeatherCard from '..';
import WithTheme from '../../../core/styles/theme-provider';

describe('weather card component', () => {
  const cityMock = {
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

  it('should render a snapshot of non-favorite component', () => {
    const result = render(
      <WithTheme>
        <WeatherCard isFavorite={false} city={cityMock} onPress={jest.fn()} />
      </WithTheme>,
    );

    expect(result.toJSON()).toMatchSnapshot();
  });

  it('should render a snapshot of favorite component', () => {
    const result = render(
      <WithTheme>
        <WeatherCard isFavorite city={cityMock} onPress={jest.fn()} />
      </WithTheme>,
    );

    expect(result.toJSON()).toMatchSnapshot();
  });

  it('should render the city name', () => {
    const result = render(
      <WithTheme>
        <WeatherCard isFavorite={false} city={cityMock} onPress={jest.fn()} />
      </WithTheme>,
    );

    expect(result.getByText(cityMock.name)).toBeDefined();
  });
});
