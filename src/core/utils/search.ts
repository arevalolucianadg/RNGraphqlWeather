export const getLastSearch = (lastSearches: string[]): string => {
  const lastPosition = lastSearches.length - 1;

  return lastSearches[lastPosition];
};
