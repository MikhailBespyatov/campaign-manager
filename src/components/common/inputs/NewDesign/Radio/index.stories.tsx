import { Meta, Story } from '@storybook/react/types-6-0';
import { nameProject } from 'constants/global';
import { GlobalStyle, white } from 'constants/styles';
import base from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { Radio, RadioProps } from 'components/common/inputs/NewDesign/Radio/index';

export default {
    title: getStoriesTitle(base),
    component: Radio,
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

const Template: Story<RadioProps> = args => (
    <>
        <Radio {...args}>Test selector 1</Radio>
        <Radio {...args} defaultValue>
            Test selector 2
        </Radio>
    </>
);

export const DefaultItemSelector = Template.bind({});
DefaultItemSelector.args = {};
