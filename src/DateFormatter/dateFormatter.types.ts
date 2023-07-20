export type TWeekDay = 'oneLetter' | 'short' | 'full';
export type TTimeZone = 'city' | 'country' | 'GMT';

export interface CommonFormatterOptions {
  timeZone?: TTimeZone;

  isDateShort?: boolean;
  weekDay?: TWeekDay;
  locale?: string | string[];
}

export type FormatterOptionsWithFullTime = CommonFormatterOptions & {
  withFullTime?: true | undefined;
  withShortTime?: never;
};

export type FormatterOptionsWithShortTime = CommonFormatterOptions & {
  withShortTime?: true | undefined;
  withFullTime?: never;
};

export type FormatterOptions = FormatterOptionsWithFullTime | FormatterOptionsWithShortTime;
