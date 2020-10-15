import {
    legendaryTableRowHorizontalPadding,
    legendaryTableRowVerticalPadding,
    tableRowVerticalPadding
} from 'components/common/tables/CampaignInputsTable/constants';
import styled from 'styled-components';

export const LegendaryTableRow = styled.tr``;

export const TableRow = styled.tr``;

export const LegendaryTableColumn = styled.td`
    vertical-align: center;
    padding: ${legendaryTableRowVerticalPadding} ${legendaryTableRowHorizontalPadding};
`;

export const TableColumn = styled.td`
    vertical-align: center;
    padding: ${tableRowVerticalPadding} ${legendaryTableRowHorizontalPadding};
`;
