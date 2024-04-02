export const validObjectNotBlank = (object: object): boolean => {
  return Object.values(object).every((value) => validValueNotBlank(value));
};

export const validValueNotBlank = (value: string | number): boolean => {
  if (typeof value === 'string') {
    return value.trim() !== '';
  } else if (typeof value === 'number') {
    return !isNaN(value);
  } else {
    return value !== null && value !== undefined;
  }
};
