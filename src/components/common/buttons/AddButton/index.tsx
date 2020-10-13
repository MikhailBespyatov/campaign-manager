import { spanFontSize, spanFontWeight, spanLineHeight } from 'components/common/buttons/AddButton/constants';
import { Button } from 'components/common/buttons/AddButton/styles';
import { ButtonProps } from 'components/common/buttons/AddButton/types';
import { Span } from 'components/common/typography/Span';
import { reverseColor, white } from 'constants/styles';
import React, { FC } from 'react';
import { Disabled, Reverse } from 'types';

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

interface Props extends ButtonProps, Disabled {
    onClick?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

export const AddButton = ({ onClick, disabled, reverse, marginBottom }: Props) => (
    <Button disabled={disabled} marginBottom={marginBottom} reverse={reverse} onClick={onClick}>
        <InnerSpan reverse={reverse}>+{'  '}ADD</InnerSpan>
    </Button>
);
