import { FlexBooleanAlignment, MarginBottom, MarginRight, MaxSizes, Sizes } from 'types';

export interface RowProps extends FlexBooleanAlignment, MarginBottom, MaxSizes, Sizes {}

export interface ColumnProps extends RowProps, MarginRight {}
