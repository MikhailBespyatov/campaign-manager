import { tableBorderColor, tableBorderWidth } from 'components/common/tables/Table/constants';
import { StyledTableProps } from 'components/common/tables/Table/types';
import styled from 'styled-components';

export const StyledTable = styled.table<StyledTableProps>`
    //border-top: ${tableBorderWidth} solid ${tableBorderColor};
    border-collapse: separate;
    border-spacing: ${({ borderSpacing }) => (borderSpacing ? borderSpacing : '0')};
`;
export const Tbody = styled.tbody``;
