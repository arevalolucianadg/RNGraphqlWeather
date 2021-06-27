import {useQuery} from '@apollo/client';

import {GET_WEATHER_INFO, GET_WEATHER_DETAIL} from '../graphql/requests';
import { CitiesInfo, QueryVars, CityInfo } from '../graphql/interfaces';

interface useWeatherProps {
  variables: QueryVars;
  type: 'INFO' | 'DETAIL';
}

const useWeather = ({variables, type}: useWeatherProps) => {
  
  switch (type) {
    case 'INFO':
      const {
        data: dataInfo,
        loading: loadingInfo,
        error: errorInfo,
      } = useQuery<CitiesInfo, QueryVars>(GET_WEATHER_INFO, {variables});
      return {data: dataInfo, loading: loadingInfo, error: errorInfo};

    case 'DETAIL':
      const {
        data: dataDetail,
        loading: loadingDetail,
        error: errorDetail,
      } = useQuery<CityInfo, QueryVars>(GET_WEATHER_DETAIL, {variables});
      return {data: dataDetail, loading: loadingDetail, error: errorDetail};

    default:
      return {data: null, loading: false, error: null};
  }
};

export default useWeather;
