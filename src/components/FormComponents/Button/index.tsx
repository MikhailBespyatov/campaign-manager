import { Button as StyledButton } from 'components/FormComponents/Button/styles';
import React, { FC } from 'react';
import { Disabled, HTMLButtonType } from 'types';

interface Props extends Disabled, HTMLButtonType {}

export const Button: FC<Props> = ({ children, disabled = false, type = 'submit' }) => (
    <StyledButton disabled={disabled} type={type}>
        {children}
    </StyledButton>
);
