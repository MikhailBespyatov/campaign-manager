import { ContentWrapper, TitleWrapper } from 'components/common/blocks/Block/styles';
import { H3 } from 'components/common/typography/titles/H';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { primaryPadding } from 'constants/styles';
import React, { FC } from 'react';
import { MarginRightBottom, StrictTitle } from 'types';

interface Props extends StrictTitle, MarginRightBottom {}

export const Block: FC<Props> = ({ children, title, marginBottom, marginRight }) => (
    <Column
        marginBottom={marginBottom ? marginBottom : primaryPadding}
        marginRight={marginRight ? marginRight : primaryPadding}
    >
        <TitleWrapper>
            {/* <Span color={spanFontColor} fontSize={spanFontSize} fontWeight={spanFontWeight} lineHeight={spanLineHeight}> */}
            <H3>{title}</H3>
            {/* </Span> */}
        </TitleWrapper>
        <ContentWrapper>{children}</ContentWrapper>
    </Column>
);
