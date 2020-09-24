import { ContentWrapper, TitleWrapper } from 'components/common/blocks/HighlightedTitleBlock/styles';
import { H3 } from 'components/common/titles/H';
import { Column } from 'components/common/wrappers/FlexWrapper';
import React, { FC } from 'react';
import { StrictTitle } from 'types';

interface Props extends StrictTitle {}

export const HighlightedTitleBlock: FC<Props> = ({ children, title }) => (
    <Column marginBottom="20px" marginRight="20px">
        <TitleWrapper>
            <H3>{title}</H3>
        </TitleWrapper>
        <ContentWrapper>{children}</ContentWrapper>
    </Column>
);
