import { defaultOptions, weekDayMapper, timezoneMapper } from './dateFormatter.helpers';
import { FormatterOptions } from './dateFormatter.types';

export const dateFormatter = (date: Date, options: FormatterOptions = defaultOptions) => {
  const {
    isDateShort = true,
    withFullTime = false,
    withShortTime = false,
    locale,
    weekDay,
    timeZone,
  } = options;

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: isDateShort ? '2-digit' : 'numeric',
    month: isDateShort ? '2-digit' : 'long',
    day: isDateShort ? '2-digit' : 'numeric',

    hour: withFullTime || withShortTime ? '2-digit' : undefined,
    minute: withFullTime || withShortTime ? '2-digit' : undefined,
    second: withFullTime ? '2-digit' : undefined,

    weekday: weekDay ? weekDayMapper(weekDay) : undefined,
    timeZoneName: timeZone ? timezoneMapper(timeZone) : undefined,
  };

  const intlDate = new Intl.DateTimeFormat(locale, dateOptions);

  return intlDate.format(date);
};

const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));

console.log(
  dateFormatter(date, {
    locale: 'en-GB',
    isDateShort: false,
    weekDay: 'full',
    withFullTime: true,
    timeZone: 'GMT',
  })
);
