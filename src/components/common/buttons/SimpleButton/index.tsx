import { spanFontSize, spanFontWeight, spanLineHeight } from 'components/common/buttons/SimpleButton/constants';
import { Button } from 'components/common/buttons/SimpleButton/styles';
import { ButtonProps } from 'components/common/buttons/SimpleButton/types';
import { Span } from 'components/common/typography/Span';
import React, { FC } from 'react';
import { BackgroundColor, Color, Disabled } from 'types';
import { ReactClick } from 'types/react';

const InnerSpan: FC<Color> = ({ children, color }) => (
    <Span alignCenter color={color} fontSize={spanFontSize} fontWeight={spanFontWeight} lineHeight={spanLineHeight}>
        {children}
    </Span>
);

export interface Props extends ButtonProps, Disabled, BackgroundColor, Color, ReactClick<HTMLButtonElement> {
    children: string;
}

export const SimpleButton = ({ onClick, disabled, marginBottom, children, backgroundColor, color }: Props) => (
    <Button
        backgroundColor={backgroundColor}
        color={color}
        disabled={disabled}
        marginBottom={marginBottom}
        onClick={onClick}
    >
        <InnerSpan color={color}>{children}</InnerSpan>
    </Button>
);
