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
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import React from 'react';
import { MarginRightBottom, Title } from 'types';

interface Props extends Title, MarginRightBottom {}

export const SummaryOldVersion = ({ title, subtitle = '', ...marginRightBottom }: Props) => (
    <Wrapper {...marginRightBottom}>
        <Column>
            <Row marginBottom="12px">
                <Span
                    color={titleColor}
                    fontSize={titleFontSize}
                    fontWeight={titleFontWeight}
                    lineHeight={titleLineHeight}
                >
                    {title}
                </Span>
            </Row>
            <Span
                color={subtitleColor}
                fontSize={subtitleFontSize}
                fontWeight={subtitleFontWeight}
                lineHeight={subtitleLineHeight}
            >
                {subtitle}
            </Span>
        </Column>
    </Wrapper>
);
