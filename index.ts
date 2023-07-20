import { FormatterOptions } from './types';

export const dateFormatter = (
  date: Date,
  options: FormatterOptions = { withTime: false, short: false }
) => {
  const { short, withTime } = options;

  const dateOptions: Intl.DateTimeFormatOptions = {
    day: short ? '2-digit' : 'numeric',
    month: short ? '2-digit' : 'long',
    year: short ? '2-digit' : 'numeric',
    hour: withTime ? 'numeric' : undefined,
    minute: withTime ? 'numeric' : undefined,
    ...options,
  };

  const intlDate = new Intl.DateTimeFormat(navigator.language, dateOptions);

  return intlDate.format(date);
};
