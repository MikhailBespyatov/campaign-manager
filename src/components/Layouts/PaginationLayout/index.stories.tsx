import { Meta, Story } from '@storybook/react/types-6-0';
import { nameProject } from 'constants/global';
import { GlobalStyle, white } from 'constants/styles';
import base from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { PaginationLayout, PaginationLayoutProps } from 'components/Layouts/PaginationLayout/index';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';

export default {
    title: getStoriesTitle(base),
    component: PaginationLayout,
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

const Template: Story<PaginationLayoutProps> = args => (
    <ContentWrapper width="100%">
        <PaginationLayout {...args}>
            <Section justifyCenter>Test</Section>
        </PaginationLayout>
    </ContentWrapper>
);

export const DefaultPaginationLayout = Template.bind({});
DefaultPaginationLayout.args = {
    onPaginationChange: (current: number) => {},
    onSizeChange: (current: number, size: number) => {},
    totalRecords: 100,
    limit: 10,
    pageIndex: 0
};
