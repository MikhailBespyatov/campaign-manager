import { FlexBooleanAlignment, MarginBottom, MarginRight } from 'types';

export interface RowProps extends FlexBooleanAlignment, MarginBottom {}

export interface ColumnProps extends RowProps, MarginRight {}
