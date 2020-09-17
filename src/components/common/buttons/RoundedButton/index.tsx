import { spanFontSize, spanLetterSpacing, spanLineHeight } from 'components/common/buttons/RoundedButton/constants';
import { Button } from 'components/common/buttons/RoundedButton/styles';
import { ButtonProps } from 'components/common/buttons/RoundedButton/types';
import { Span } from 'components/common/TextComponents/Span';
import { Column, Row } from 'components/common/wrappers/FlexWrapper';
import { padding, reverseColor, white } from 'constants/styles';
import React, { FC } from 'react';
import { Disabled, Reverse } from 'types';

const InnerSpan: FC<Reverse> = ({ children, reverse }) => (
    <Span
        alignCenter
        color={reverse ? reverseColor : white}
        fontSize={spanFontSize}
        letterSpacing={spanLetterSpacing}
        lineHeight={spanLineHeight}
    >
        {children}
    </Span>
);

interface Props extends ButtonProps, Disabled {
    onClick?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    Img?: JSX.Element;
}

export const RoundedButton: FC<Props> = ({ children, onClick, disabled, reverse, Img, marginBottom }) => (
    <Button disabled={disabled} marginBottom={marginBottom} reverse={reverse} onClick={onClick}>
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
