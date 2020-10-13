import {
    subtitleColor,
    subtitleFontSize,
    subtitleFontWeight,
    subtitleLineHeight,
    titleColor,
    titleFontSize,
    titleFontWeight,
    titleLineHeight
} from 'components/common/features/Summary/constants';
import { Wrapper } from 'components/common/features/Summary/styles';
import { Span } from 'components/common/typography/Span';
import React from 'react';
import { MarginRightBottom, Title } from 'types';

interface Props extends Title, MarginRightBottom {}

export const Summary = ({ title, subtitle = '', ...marginRightBottom }: Props) => (
    <Wrapper {...marginRightBottom}>
        <Span color={titleColor} fontSize={titleFontSize} fontWeight={titleFontWeight} lineHeight={titleLineHeight}>
            {title}
        </Span>
        <Span
            color={subtitleColor}
            fontSize={subtitleFontSize}
            fontWeight={subtitleFontWeight}
            lineHeight={subtitleLineHeight}
        >
            {subtitle}
        </Span>
    </Wrapper>
);
