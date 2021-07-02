import { spanFontSize, spanFontWeight, spanLineHeight } from 'components/common/buttons/SimpleButton/constants';
import { Button } from 'components/common/buttons/SimpleButton/styles';
import { ButtonProps } from 'components/common/buttons/SimpleButton/types';
import { Span } from 'components/common/typography/Span';
import React, { FC } from 'react';
import { BackgroundColor, Color, Disabled, TextProperties } from 'types';
import { ReactClick } from 'types/react';

interface InnerSpanProps extends TextProperties {}

const InnerSpan: FC<InnerSpanProps> = ({ children, color, fontSize, lineHeight, fontWeight }) => (
    <Span
        alignCenter
        color={color}
        fontSize={fontSize || spanFontSize}
        fontWeight={fontWeight || spanFontWeight}
        lineHeight={lineHeight || spanLineHeight}
    >
        {children}
    </Span>
);

export interface Props
    extends ButtonProps,
        Disabled,
        BackgroundColor,
        Color,
        ReactClick<HTMLButtonElement>,
        InnerSpanProps {
    children: string;
}

export const SimpleButton = ({
    onClick,
    disabled,
    marginBottom,
    children,
    backgroundColor,
    color,
    ...spanProps
}: Props) => (
    <Button
        backgroundColor={backgroundColor}
        color={color}
        disabled={disabled}
        marginBottom={marginBottom}
        onClick={onClick}
    >
        <InnerSpan color={color} {...spanProps}>
            {children}
        </InnerSpan>
    </Button>
);
