import React from 'react';
import { Cell, RowWrapper, TableBody, TableHeader, TableHeaderColumnSpan } from './styles';
import { AlignmentType, DataTable } from 'types';

export interface TableProps {
    columns: string[];
    columnSizes?: number[];
    data?: DataTable[];
}

export const Table = ({ columns, columnSizes = new Array<number>(columns.length).fill(1), data }: TableProps) => {
    const flexBasisValues = columnSizes?.map(value => (100 * value) / columnSizes?.reduce((a, b) => a + b) + '%');

    return (
        <>
            <TableHeader alignCenter>
                {columns.map((title, index) => (
                    <Cell key={title} justifyCenter flexBasis={flexBasisValues[index]}>
                        <TableHeaderColumnSpan>{title}</TableHeaderColumnSpan>
                    </Cell>
                ))}
            </TableHeader>
            <TableBody>
                {data?.map(
                    (
                        { cells, isCheckedRow, alignment = new Array<AlignmentType>(columns.length).fill('start') },
                        index
                    ) => (
                        <RowWrapper key={index.toString()} alignCenter justifyAround checked={isCheckedRow}>
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
