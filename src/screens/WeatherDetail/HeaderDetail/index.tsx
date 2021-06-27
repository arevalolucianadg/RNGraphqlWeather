import React, {useContext} from 'react';
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
import {CityDetail} from '../../../graphql/interfaces';
import {formatUnixToDate} from '../../../utils/weatherDetails';

import BackArrow from '../../../assets/svg/left-arrow.svg';
import FavoriteStar from '../../../assets/svg/favorite-star.svg';

const HeaderDetail = ({city}: {city: CityDetail}) => {
  const navigation = useNavigation();
  const {colors} = useContext(ThemeContext);

  const date = formatUnixToDate(city.weather.timestamp);

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
        <ActionButton>
          <FavoriteStar height="100%" width="100%" fill={colors.white} />
        </ActionButton>
      </TopBarContent>
    </TopBar>
  );
};

export default HeaderDetail;
