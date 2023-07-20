import { FormatterOptions } from './types';

const defaultOptions: FormatterOptions = { withTime: false, isDateShort: false, locale: undefined };

export const dateFormatter = (date: Date, options: FormatterOptions = defaultOptions) => {
  const { isDateShort, withTime, locale, ...otherOptions } = options;

  const dateOptions: Intl.DateTimeFormatOptions = {
    day: isDateShort ? '2-digit' : 'numeric',
    month: isDateShort ? '2-digit' : 'long',
    year: isDateShort ? '2-digit' : 'numeric',
    hour: withTime ? 'numeric' : undefined,
    minute: withTime ? 'numeric' : undefined,
    ...otherOptions,
  };

  const intlDate = new Intl.DateTimeFormat(locale || navigator.language, dateOptions);

  return intlDate.format(date);
};
