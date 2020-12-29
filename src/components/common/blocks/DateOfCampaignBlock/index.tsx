import React, { FC } from 'react';
import { DateOfCampaignWrapper } from './styles';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { Span } from 'components/common/typography/Span';
import { getDate } from 'utils/usefulFunctions';
import { IsExpiredBorder } from 'types';
import { primaryColor, red } from 'constants/styles';

interface Props extends IsExpiredBorder {
    date: string;
    state: 'start' | 'end';
}

export const DateOfCampaignBlock: FC<Props> = ({ state, date, isExpiredBorder = false }) => (
    <DateOfCampaignWrapper isExpiredBorder={isExpiredBorder}>
        <MarginWrapper marginBottom="20px">
            <Span fontSize="15px" fontWeight="400" lineHeight="18px">
                {state === 'start' ? 'Start Date of campaign' : 'End Date of campaign'}
            </Span>
        </MarginWrapper>
        <Span color={isExpiredBorder ? red : primaryColor} fontSize="18px" fontWeight="400" lineHeight="22px">
            {getDate(new Date(date))}
        </Span>
    </DateOfCampaignWrapper>
);
