import { Meta, Story } from '@storybook/react/types-6-0';
import { SearchSelect, SearchSelectProps } from 'components/common/inputs/SearchSelect';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { nameProject } from 'constants/global';
import { white } from 'constants/styles';
import { GlobalStyle } from 'constants/styles/global';
import base from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';

export default {
    title: getStoriesTitle(base),
    component: SearchSelect,
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

const Template: Story<SearchSelectProps> = args => <SearchSelect {...args} />;

export const DefaultSearchSelect = Template.bind({});
DefaultSearchSelect.args = {
    placeholder: 'Add Language',
    itemsList: ['English', 'Italian', 'German', 'French', 'Spanish', 'Turkish', 'Korean', 'Polish']
};

export const SampleSearchSelect = Template.bind({});
SampleSearchSelect.args = {
    defaultValue: 'English',
    itemsList: ['English', 'Italian', 'German', 'French', 'Spanish', 'Turkish', 'Korean', 'Polish'],
    placeholder: 'Add Language'
};
