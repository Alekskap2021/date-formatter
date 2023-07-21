export type TStyle = 'when' | 'after';
export type TWidth = 'full' | 'shortest' | 'short';
export interface RangeFormatterOpt {
    locale?: string | string[] | undefined;
    futureStyle?: TStyle | undefined;
    width?: TWidth | undefined;
}
