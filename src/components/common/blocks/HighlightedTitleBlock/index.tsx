import { ContentWrapper, TitleWrapper } from 'components/common/blocks/HighlightedTitleBlock/styles';
import { H3 } from 'components/common/typography/titles/H';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { primaryPadding } from 'constants/styles';
import React, { FC } from 'react';
import { MarginRightBottom, StrictTitle } from 'types';

interface Props extends StrictTitle, MarginRightBottom {
    buttons?: JSX.Element;
}

export const HighlightedTitleBlock: FC<Props> = ({ children, title, buttons, marginBottom, marginRight }) => (
    <Column
        marginBottom={marginBottom ? marginBottom : primaryPadding}
        marginRight={marginRight ? marginRight : primaryPadding}
    >
        <TitleWrapper>
            <H3>{title}</H3>
            <MarginWrapper marginLeft="auto">{buttons}</MarginWrapper>
        </TitleWrapper>
        <ContentWrapper>{children}</ContentWrapper>
    </Column>
);
