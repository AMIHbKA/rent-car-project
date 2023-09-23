export const onlyDigit = value => {
  return value?.match(/\d+/g)?.join('') || '';
};
