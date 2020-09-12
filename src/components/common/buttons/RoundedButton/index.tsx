import { Button, Span } from 'components/common/buttons/RoundedButton/styles';
import { ButtonProps } from 'components/common/buttons/RoundedButton/types';
import { Column, Row } from 'components/common/wrappers/FlexWrapper';
import { padding } from 'constants/styles';
import React, { FC } from 'react';

interface Props extends ButtonProps {
    onClick?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    disabled?: boolean;
    Img?: JSX.Element;
}

export const RoundedButton: FC<Props> = ({ children, onClick, disabled, reverse, Img, marginBottom }) => (
    <Button disabled={disabled} marginBottom={marginBottom} reverse={reverse} onClick={onClick}>
        {Img ? (
            <Row justifyCenter marginBottom="0">
                <Column marginRight={padding}>{Img}</Column>
                <Span reverse={reverse}>{children}</Span>
            </Row>
        ) : (
            <Span reverse={reverse}>{children}</Span>
        )}
    </Button>
);
