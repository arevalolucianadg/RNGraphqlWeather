import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export const formatUnixToDate = (timestamp: number) => {
  const formatDate = dayjs.unix(timestamp).format();
  return dayjs(formatDate).format('ddd, DD MMMM');
};
