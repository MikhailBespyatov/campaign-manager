import React from 'react';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { AddButton } from 'components/common/buttons/NewDesign/AddButton';
import { Span } from 'components/common/typography/Span';
import { grey4 } from 'constants/styles';
import { Noop, Title } from 'types';
import { EmptyWrapper } from './styles';

export interface EmptyLayoutProps extends Title {
    onClickAddButton: Noop;
}

export const EmptyLayout = ({ title, subtitle, onClickAddButton }: EmptyLayoutProps) => (
    <EmptyWrapper alignCenter justifyCenter height="1260px">
        <Column alignCenter>
            <MarginWrapper marginBottom="72px">
                <AddButton
                    justifyCenter
                    fontSize="18px"
                    fontWeight="400"
                    height="73px"
                    lineHeight="22px"
                    type="black"
                    width="347px"
                    onClick={onClickAddButton}
                >
                    Add New
                </AddButton>
            </MarginWrapper>
            <Row justifyCenter marginBottom="23px">
                <Span alignCenter fontSize="18px" fontWeight="400" lineHeight="22px">
                    {title}
                </Span>
            </Row>
            <Row justifyCenter width="890px">
                <Span alignCenter color={grey4} fontSize="13px" fontWeight="400" lineHeight="22px">
                    {subtitle}
                </Span>
            </Row>
        </Column>
    </EmptyWrapper>
);
