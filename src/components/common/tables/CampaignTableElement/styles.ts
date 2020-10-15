import {
    firstTableColumnMinWidth,
    legendaryTableRowHorizontalPadding,
    legendaryTableRowVerticalPadding,
    tableRowBorderColor,
    tableRowBorderRadius,
    tableRowBorderWidth,
    tableRowBottomPadding,
    tableRowVerticalPadding
} from 'components/common/tables/CampaignTableElement/constants';
import styled from 'styled-components';

// export const Table = styled.table`
//     border-top: ${tableBorderWidth} solid ${tableBorderColor};
// `;

export const LegendaryTableRow = styled.tr`
    // padding: ${legendaryTableRowVerticalPadding} ${legendaryTableRowHorizontalPadding};
`;

export const TableRow = styled.tr`
    //padding: ${tableRowVerticalPadding} ${legendaryTableRowHorizontalPadding};
    //border-radius: ${tableRowBorderRadius};
`;

export const LegendaryTableColumn = styled.td`
    //display: flex;
    vertical-align: initial;
    padding: ${legendaryTableRowVerticalPadding} ${legendaryTableRowHorizontalPadding};
    padding-bottom: 0;
    border-top: ${tableRowBorderWidth} solid ${tableRowBorderColor};
    &:first-child {
        min-width: calc(${firstTableColumnMinWidth} - 2 * ${legendaryTableRowHorizontalPadding});
    }
`;

export const TableColumn = styled.td`
    vertical-align: initial;
    padding: ${tableRowVerticalPadding} ${legendaryTableRowHorizontalPadding};
    padding: ${tableRowBottomPadding};
    border-bottom: ${tableRowBorderWidth} solid ${tableRowBorderColor};
    border-top: ${tableRowBorderWidth} solid ${tableRowBorderColor};
    &:first-child {
        border-left: ${tableRowBorderWidth} solid ${tableRowBorderColor};
        border-top-left-radius: ${tableRowBorderRadius};
        border-bottom-left-radius: ${tableRowBorderRadius};
        min-width: calc(${firstTableColumnMinWidth} - 2 * ${legendaryTableRowHorizontalPadding});
    }
    &:last-child {
        border-right: ${tableRowBorderWidth} solid ${tableRowBorderColor};
        border-top-right-radius: ${tableRowBorderRadius};
        border-bottom-right-radius: ${tableRowBorderRadius};
    }
`;
