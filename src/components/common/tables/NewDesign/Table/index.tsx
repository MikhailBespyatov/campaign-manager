import { black } from 'constants/styles';
import { channelBorder, tableHeaderBorder } from 'pages/CampaignManager/Campaign/Create/Steps/Channels/constants';
import React from 'react';
import { AlignmentType, DataTable } from 'types';
import { Cell, RowWrapper, TableBody, TableHeader, TableHeaderColumnSpan } from './styles';

export interface TableProps {
    columns: string[];
    columnSizes?: number[];
    data?: DataTable[];
}

export const Table = ({ columns, columnSizes = new Array<number>(columns.length).fill(1), data }: TableProps) => {
    const flexBasisValues = columnSizes?.map(value => (100 * value) / columnSizes?.reduce((a, b) => a + b) + '%');

    return (
        <>
            <TableHeader alignCenter border={tableHeaderBorder} height="48px">
                {columns.map((title, index) => (
                    <Cell key={title} justifyCenter flexBasis={flexBasisValues[index]}>
                        <TableHeaderColumnSpan color={black}>{title}</TableHeaderColumnSpan>
                    </Cell>
                ))}
            </TableHeader>
            <TableBody>
                {data?.map(
                    (
                        { cells, isCheckedRow, alignment = new Array<AlignmentType>(columns.length).fill('start') },
                        index
                    ) => (
                        <RowWrapper
                            key={index.toString()}
                            alignCenter
                            justifyAround
                            borderBottom={channelBorder}
                            checked={isCheckedRow}
                        >
                            {cells.map((cell, index) => (
                                <Cell
                                    key={index.toString()}
                                    columnAlignment={alignment[index]}
                                    flexBasis={flexBasisValues[index]}
                                >
                                    {cell}
                                </Cell>
                            ))}
                        </RowWrapper>
                    )
                )}
            </TableBody>
        </>
    );
};
