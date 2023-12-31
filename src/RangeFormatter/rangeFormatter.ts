import { defaultOptions, styleMapper, widthMapper } from './rangeFormatter.helpers';
import { RangeFormatterOpt } from './rangeFormatter.types';

export const rangeFormatter = (
  date: Date | number,
  options: RangeFormatterOpt = defaultOptions
) => {
  const { locale, futureStyle, width } = options;

  const intlOptions: Intl.RelativeTimeFormatOptions = {
    numeric: futureStyle ? styleMapper(futureStyle) : 'auto',
    style: width ? widthMapper(width) : 'long',
  };

  const timeMs = typeof date === 'number' ? date : date.getTime();
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

  const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity];
  const units: Intl.RelativeTimeFormatUnit[] = [
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year',
  ];

  const unitIndex = cutoffs.findIndex((cutoff) => cutoff > Math.abs(deltaSeconds));

  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

  const intl = new Intl.RelativeTimeFormat(locale, intlOptions);
  return intl.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
};
