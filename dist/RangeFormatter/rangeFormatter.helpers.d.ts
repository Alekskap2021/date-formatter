import { RangeFormatterOpt, TStyle, TWidth } from './rangeFormatter.types';
export declare const defaultOptions: RangeFormatterOpt;
export declare const styleMapper: (style: TStyle) => 'always' | 'auto';
export declare const widthMapper: (width: TWidth) => 'long' | 'short' | 'narrow';
