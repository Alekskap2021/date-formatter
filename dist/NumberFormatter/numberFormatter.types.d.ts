export interface NumberFormatterOpt {
    locale?: string | string[];
    style?: 'decimal' | 'percent';
    minFractionDigits?: number;
    maxFractionDigits?: number;
}
