import { Meta, Story } from '@storybook/react/types-6-0';
import { nameProject } from 'constants/global';
import { GlobalStyle, white } from 'constants/styles';
import base from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { TextInput, TextInputProps } from 'components/common/inputs/NewDesign/TextInput/index';

export default {
    title: getStoriesTitle(base),
    component: TextInput,
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

const Template: Story<TextInputProps> = args => <TextInput {...args} />;

export const DefaultTextInput = Template.bind({});
DefaultTextInput.args = {
    label: 'Campaign Name',
    required: true,
    name: 'campaignName',
    placeholder: 'Test placeholder',
    type: 'text',
    errorText: 'This field is required'
};
