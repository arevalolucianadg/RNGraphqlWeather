interface WeatherDetailScreenParams {
  cityId: string;
}

export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  Main: undefined;
  WeatherDetail: WeatherDetailScreenParams;
};
