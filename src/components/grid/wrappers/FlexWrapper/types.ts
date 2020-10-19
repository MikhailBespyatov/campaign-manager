import { FlexBooleanAlignment, Margin, MaxSizes, MinSizes, Sizes, WidthMaxContent, ZIndex } from 'types';

export interface RowProps extends FlexBooleanAlignment, Margin, MaxSizes, Sizes, MinSizes, WidthMaxContent, ZIndex {}

export interface ColumnProps extends RowProps {}
