import { Meta, Story } from '@storybook/react/types-6-0';
import { AddImageButton } from 'components/common/buttons/AddImageButton/index';
import { Props, SortSelectorButton } from 'components/common/buttons/SortSelectorButton';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { nameProject } from 'constants/global';
import { GlobalStyle, white } from 'constants/styles';
import base from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';

export default {
    title: getStoriesTitle(base),
    component: AddImageButton,
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

const Template: Story<Props> = args => <SortSelectorButton {...args}>Test</SortSelectorButton>;

export const SortSelector = Template.bind({});
SortSelector.args = {};
