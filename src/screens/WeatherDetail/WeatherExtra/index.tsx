import React, {useContext} from 'react';

import {AppContext} from '../../../Context/AppContext/AppContext';
import {CityDetail} from '../../../graphql/interfaces';
import {Button} from '../../../components';
import {
  ExtraItems,
  ExtraItem,
  ItemTitle,
  ItemValue,
  WeatherExtraWrapper,
} from './WeatherExtra.styles';
import {saveStorage} from '../../../utils/asyncStorage';
import {KEY_CITIES_STORE} from '../../../utils/constants';

const WeatherExtra = ({city}: {city: CityDetail}) => {
  const {cities, updateCities} = useContext(AppContext);

  const {wind, clouds} = city.weather;
  const isSavedCity = cities.includes(city.id);

  const removeCountry = (cityId: string) => {
    const filtered = cities.filter((city: string) => city !== cityId);
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
          style={{marginBottom: 10}}
          textButton="Remove city"
          themeButton="danger"
        />
      )}
    </WeatherExtraWrapper>
  );
};

export default WeatherExtra;
