import {useQuery} from '@apollo/client';

import {GET_WEATHER_INFO} from '../graphql/requests';
import {CitiesInfo, CitiesInfoVars} from '../graphql/interfaces';

interface useWeatherProps {
  variables: CitiesInfoVars;
  type: 'INFO' | 'DETAIL';
}

const useWeather = ({variables, type}: useWeatherProps) => {
  switch (type) {
    case 'INFO':
      const {data, loading, error} = useQuery<CitiesInfo, CitiesInfoVars>(
        GET_WEATHER_INFO,
        {variables},
      );
      return {data, loading, error};

    default:
      return {data: null, loading: false, error: null}
  }
};

export default useWeather;
