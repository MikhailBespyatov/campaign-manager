import { Span } from 'components/common/typography/Span';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { defaultFontSize } from 'constants/defaults';
import { grey4, primaryMargin } from 'constants/styles';
import React, { FC } from 'react';
//import { getDate } from 'utils/usefulFunctions';
import { getFormattedDate } from 'utils/usefulFunctions';

interface Props {
    date: string;
    state: 'start' | 'end';
}

export const DateOfDetailsCampaignBlock: FC<Props> = ({ state, date }) => (
    <Column>
        <MarginWrapper marginBottom={primaryMargin}>
            <Span color={grey4} fontSize="13px" fontWeight="700" lineHeight="22px">
                {state === 'start' ? 'Start of campaign' : 'End of campaign'}
            </Span>
        </MarginWrapper>
        <Span fontSize={defaultFontSize} fontWeight="400" lineHeight="17px">
            {/* {getDate(new Date(date))} */}
            {getFormattedDate(new Date(date))}
        </Span>
    </Column>
);
