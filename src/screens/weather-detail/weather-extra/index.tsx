import React, { FunctionComponent, useContext } from 'react';

import { Button } from '@components';
import { AppContext } from '@core/context/app-context';
import { saveStorage, KEY_CITIES_STORE } from '@core/utils';
import { CityDetail } from '@models/types';
import {
  ExtraItems,
  ExtraItem,
  ItemTitle,
  ItemValue,
  WeatherExtraWrapper,
} from './styles';

/**
 * Constants
 */
const STYLES_BUTTON = {
  marginBottom: 10,
};

const WeatherExtra: FunctionComponent<{ city: CityDetail }> = ({ city }) => {
  const { cities, updateCities } = useContext(AppContext);

  const { wind, clouds } = city.weather;
  const isSavedCity = cities.includes(city.id);

  const removeCountry = (cityId: string): void => {
    const filtered = cities.filter(
      (filteredCity: string) => filteredCity !== cityId,
    );
    updateCities(filtered);
    saveStorage({
      key: KEY_CITIES_STORE,
      item: filtered,
    });
  };

  return (
    <WeatherExtraWrapper>
      <ExtraItems>
        <ExtraItem>
          <ItemTitle>Wind</ItemTitle>
          <ItemValue>{`${wind.speed} m/s`}</ItemValue>
        </ExtraItem>
        <ExtraItem>
          <ItemTitle>Clouds</ItemTitle>
          <ItemValue>{`${clouds.all}  %`}</ItemValue>
        </ExtraItem>
        <ExtraItem>
          <ItemTitle>Visibility</ItemTitle>
          <ItemValue>{`${clouds.visibility}`}</ItemValue>
        </ExtraItem>
        <ExtraItem>
          <ItemTitle>Humidity</ItemTitle>
          <ItemValue>{`${clouds.humidity}  %`}</ItemValue>
        </ExtraItem>
      </ExtraItems>
      {isSavedCity && (
        <Button
          onPress={() => removeCountry(city.id)}
          style={STYLES_BUTTON}
          textButton="Remove city"
          themeButton="danger"
        />
      )}
    </WeatherExtraWrapper>
  );
};

export default WeatherExtra;
