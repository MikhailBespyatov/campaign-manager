import { buttonDefaultBackground } from 'components/FormComponents/Button/constants';
import { Button as StyledButton } from 'components/FormComponents/Button/styles';
import React, { FC } from 'react';
import { Background, Disabled, HTMLButtonType } from 'types';

interface Props extends Disabled, HTMLButtonType, Background {}

export const Button: FC<Props> = ({ children, type = 'submit', background = buttonDefaultBackground, ...rest }) => (
    <StyledButton {...rest} background={background} type={type}>
        {children}
    </StyledButton>
);
