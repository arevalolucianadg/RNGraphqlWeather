export interface CitiesInfo {
  getCityById: WeatherInfo[] | null;
}

export interface QueryVars {
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

export interface CityInfo {
  getCityById: CityDetail[] | null;
}

export interface CityDetail {
  id: string;
  name: string;
  country: string;
  weather: WeatherDetail;
}

export interface WeatherDetail {
  summary: Summary;
  temperature: TemperatureDetail;
  wind: Wind;
  clouds: Clouds;
  timestamp: number;
}

export interface TemperatureDetail {
  actual: number;
  feelsLike: number;
  min: number;
  max: number;
}

export interface Wind {
  speed: number;
}

export interface Clouds {
  all: number;
  visibility: number;
  humidity: number;
}
