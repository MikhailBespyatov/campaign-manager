import { AddButton } from 'components/common/buttons/NewDesign/AddButton';
import { Span } from 'components/common/typography/Span';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { black, grey4, tertiaryBorderRadius, white } from 'constants/styles';
import React from 'react';
import { Noop, Title } from 'types';

export interface EmptyLayoutProps extends Title {
    onClickAddButton: Noop;
}

export const EmptyLayout = ({ title, subtitle, onClickAddButton }: EmptyLayoutProps) => (
    // <EmptyWrapper alignCenter justifyCenter height="1260px">
    <Column alignCenter>
        <MarginWrapper marginBottom="40px">
            <AddButton
                justifyCenter
                backgroundColor={white}
                border="1px solid #c6c6c6"
                borderRadius={tertiaryBorderRadius}
                fontSize="18px"
                fontWeight="400"
                height="62px"
                lineHeight="22px"
                type="black"
                width="230px"
                onClick={onClickAddButton}
            >
                Add New
            </AddButton>
        </MarginWrapper>
        <Row justifyCenter>
            <Span
                alignCenter
                uppercase
                color={black}
                fontSize="18px"
                fontWeight="700"
                letterSpacing="1px"
                lineHeight="22px"
            >
                {title}
            </Span>
        </Row>
        <Row justifyCenter margin="16px" maxWidth="840px">
            <Span alignCenter color={grey4} fontSize="13px" fontWeight="400" letterSpacing="1px" lineHeight="22px">
                {subtitle}
            </Span>
        </Row>
    </Column>
    // </EmptyWrapper>
);
