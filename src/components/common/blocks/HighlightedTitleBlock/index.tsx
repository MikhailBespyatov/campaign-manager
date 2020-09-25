import { ContentWrapper, TitleWrapper } from 'components/common/blocks/HighlightedTitleBlock/styles';
import { H3 } from 'components/common/typography/titles/H';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import React, { FC } from 'react';
import { StrictTitle } from 'types';

interface Props extends StrictTitle {
    buttons?: JSX.Element;
}

export const HighlightedTitleBlock: FC<Props> = ({ children, title, buttons }) => (
    <Column marginBottom="20px" marginRight="20px">
        <TitleWrapper>
            <H3>{title}</H3>
            <MarginWrapper marginLeft="auto">{buttons}</MarginWrapper>
        </TitleWrapper>
        <ContentWrapper>{children}</ContentWrapper>
    </Column>
);
