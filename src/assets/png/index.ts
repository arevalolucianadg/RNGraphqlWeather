// export const icon01d = require('./day-clear.png');
// export const icon01n = require('./night-clear.png');
// export const icon02d = require('./day-cloudy.png');
// export const icon02n = require('./night-cloudy.png');
// export const icon03d = require('./cloud.png');
// export const icon03n = require('./cloud.png');
// export const icon04d = require('./broken-clouds.png');
// export const icon04n = require('./broken-clouds.png');
// export const icon09d = require('./rain.png');
// export const icon09n = require('./rain.png');
// export const icon10d = require('./day-rain.png');
// export const icon10n = require('./night-rain.png');
// export const icon11d = require('./day-storm.png');
// export const icon11n = require('./night-storm.png');
// export const icon13d = require('./day-snow.png');
// export const icon13n = require('./night-snow.png');
// export const icon50d = require('./day-mist.png');
// export const icon50n = require('./night-mist.png');

interface iconTypes {
    [key: string]: number
}

const icons: iconTypes  = {
  icon01d: require('./day-clear.png'),
  icon01n: require('./night-clear.png'),
  icon02d: require('./day-cloudy.png'),
  icon02n: require('./night-cloudy.png'),
  icon03d: require('./cloud.png'),
  icon03n: require('./cloud.png'),
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
