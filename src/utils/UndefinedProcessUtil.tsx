export const cookieNumUtil = (variable: string | number): string | number => {
  return variable !== 'undefined' ? variable : 0;
};
