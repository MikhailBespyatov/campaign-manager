import { Meta, Story } from '@storybook/react/types-6-0';
import arrowDown from 'assets/icons/arrow_down_grey.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { arrowDownHeight, arrowDownWidth } from 'components/grid/Header/constants';
import { StyledSpan2 } from 'components/grid/Header/style';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { LogOutPopover, LogOutPopoverProps } from 'components/modals/LogOutPopover';
import { nameProject } from 'constants/global';
import { white } from 'constants/styles';
import { GlobalStyle } from 'constants/styles/global';
import { base } from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';
export default {
    title: getStoriesTitle(base),
    component: LogOutPopover,
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
                <ContentWrapper backgroundColor="#272847" padding="20px" width="fit-content">
                    <Story />
                </ContentWrapper>
            </>
        )
    ]
} as Meta;

const Template: Story<LogOutPopoverProps> = args => (
    <LogOutPopover {...args}>
        <Row alignCenter marginBottom="6px">
            <StyledSpan2 color={white}>kulik.v@incodewetrust.ru</StyledSpan2>
            <MarginWrapper margin="6px 10px">
                <CustomImg alt="Arrow down" height={arrowDownHeight} src={arrowDown} width={arrowDownWidth} />
            </MarginWrapper>
        </Row>
    </LogOutPopover>
);

export const DownPopover = Template.bind({});
