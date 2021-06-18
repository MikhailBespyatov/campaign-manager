import { Span } from 'components/common/typography/Span';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { defaultFontSize, defaultFontWeight } from 'constants/defaults';
import { primaryColor, primaryMargin, red } from 'constants/styles';
import React, { FC } from 'react';
import { IsExpiredBorder } from 'types';
//import { getDate } from 'utils/usefulFunctions';
import { getFormattedDate } from 'utils/usefulFunctions';
import { DateOfCampaignWrapper } from './styles';

interface Props extends IsExpiredBorder {
    date: string;
    state: 'start' | 'end';
}

export const DateOfCampaignBlock: FC<Props> = ({ state, date, isExpiredBorder = false }) => (
    <DateOfCampaignWrapper isExpiredBorder={isExpiredBorder}>
        <MarginWrapper marginBottom={primaryMargin}>
            <Span fontSize="12px" fontWeight={defaultFontWeight} lineHeight="14px">
                {state === 'start' ? 'Start of campaign' : 'End of campaign'}
            </Span>
        </MarginWrapper>
        <Span
            color={isExpiredBorder ? red : primaryColor}
            fontSize={defaultFontSize}
            fontWeight="400"
            lineHeight="17px"
        >
            {/* {getDate(new Date(date))} */}
            {getFormattedDate(new Date(date))}
        </Span>
    </DateOfCampaignWrapper>
);
