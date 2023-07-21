import { RangeFormatterOpt, TStyle, TWidth } from './rangeFormatter.types';

export const defaultOptions: RangeFormatterOpt = {
  locale: undefined,
  futureStyle: undefined,
  width: undefined,
};

export const styleMapper = (style: TStyle): 'always' | 'auto' => {
  switch (style) {
    case 'after':
      return 'always';
    case 'when':
      return 'auto';
  }
};

export const widthMapper = (width: TWidth): 'long' | 'short' | 'narrow' => {
  switch (width) {
    case 'full':
      return 'long';
    case 'short':
      return 'short';
    case 'shortest':
      return 'narrow';
  }
};
