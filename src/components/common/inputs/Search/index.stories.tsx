import { Meta, Story } from '@storybook/react/types-6-0';
import { Props, Search } from 'components/common/inputs/Search';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { nameProject } from 'constants/global';
import { GlobalStyle, white } from 'constants/styles';
import base from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';

export default {
    title: getStoriesTitle(base),
    component: Search,
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

const Template: Story<Props> = args => <Search {...args} />;

export const DefaultSearch = Template.bind({});
DefaultSearch.args = {};
