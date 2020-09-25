import { spanFontSize, spanFontWeight, spanLineHeight } from 'components/common/buttons/RoundedButton/constants';
import { Button } from 'components/common/buttons/RoundedButton/styles';
import { ButtonProps } from 'components/common/buttons/RoundedButton/types';
import { Span } from 'components/common/typography/Span';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { padding, reverseColor, white } from 'constants/styles';
import React, { FC } from 'react';
import { Reverse } from 'types';

const InnerSpan: FC<Reverse> = ({ children, reverse }) => (
    <Span
        alignCenter
        color={reverse ? reverseColor : white}
        fontSize={spanFontSize}
        fontWeight={spanFontWeight}
        lineHeight={spanLineHeight}
    >
        {children}
    </Span>
);

interface Props extends ButtonProps {
    onClick?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    Img?: JSX.Element;
}

export const RoundedButton: FC<Props> = ({ children, Img, reverse, ...rest }) => (
    <Button {...rest} reverse={reverse}>
        {Img ? (
            <Row alignCenter justifyCenter marginBottom="0">
                <Column marginRight={padding}>{Img}</Column>
                <InnerSpan reverse={reverse}>{children}</InnerSpan>
            </Row>
        ) : (
            <InnerSpan reverse={reverse}>{children}</InnerSpan>
        )}
    </Button>
);
