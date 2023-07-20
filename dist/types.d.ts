export interface FormatterOptions extends Intl.DateTimeFormatOptions {
    withTime?: boolean;
    isDateShort?: boolean;
    locale?: string | string[];
}
