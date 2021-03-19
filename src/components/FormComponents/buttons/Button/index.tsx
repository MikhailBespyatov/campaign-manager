import { buttonDefaultBackground } from 'components/FormComponents/buttons/Button/constants';
import { StyledButton, StyledButtonProps } from 'components/FormComponents/buttons/Button/styles';
import React, { FC } from 'react';
import { Disabled, HTMLButtonType } from 'types';

interface Props extends Disabled, HTMLButtonType, StyledButtonProps {}

export const Button: FC<Props> = ({ children, type = 'submit', background = buttonDefaultBackground, ...rest }) => (
    <StyledButton {...rest} background={background} type={type}>
        {children}
    </StyledButton>
);
