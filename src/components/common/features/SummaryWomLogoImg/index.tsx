import {
    subtitleColor,
    subtitleFontSize,
    subtitleFontWeight,
    subtitleLineHeight,
    titleColor,
    titleFontSize,
    titleFontWeight,
    titleLineHeight
} from 'components/common/features/SummaryWomLogoImg/constants';
import { Wrapper } from 'components/common/features/SummaryWomLogoImg/styles';
import { WomCurrencyImg } from 'components/common/imageComponents/WomCurrencyImg';
import { Span } from 'components/common/typography/Span';
import { headerAvatarDiameter } from 'components/grid/Header/constants';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { secondaryPadding } from 'constants/styles';
import React from 'react';
import { MarginRightBottom, Title } from 'types';

interface Props extends Title, MarginRightBottom {}

export const SummaryWomLogoImg = ({ title, subtitle = '', ...marginRightBottom }: Props) => (
    <Wrapper {...marginRightBottom}>
        <Row alignCenter marginBottom="5px">
            <Column marginRight={secondaryPadding}>
                <Row marginBottom="0" marginTop="3px">
                    <Span
                        color={titleColor}
                        fontSize={titleFontSize}
                        fontWeight={titleFontWeight}
                        lineHeight={titleLineHeight}
                    >
                        {title}
                    </Span>
                </Row>
            </Column>
            <WomCurrencyImg height={headerAvatarDiameter} />
        </Row>
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
