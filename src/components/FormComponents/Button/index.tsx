import { Button as StyledButton } from 'components/FormComponents/Button/styles';
import React, { FC } from 'react';
import { Background, Disabled, HTMLButtonType } from 'types';

interface Props extends Disabled, HTMLButtonType, Background {}

export const Button: FC<Props> = ({ children, type = 'submit', ...rest }) => (
    <StyledButton type={type} {...rest}>
        {children}
    </StyledButton>
);
