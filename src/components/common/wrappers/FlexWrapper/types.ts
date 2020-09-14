import { FlexBooleanAlignment, Margin, MaxSizes, MinSizes, Sizes, WidthMaxContent } from 'types';

export interface RowProps extends FlexBooleanAlignment, Margin, MaxSizes, Sizes, MinSizes, WidthMaxContent {}

export interface ColumnProps extends RowProps {}
