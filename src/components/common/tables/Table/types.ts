import { BorderProperties, BorderRadiusProperties } from 'types';

export interface StyledTableProps extends BorderProperties, BorderRadiusProperties {
    borderSpacing?: string;
    borderCollapse?: string;
}
