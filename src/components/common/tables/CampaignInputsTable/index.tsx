import { NumberCounter } from 'components/common/inputs/NumberCounter';
import { Switch } from 'components/common/inputs/Switch';
import {
    legendarySpanColor,
    legendarySpanFontSize,
    legendarySpanLineHeight,
    spanColor,
    spanFontSize,
    spanFontWeight,
    spanLineHeight,
    testArray
} from 'components/common/tables/CampaignInputsTable/constants';
import {
    LegendaryTableColumn,
    LegendaryTableRow,
    TableColumn,
    TableRow
} from 'components/common/tables/CampaignInputsTable/styles';
import { Table } from 'components/common/tables/Table';
import { Span } from 'components/common/TextComponents/Span';
import { hashTagPrefix } from 'constants/styles';
import React from 'react';

export const CampaignInputsTable = () => (
    <Table>
        <LegendaryTableRow>
            <LegendaryTableColumn></LegendaryTableColumn>
            <LegendaryTableColumn>
                <Span color={legendarySpanColor} fontSize={legendarySpanFontSize} lineHeight={legendarySpanLineHeight}>
                    WATCHED OVERRIDE
                </Span>
            </LegendaryTableColumn>
            <LegendaryTableColumn>
                <Span color={legendarySpanColor} fontSize={legendarySpanFontSize} lineHeight={legendarySpanLineHeight}>
                    MUST WATCH
                </Span>
            </LegendaryTableColumn>
            <LegendaryTableColumn>
                <Span color={legendarySpanColor} fontSize={legendarySpanFontSize} lineHeight={legendarySpanLineHeight}>
                    BOOST CONTENT
                </Span>
            </LegendaryTableColumn>
            <LegendaryTableColumn>
                <Span color={legendarySpanColor} fontSize={legendarySpanFontSize} lineHeight={legendarySpanLineHeight}>
                    BOOST CREATOR
                </Span>
            </LegendaryTableColumn>
            <LegendaryTableColumn>
                <Span color={legendarySpanColor} fontSize={legendarySpanFontSize} lineHeight={legendarySpanLineHeight}>
                    HASHTAG {hashTagPrefix}ADIDAS
                </Span>
            </LegendaryTableColumn>
            <LegendaryTableColumn>
                <Span color={legendarySpanColor} fontSize={legendarySpanFontSize} lineHeight={legendarySpanLineHeight}>
                    HASHTAG {hashTagPrefix}SPORT
                </Span>
            </LegendaryTableColumn>
        </LegendaryTableRow>
        {testArray.map(i => (
            <TableRow key={i}>
                <TableColumn>
                    <Span
                        noWrap
                        color={spanColor}
                        fontSize={spanFontSize}
                        fontWeight={spanFontWeight}
                        lineHeight={spanLineHeight}
                    >
                        {i}
                    </Span>
                </TableColumn>
                <TableColumn>
                    <Switch />
                </TableColumn>
                <TableColumn>
                    <Switch />
                </TableColumn>
                <TableColumn>
                    <NumberCounter />
                </TableColumn>
                <TableColumn>
                    <NumberCounter />
                </TableColumn>
                <TableColumn>
                    <NumberCounter />
                </TableColumn>
                <TableColumn>
                    <NumberCounter />
                </TableColumn>
            </TableRow>
        ))}
    </Table>
);
