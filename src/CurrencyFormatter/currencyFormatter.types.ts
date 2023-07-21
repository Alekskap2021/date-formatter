type TDisplay = 'symbol' | 'code' | 'name';

export interface CurrencyFormatterOpt {
  locale?: string | string[];
  display?: TDisplay;
  fractionDigits?: number;
}
