import {
    activeColor,
    legendaryTableRowHeight,
    legendaryTableRowHorizontalPadding,
    legendaryTableRowVerticalPadding,
    tableColumnWidth,
    tableRowBorderColor,
    tableRowBorderRadius,
    tableRowBorderWidth,
    tableRowHeight,
    tableRowHorizontalPadding,
    tableRowVerticalPadding
} from 'components/common/tables/UserAdminTable/constants';
import styled from 'styled-components';
import { Active } from 'types';

export const LegendaryTableRow = styled.tr<Active>`
    ${({ active }) => (active ? `background: ${activeColor};` : ``)};
`;

export const LegendaryTableColumn = styled.td`
    vertical-align: center;
    min-width: ${tableColumnWidth};
    height: ${legendaryTableRowHeight};
    border-top: ${tableRowBorderWidth} solid ${tableRowBorderColor};
    border-bottom: ${tableRowBorderWidth} solid ${tableRowBorderColor};
    padding: ${legendaryTableRowVerticalPadding} ${legendaryTableRowHorizontalPadding};
    &:first-child {
        border-top-left-radius: ${tableRowBorderRadius};
        border-left: ${tableRowBorderWidth} solid ${tableRowBorderColor};
        overflow: hidden;
    }
    &:last-child {
        border-top-right-radius: ${tableRowBorderRadius};
        border-right: ${tableRowBorderWidth} solid ${tableRowBorderColor};
        overflow: hidden;
    }
`;

export const TableColumn = styled.td`
    vertical-align: center;
    min-width: ${tableColumnWidth};
    height: ${tableRowHeight};
    border-bottom: ${tableRowBorderWidth} solid ${tableRowBorderColor};
    padding: ${tableRowVerticalPadding} ${tableRowHorizontalPadding};
    &:first-child {
        border-left: ${tableRowBorderWidth} solid ${tableRowBorderColor};
    }
    &:last-child {
        border-right: ${tableRowBorderWidth} solid ${tableRowBorderColor};
    }
`;

export const TableRow = styled.tr<Active>`
    ${({ active }) => (active ? `background: ${activeColor};` : ``)};
    &:last-child {
        ${TableColumn} {
            &:first-child {
                border-bottom-left-radius: ${tableRowBorderRadius};
                border-left: ${tableRowBorderWidth} solid ${tableRowBorderColor};
                overflow: hidden;
            }
            &:last-child {
                border-bottom-right-radius: ${tableRowBorderRadius};
                border-right: ${tableRowBorderWidth} solid ${tableRowBorderColor};
                overflow: hidden;
            }
        }
    }
`;
