import { FlexBooleanAlignment } from 'types';

export interface RowProps extends FlexBooleanAlignment {
    marginBottom?: string;
}

export interface ColumnProps extends RowProps {
    marginRight?: string;
}
