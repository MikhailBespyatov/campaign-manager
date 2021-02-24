import { Meta, Story } from '@storybook/react/types-6-0';
import { nameProject } from 'constants/global';
import { GlobalStyle, white } from 'constants/styles';
import base from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';
import { Checkbox, CheckboxProps } from 'components/common/inputs/NewDesign/Checkbox/index';
import { Section } from 'components/grid/wrappers/FlexWrapper';

export default {
    title: getStoriesTitle(base),
    component: Checkbox,
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

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {};
