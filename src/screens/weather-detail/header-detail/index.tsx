import React, { FunctionComponent, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { Add, BackArrow, FavoriteStar } from '../../../components/icons';
import { AppContext } from '../../../context/app-context/app-context';
import { ThemeContext } from '../../../core/styles';
import { saveStorage } from '../../../core/utils/async-storage';
import {
  KEY_FAV_CITIES_STORE,
  KEY_CITIES_STORE,
} from '../../../core/utils/constants';
import { formatUnixToDate } from '../../../core/utils/weather-details';
import { CityDetail } from '../../../graphql/interfaces';
import {
  TopBar,
  BackButton,
  TopBarContent,
  CityName,
  DateInfo,
  ActionButton,
} from './styles';

const HeaderDetail: FunctionComponent<{ city: CityDetail }> = ({ city }) => {
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);
  const {
    cities,
    favoriteCities,
    theme,
    addCity,
    addFavoriteCity,
    updateFavorites,
  } = useContext(AppContext);

  const isSavedCity = cities.includes(city.id);
  const isFavoriteCity = favoriteCities.includes(city.id);
  const date = formatUnixToDate(city.weather.timestamp);

  const handleActions = (cityId: string): void => {
    if (!isSavedCity) {
      addCity(cityId);
      saveStorage({
        key: KEY_CITIES_STORE,
        item: [...cities, cityId],
      });
      return;
    }

    if (!isFavoriteCity) {
      addFavoriteCity(cityId);
      saveStorage({
        key: KEY_FAV_CITIES_STORE,
        item: [...favoriteCities, cityId],
      });
    }

    const filtered = favoriteCities.filter(
      (favCity: string) => favCity !== city.id,
    );
    updateFavorites(filtered);
    saveStorage({
      key: KEY_FAV_CITIES_STORE,
      item: filtered,
    });
  };

  return (
    <TopBar>
      <BackButton onPress={() => navigation.goBack()}>
        <BackArrow
          height="100%"
          width="100%"
          fill={theme === 'light' ? colors.primary : colors.white}
        />
      </BackButton>
      <TopBarContent>
        <View>
          <CityName>
            {city.name}, {city.country}
          </CityName>
          <DateInfo>{date}</DateInfo>
        </View>
        <ActionButton
          onPress={() => handleActions(city.id)}
          isSaved={isSavedCity}
          isFavorite={isFavoriteCity}
        >
          {!isSavedCity && (
            <Add height="100%" width="100%" fill={colors.white} />
          )}
          {isSavedCity && (
            <FavoriteStar
              height="100%"
              width="100%"
              fill={isFavoriteCity ? colors.white : colors.gray4}
            />
          )}
        </ActionButton>
      </TopBarContent>
    </TopBar>
  );
};

export default HeaderDetail;
