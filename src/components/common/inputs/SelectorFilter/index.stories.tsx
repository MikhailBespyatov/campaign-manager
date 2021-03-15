import { Meta, Story } from '@storybook/react/types-6-0';
import { nameProject } from 'constants/global';
import { GlobalStyle, white } from 'constants/styles';
import base from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { SelectorFilter, SelectorFilterProps } from 'components/common/inputs/SelectorFilter/index';

export default {
    title: getStoriesTitle(base),
    component: SelectorFilter,
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

const Template: Story<SelectorFilterProps> = args => <SelectorFilter {...args} />;

export const CheckboxSelectorFilter = Template.bind({});
CheckboxSelectorFilter.args = {
    height: '32px',
    width: '100px',
    title: 'Region',
    view: 'columns',
    values: [
        'North America',
        'Africa',
        'Eastern Europe',
        'Asia',
        'Western Europe',
        'Oceania',
        'Middle East',
        'Unknown'
    ],
    type: 'checkbox'
};
export const SelectSelectorFilter = Template.bind({});
SelectSelectorFilter.args = {
    ...CheckboxSelectorFilter.args,
    type: 'select',
    view: 'list'
};
