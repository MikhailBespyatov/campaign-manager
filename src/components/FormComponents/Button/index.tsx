import { Button as StyledButton } from 'components/FormComponents/Button/styles';
import React, { FC } from 'react';

interface Props {
    onClick?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    disabled?: boolean;
}

export const Button: FC<Props> = ({ children, onClick, disabled = false }) => (
    <StyledButton disabled={disabled} onClick={onClick}>
        {children}
    </StyledButton>
);
