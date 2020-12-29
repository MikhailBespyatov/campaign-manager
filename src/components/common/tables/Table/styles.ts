import { tableBorderColor, tableBorderWidth } from 'components/common/tables/Table/constants';
import { StyledTableProps } from 'components/common/tables/Table/types';
import styled from 'styled-components';

export const StyledTable = styled.table<StyledTableProps>`
    //border-top: ${tableBorderWidth} solid ${tableBorderColor};
    width: 100%;
    border-collapse: ${({ borderCollapse }) => (borderCollapse ? borderCollapse : 'separate')};
    border-spacing: ${({ borderSpacing }) => (borderSpacing ? borderSpacing : '0')};
    ${({ borderRadius }) => (borderRadius ? `border-radius: ${borderRadius}; overflow: hidden` : ``)};
    ${({ border }) => (border ? `border: ${border}` : ``)};
    ${({ borderWidth }) => (borderWidth ? `border-width: ${borderWidth}` : ``)};
    ${({ borderStyle }) => (borderStyle ? `border-style: ${borderStyle}` : ``)};
    ${({ borderColor }) => (borderColor ? `border-color: ${borderColor}` : ``)};
    overflow: auto;
`;

export const Tbody = styled.tbody``;
