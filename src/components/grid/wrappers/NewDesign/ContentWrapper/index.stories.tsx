import { getStoriesTitle } from 'utils/usefulFunctions';
import { base } from 'paths.macro';
import { nameProject } from 'constants/global';
import { backgroundColor, GlobalStyle } from 'constants/styles';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ContentWrapper, ContentWrapperProps } from 'components/grid/wrappers/NewDesign/ContentWrapper/styles';
import { Section, Row } from 'components/grid/wrappers/FlexWrapper';

export default {
    title: getStoriesTitle(base),
    component: ContentWrapper,
    parameters: {
        backgrounds: {
            default: nameProject,
            values: [{ name: nameProject, value: backgroundColor }]
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

const Template: Story<ContentWrapperProps> = args => (
    <ContentWrapper {...args}>
        <Row justifyCenter>Test content</Row>
    </ContentWrapper>
);

export const DefaultContentWrapper = Template.bind({});
DefaultContentWrapper.args = {
    height: '300px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '10px',
    paddingBottom: '10px'
};

export const PaddingContentWrapper = Template.bind({});
PaddingContentWrapper.args = {
    ...DefaultContentWrapper.args,
    padding: '30px 20px 30px 20px'
};

export const BackgroundContentWrapper = Template.bind({});
BackgroundContentWrapper.args = {
    ...DefaultContentWrapper.args,
    width: '100%',
    backgroundColor: 'gray'
};
