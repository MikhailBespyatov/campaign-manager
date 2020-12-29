import { ContentWrapper, TitleWrapper } from 'components/common/blocks/HighlightedTitleBlock/styles';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { primaryPadding } from 'constants/styles';
import React, { FC } from 'react';
import { MarginRightBottom, Sizes, StrictTitle } from 'types';

interface Props extends StrictTitle, MarginRightBottom, Sizes {
    buttons?: JSX.Element;
}

export const HighlightedTitleBlock: FC<Props> = ({ children, title, buttons, marginBottom, marginRight, width }) => (
    <Column
        marginBottom={marginBottom ? marginBottom : primaryPadding}
        marginRight={marginRight ? marginRight : primaryPadding}
        marginTop="20px"
        width={width}
    >
        <TitleWrapper>
            {title}
            <MarginWrapper marginLeft="auto">{buttons}</MarginWrapper>
        </TitleWrapper>
        <ContentWrapper>{children}</ContentWrapper>
    </Column>
);
