import { FormatterOptions, TTimeZone, TWeekDay } from './dateFormatter.types';
export declare const defaultOptions: FormatterOptions;
export declare const weekDayMapper: (weekDay: TWeekDay) => 'long' | 'short' | 'narrow';
export declare const timezoneMapper: (timeZone: TTimeZone) => 'shortGeneric' | 'long' | 'short';
