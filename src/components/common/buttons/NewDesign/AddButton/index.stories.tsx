import { Meta, Story } from '@storybook/react/types-6-0';
import { nameProject } from 'constants/global';
import { GlobalStyle, white } from 'constants/styles';
import base from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { AddButton, AddButtonProps } from 'components/common/buttons/NewDesign/AddButton/index';

export default {
    title: getStoriesTitle(base),
    component: AddButton,
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

const Template: Story<AddButtonProps> = args => <AddButton {...args}>Add Channel</AddButton>;

export const DefaultAddButton = Template.bind({});
DefaultAddButton.args = {};

export const ManualAddButton = Template.bind({});
ManualAddButton.args = {
    justifyCenter: true,
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '20px',
    width: '300px',
    height: '90px',
    type: 'black'
};
