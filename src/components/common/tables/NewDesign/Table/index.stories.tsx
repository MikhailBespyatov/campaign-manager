import { Meta, Story } from '@storybook/react/types-6-0';
import { nameProject } from 'constants/global';
import { GlobalStyle, white } from 'constants/styles';
import base from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { Table, TableProps } from 'components/common/tables/NewDesign/Table/index';
import { DataTable } from 'types';
import { Span } from 'components/common/typography/Span';

export default {
    title: getStoriesTitle(base),
    component: Table,
    parameters: {
        backgrounds: {
            default: nameProject,
            values: [{ name: nameProject, value: white }]
        }
    },
    decorators: [
        Story => (
            <>
                <GlobalStyle />
                <Section>
                    <Story />
                </Section>
            </>
        )
    ]
} as Meta;

const dataTable: DataTable[] = [
    {
        // because it is Storybook and this logic only for view Table
        // eslint-disable-next-line react/jsx-key
        cells: [<Span>Test string</Span>, <Span>Test string2</Span>, <Span>Test string3</Span>],
        alignment: ['center', 'start', 'end'],
        isCheckedRow: false
    },
    {
        // because it is Storybook and this logic only for view Table
        // eslint-disable-next-line react/jsx-key
        cells: [<Span>Test string</Span>, <Span>Test string2</Span>, <Span>Test string3</Span>],
        alignment: ['start', 'end', 'center'],
        isCheckedRow: true
    },
    {
        // because it is Storybook and this logic only for view Table
        // eslint-disable-next-line react/jsx-key
        cells: [<Span>Test string</Span>, <Span>Test string2</Span>, <Span>Test string3</Span>],
        alignment: ['center', 'center', 'center'],
        isCheckedRow: true
    },
    {
        // because it is Storybook and this logic only for view Table
        // eslint-disable-next-line react/jsx-key
        cells: [<Span>Test string</Span>, <Span>Test string2</Span>, <Span>Test string3</Span>],
        alignment: ['center', 'center', 'center'],
        isCheckedRow: true
    }
];

const Template: Story<TableProps> = args => <Table {...args} />;

export const DefaultTable = Template.bind({});
DefaultTable.args = {
    columnSizes: [1, 2, 1],
    data: dataTable,
    columns: ['Test', 'Flex', 'Column']
};
