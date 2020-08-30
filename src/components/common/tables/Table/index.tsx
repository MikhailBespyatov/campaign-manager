import { StyledTable, Tbody } from 'components/common/tables/Table/styles';
import { StyledTableProps } from 'components/common/tables/Table/types';
import React, { FC } from 'react';

export const Table: FC<StyledTableProps> = ({ children, borderSpacing }) => (
    <StyledTable borderSpacing={borderSpacing}>
        <Tbody>{children}</Tbody>
    </StyledTable>
);
