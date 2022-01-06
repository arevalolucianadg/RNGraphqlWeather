interface iconTypes {
    [key: string]: number
}

const icons: iconTypes  = {
  icon01d: require('./day-clear.png'),
  icon01n: require('./night-clear.png'),
  icon02d: require('./day-cloudy.png'),
  icon02n: require('./night-cloudy.png'),
  icon03d: require('./day-cloudy.png'),
  icon03n: require('./night-cloudy.png'),
  icon04d: require('./broken-clouds.png'),
  icon04n: require('./broken-clouds.png'),
  icon09d: require('./rain.png'),
  icon09n: require('./rain.png'),
  icon10d: require('./day-rain.png'),
  icon10n: require('./night-rain.png'),
  icon11d: require('./day-storm.png'),
  icon11n: require('./night-storm.png'),
  icon13d: require('./day-snow.png'),
  icon13n: require('./night-snow.png'),
  icon50d: require('./day-mist.png'),
  icon50n: require('./night-mist.png'),
};

export default icons;
