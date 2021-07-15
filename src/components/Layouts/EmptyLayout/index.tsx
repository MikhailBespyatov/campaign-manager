import { Span } from 'components/common/typography/Span';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { black, grey4 } from 'constants/styles';
import React from 'react';
import { Title } from 'types';

export interface EmptyLayoutProps extends Title {}

export const EmptyLayout = ({ title, subtitle }: EmptyLayoutProps) => (
    // <EmptyWrapper alignCenter justifyCenter height="1260px">
    <Column alignCenter>
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
        <Row justifyCenter margin="25px 16px" maxWidth="875px">
            <Span alignCenter color={grey4} fontSize="13px" fontWeight="400" letterSpacing="1px" lineHeight="22px">
                {subtitle}
            </Span>
        </Row>
    </Column>
    // </EmptyWrapper>
);
