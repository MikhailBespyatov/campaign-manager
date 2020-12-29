import React, { FC } from 'react';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { Span } from 'components/common/typography/Span';
import { getDate } from 'utils/usefulFunctions';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { grey4 } from 'constants/styles';

interface Props {
    date: string;
    state: 'start' | 'end';
}

export const DateOfDetailsCampaignBlock: FC<Props> = ({ state, date }) => (
    <Column>
        <MarginWrapper marginBottom="8px">
            <Span color={grey4} fontSize="16px" fontWeight="400" lineHeight="22px">
                {state === 'start' ? 'Start Date of campaign' : 'End Date of campaign'}
            </Span>
        </MarginWrapper>
        <Span fontSize="18px" fontWeight="400" lineHeight="22px">
            {getDate(new Date(date))}
        </Span>
    </Column>
);
