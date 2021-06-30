import React, {useContext, useState} from 'react';
import {ThemeContext} from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

import {
  TopBar,
  BackButton,
  TopBarContent,
  CityName,
  DateInfo,
  ActionButton,
} from './HeaderDetail.styles';
import {AppContext} from '../../../Context/AppContext/AppContext';
import {CityDetail} from '../../../graphql/interfaces';
import {formatUnixToDate} from '../../../utils/weatherDetails';

import BackArrow from '../../../assets/svg/left-arrow.svg';
import FavoriteStar from '../../../assets/svg/favorite-star.svg';
import AddSvg from '../../../assets/svg/add.svg';
import {saveStorage} from '../../../utils/asyncStorage';

const HeaderDetail = ({city}: {city: CityDetail}) => {
  const navigation = useNavigation();
  const {colors} = useContext(ThemeContext);
  const {cities, addCity} = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const isSavedCity = cities.includes(city.id);
  const date = formatUnixToDate(city.weather.timestamp);

  const handleActions = (cityId: string) => {
    if (!isSavedCity) {
      addCity(cityId);
      saveStorage({
        key: '@cities',
        item: [...cities, cityId],
      });
    } else {
      // TODO: implement Favorite
    }
  };

  return (
    <TopBar>
      <BackButton onPress={() => navigation.goBack()}>
        <BackArrow height="100%" width="100%" fill={colors.primary} />
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
          isFavorite={isFavorite}>
          {!isSavedCity && (
            <AddSvg height="100%" width="100%" fill={colors.white} />
          )}
          {isSavedCity && (
            <FavoriteStar
              height="100%"
              width="100%"
              fill={isFavorite ? colors.white : colors.gray4}
            />
          )}
        </ActionButton>
      </TopBarContent>
    </TopBar>
  );
};

export default HeaderDetail;
