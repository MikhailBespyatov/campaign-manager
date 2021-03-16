import { Meta } from '@storybook/react/types-6-0';
import { Loader } from 'components/dynamic/Loader';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { nameProject } from 'constants/global';
import { GlobalStyle } from 'constants/styles';
import base from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';

export default {
    title: getStoriesTitle(base),
    component: Loader,
    parameters: {
        backgrounds: {
            default: nameProject,
            values: [{ name: nameProject, value: 'lightGrey' }]
        }
    },
    decorators: [
        Story => (
            <>
                <GlobalStyle />
                <ContentWrapper
                    backgroundColor="lightGrey"
                    borderRadius="0"
                    height="100%"
                    paddingLeft="30px"
                    paddingTop="50px"
                    width="100%"
                >
                    <Section alignCenter>
                        <Story />
                    </Section>
                </ContentWrapper>
            </>
        )
    ]
} as Meta;

export const Loaders = () => (
    <>
        <Loader size="small" />
        <MarginWrapper margin="0 50px">
            <Loader size="middle" />
        </MarginWrapper>
        <Loader size="large" />

        <MarginWrapper margin="0 50px">
            <Loader isWhite size="small" />
        </MarginWrapper>

        <Loader isWhite size="middle" />

        <MarginWrapper margin="0 50px">
            <Loader isWhite size="large" />
        </MarginWrapper>
    </>
);
