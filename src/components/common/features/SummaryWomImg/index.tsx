import {
    subtitleColor,
    subtitleFontSize,
    subtitleFontWeight,
    subtitleLineHeight
} from 'components/common/features/Summary/constants';
import { Wrapper } from 'components/common/features/Summary/styles';
import { WomLogoImg } from 'components/common/imageComponents/WomLogoImg';
import { Span } from 'components/common/typography/Span';
import React from 'react';
import { MarginRightBottom, Title } from 'types';

interface Props extends Title, MarginRightBottom {}

export const SummaryWomImg = ({ title, ...marginRightBottom }: Props) => (
    <Wrapper {...marginRightBottom}>
        <WomLogoImg height="50px" />
        <Span
            color={subtitleColor}
            fontSize={subtitleFontSize}
            fontWeight={subtitleFontWeight}
            lineHeight={subtitleLineHeight}
        >
            {title}
        </Span>
    </Wrapper>
);
