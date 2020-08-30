import { Button, Span } from 'components/common/buttons/RoundedButton/styles';
import React, { FC } from 'react';

interface Props {
    onClick?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    disabled?: boolean;
}

export const RoundedButton: FC<Props> = ({ children, onClick, disabled }) => (
    <Button disabled={disabled} onClick={onClick}>
        <Span>{children}</Span>
    </Button>
);
