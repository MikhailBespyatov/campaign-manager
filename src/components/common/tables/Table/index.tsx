import { StyledTable, Tbody } from 'components/common/tables/Table/styles';
import { StyledTableProps } from 'components/common/tables/Table/types';
import { OverflowAutoWrapper } from 'components/common/wrappers/OverflowAutoWrapper';
import React, { FC } from 'react';

export const Table: FC<StyledTableProps> = ({ children, ...props }) => (
    <OverflowAutoWrapper>
        <StyledTable {...props}>
            <Tbody>{children}</Tbody>
        </StyledTable>
    </OverflowAutoWrapper>
);
