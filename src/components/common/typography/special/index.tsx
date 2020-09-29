import { Span } from 'components/common/typography/Span';
import { percentageSpanColor } from 'components/common/typography/special/constants';
import { SmallSpanProps } from 'components/common/typography/special/types';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { primaryColor, secondaryColor } from 'constants/styles';
import React, { FC } from 'react';

export const Subtitle: FC = ({ children }) => (
    <Span fontSize="18px" fontWeight="700" lineHeight="28px">
        {children}
    </Span>
);

export const SmallSpan: FC<SmallSpanProps> = ({ children, opacity }) => (
    <Span fontSize="12px" lineHeight="20px" opacity={opacity ? opacity : 0.4}>
        {children}
    </Span>
);

export const PercentageSpan: FC = ({ children }) => (
    <Span color={percentageSpanColor} fontSize="14px" lineHeight="22px">
        {children}
    </Span>
);

export const EngagementSpan: FC = ({ children }) => (
    <Span fontSize="14px" lineHeight="22px">
        {children}
    </Span>
);

export const TableHeaderSpan: FC = ({ children }) => (
    <Column marginRight="15px">
        <Span color={primaryColor} fontSize="8px" lineHeight="10px">
            {children}
        </Span>
    </Column>
);

export const GraphicBlockSpan: FC = ({ children }) => (
    <Span color={secondaryColor} fontSize="14px" lineHeight="22px">
        {children}
    </Span>
);
