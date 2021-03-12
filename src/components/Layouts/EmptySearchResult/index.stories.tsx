import { Meta, Story } from '@storybook/react/types-6-0';
import { nameProject } from 'constants/global';
import { GlobalStyle, white } from 'constants/styles';
import base from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { EmptySearchResult, EmptySearchResultProps } from 'components/Layouts/EmptySearchResult/index';

export default {
    title: getStoriesTitle(base),
    component: EmptySearchResult,
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

const Template: Story<EmptySearchResultProps> = args => <EmptySearchResult {...args} />;

export const DefaultEmptySearchResult = Template.bind({});
DefaultEmptySearchResult.args = {
    title: 'Sorry! No result found'
};
