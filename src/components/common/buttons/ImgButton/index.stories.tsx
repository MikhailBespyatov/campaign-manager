import { Meta, Story } from '@storybook/react/types-6-0';
import { nameProject } from 'constants/global';
import { GlobalStyle, white } from 'constants/styles';
import base from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { ImgButton, ImgProps } from 'components/common/buttons/ImgButton/index';

export default {
    title: getStoriesTitle(base),
    component: ImgButton,
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

const Template: Story<ImgProps> = args => <ImgButton {...args} />;

export const DefaultCopyButton = Template.bind({});
DefaultCopyButton.args = {
    backgroundColor: '#e7e7e7'
};
