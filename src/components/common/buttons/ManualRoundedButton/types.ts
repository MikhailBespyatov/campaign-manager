import { Background, Disabled, MainColor, MarginBottom, MinSizes, Reverse, Sizes } from 'types';

export interface ButtonProps extends Reverse, MarginBottom, Sizes, MinSizes, Disabled, Background, MainColor {
    borderRadius?: string;
}

export interface InnerSpanProps extends Reverse, MainColor {}
