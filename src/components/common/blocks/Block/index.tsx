import { ContentWrapper, TitleWrapper } from 'components/common/blocks/Block/styles';
import { H3 } from 'components/common/titles/H';
import { Column } from 'components/common/wrappers/FlexWrapper';
import React, { FC } from 'react';
import { StrictTitle } from 'types';

interface Props extends StrictTitle {}

export const Block: FC<Props> = ({ children, title }) => (
    <Column>
        <TitleWrapper>
            {/* <Span color={spanFontColor} fontSize={spanFontSize} fontWeight={spanFontWeight} lineHeight={spanLineHeight}> */}
            <H3>{title}</H3>
            {/* </Span> */}
        </TitleWrapper>
        <ContentWrapper>{children}</ContentWrapper>
    </Column>
);
