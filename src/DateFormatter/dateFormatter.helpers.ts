import { FormatterOptions, TTimeZone, TWeekDay } from './dateFormatter.types';

export const defaultOptions: FormatterOptions = {
  isDateShort: true,

  locale: undefined,
  weekDay: undefined,
  timeZone: undefined,
};

export const weekDayMapper = (weekDay: TWeekDay): 'long' | 'short' | 'narrow' => {
  switch (weekDay) {
    case 'full':
      return 'long';
    case 'short':
      return 'short';
    case 'oneLetter':
      return 'narrow';
  }
};

export const timezoneMapper = (timeZone: TTimeZone): 'shortGeneric' | 'long' | 'short' => {
  switch (timeZone) {
    case 'city':
      return 'shortGeneric';
    case 'country':
      return 'long';
    case 'GMT':
      return 'short';
  }
};
