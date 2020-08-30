import {
    subtitleColor,
    subtitleFontSize,
    subtitleFontWeight,
    subtitleLineHeight,
    titleColor,
    titleFontSize,
    titleFontWeight,
    titleLineHeight
} from 'components/common/features/Budget/constants';
import { Wrapper } from 'components/common/features/Budget/styles';
import { Span } from 'components/common/TextComponents/Span';
import { Column, Row } from 'components/common/wrappers/FlexWrapper';
import React from 'react';
import { Title } from 'types';

interface Props extends Title {}

export const Budget = ({ title, subtitle = '' }: Props) => (
    <Wrapper>
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
