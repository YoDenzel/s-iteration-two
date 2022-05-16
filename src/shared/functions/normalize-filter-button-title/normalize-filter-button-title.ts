export const normalizeFilterButtonTitle = (title: string) => {
  const MAX_LENGTH = 9;
  if (title.length > MAX_LENGTH) return title.slice(0, MAX_LENGTH) + '...';
  return title;
};
