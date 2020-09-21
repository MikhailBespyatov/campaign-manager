import { spanFontColor, spanFontSize, spanFontWeight, spanLineHeight } from 'components/common/blocks/Block/constants';
import { ContentWrapper, TitleWrapper } from 'components/common/blocks/Block/styles';
import { Span } from 'components/common/TextComponents/Span';
import { Column } from 'components/common/wrappers/FlexWrapper';
import React, { FC } from 'react';
import { StrictTitle } from 'types';

interface Props extends StrictTitle {}

export const Block: FC<Props> = ({ children, title }) => (
    <Column marginBottom="20px" marginRight="20px">
        <TitleWrapper>
            <Span color={spanFontColor} fontSize={spanFontSize} fontWeight={spanFontWeight} lineHeight={spanLineHeight}>
                {title}
            </Span>
        </TitleWrapper>
        <ContentWrapper>{children}</ContentWrapper>
    </Column>
);

export { BlockCell } from './styles';
