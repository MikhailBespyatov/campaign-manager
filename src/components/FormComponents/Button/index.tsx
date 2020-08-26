import { Button as StyledButton } from 'components/FormComponents/Button/styles';
import React, { FC } from 'react';

interface Props {
    onClick: () => void;
    disabled?: boolean;
}

export const Button: FC<Props> = ({ children, onClick, disabled = false }) => (
    <StyledButton disabled={disabled} onClick={onClick}>
        {children}
    </StyledButton>
);
