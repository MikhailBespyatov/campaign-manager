import {
    blockWidth,
    spanFontColor,
    spanFontSize,
    spanFontWeight,
    spanLineHeight
} from 'components/common/blocks/AsideBlock/constants';
import { ContentWrapper, TitleWrapper } from 'components/common/blocks/AsideBlock/styles';
import { Span } from 'components/common/typography/Span';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import React, { FC } from 'react';
import { StrictTitle } from 'types';

interface Props extends StrictTitle {}

export const AsideBlock: FC<Props> = ({ children, title }) => (
    <Column width={blockWidth}>
        <TitleWrapper>
            <Span color={spanFontColor} fontSize={spanFontSize} fontWeight={spanFontWeight} lineHeight={spanLineHeight}>
                {title}
            </Span>
        </TitleWrapper>
        <ContentWrapper>{children}</ContentWrapper>
    </Column>
);
