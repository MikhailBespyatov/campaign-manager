import { Meta, Story } from '@storybook/react/types-6-0';
import { CopyButton } from 'components/common/buttons/CopyButton';
import { Span } from 'components/common/typography/Span';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { InfoPopover, InfoPopoverProps } from 'components/modals/InfoPopover';
import { nameProject } from 'constants/global';
import { white } from 'constants/styles';
import { GlobalStyle } from 'constants/styles/global';
import { base } from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';
export default {
    title: getStoriesTitle(base),
    component: InfoPopover,
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
                <MarginWrapper marginLeft="400px">
                    <ContentWrapper backgroundColor="#272847" padding="20px" width="fit-content">
                        <Story />
                    </ContentWrapper>
                </MarginWrapper>
            </>
        )
    ]
} as Meta;

const Template: Story<InfoPopoverProps> = args => (
    <InfoPopover {...args}>
        <Row alignCenter noWrap marginBottom="6px" width="200px">
            <Span color={white} fontSize="12px">
                ICWT3_60502f360b62caccafa06037
            </Span>

            <MarginWrapper marginLeft="10px">
                <CopyButton subject="" success="" />
            </MarginWrapper>
        </Row>
    </InfoPopover>
);

export const DownPopover = Template.bind({});
DownPopover.args = {
    popoverText:
        'This is your unique merchant ID. You will soon be able to copy this to use with various platforms. For now it can be used with Shopify.'
};
