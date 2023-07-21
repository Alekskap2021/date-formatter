import { validateFractionDigits } from './numberFormatter.helper';
import { NumberFormatterOpt } from './numberFormatter.types';

const defaultOpt: NumberFormatterOpt = {
  maxFractionDigits: 0,
  minFractionDigits: 0,
  locale: undefined,
  style: 'decimal',
};

export const numberFormatter = (num: number, options: NumberFormatterOpt = defaultOpt) => {
  const { maxFractionDigits, minFractionDigits = 0, locale, style = 'decimal' } = options;

  validateFractionDigits(minFractionDigits, maxFractionDigits);

  const intlOpt: Intl.NumberFormatOptions = {
    style: style,
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: maxFractionDigits,
  };

  const intl = new Intl.NumberFormat(locale, intlOpt);

  return intl.format(num);
};

console.log(numberFormatter(1000000, { style: 'decimal' }));
console.log(numberFormatter(0.5673, { style: 'percent' }));
