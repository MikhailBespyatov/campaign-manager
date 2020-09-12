import { FlexBooleanAlignment, MarginRightBottom, MaxSizes, MinSizes, Sizes, WidthMaxContent } from 'types';

export interface RowProps extends FlexBooleanAlignment, MarginRightBottom, MaxSizes, Sizes, MinSizes, WidthMaxContent {}

export interface ColumnProps extends RowProps {}
