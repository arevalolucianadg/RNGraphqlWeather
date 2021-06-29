export const getLastSearch = (lastSearches: string[]) => {
  const lastPosition = lastSearches.length - 1;

  return lastSearches[lastPosition];
};
