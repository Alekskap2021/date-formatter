import { CurrencyFormatterOpt } from './currencyFormatter.types';

const defaultOpt: CurrencyFormatterOpt = {
  display: 'code',
  locale: undefined,
  fractionDigits: 0,
};

export const currencyFormatter = (
  num: number,
  currencyCode: string,
  options: CurrencyFormatterOpt = defaultOpt
) => {
  if (options.fractionDigits && (0 > options.fractionDigits || options.fractionDigits > 20)) {
    throw new Error('The fractionDigits must be between 0 and 20 inclusive');
  }

  const { display = 'symbol', locale, fractionDigits = 0 } = options;

  const intlOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: display,
    minimumFractionDigits: fractionDigits,
  };

  const intl = new Intl.NumberFormat(locale, intlOptions);
  return intl.format(num);
};
