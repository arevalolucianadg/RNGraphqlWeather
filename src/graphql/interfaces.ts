export interface CitiesInfo {
  getCityById: WeatherInfo[] | null;
}

export interface CitiesInfoVars {
  id: string[];
  config: Config;
}

export interface Config {
  units: string;
}

export interface WeatherInfo {
  id: string;
  name: string;
  weather: Weather;
}

export interface Weather {
  summary: Summary;
  temperature: Temperature;
}

export interface Summary {
  icon: string;
  title: string;
}

export interface Temperature {
  actual: number;
}
