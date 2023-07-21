export const validateFractionDigits = (minFD: number | undefined, maxFD: number | undefined) => {
  const isMinFdExist = typeof minFD === 'number';
  const isMaxFdExist = typeof maxFD === 'number';

  if (isMinFdExist && (minFD < 0 || minFD > 20)) {
    throw new Error('The minFractionDigits must be between 0 and 20 inclusive');
  }

  if (isMaxFdExist && (maxFD < 0 || maxFD > 20)) {
    throw new Error('The maxFractionDigits must be between 0 and 20 inclusive');
  }

  if (isMinFdExist && isMaxFdExist && minFD > maxFD) {
    throw new Error('minFractionDigits value must be less than maxFractionDigits');
  }

  return true;
};
