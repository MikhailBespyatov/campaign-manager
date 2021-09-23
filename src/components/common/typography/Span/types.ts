import { Color, Opacity, TextDecoration, TextProperties } from 'types';

export interface SpanProps extends Color, TextProperties, Opacity, TextDecoration {
    pointer?: boolean;
}
