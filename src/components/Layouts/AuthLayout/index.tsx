import { authLayoutBackgroundColor } from 'components/Layouts/AuthLayout/constants';
import { Main } from 'components/Layouts/AuthLayout/styles';
import React, { FC } from 'react';
import { Background } from 'types';

interface Props extends Background {}

export const AuthLayout: FC<Props> = ({ children, background = authLayoutBackgroundColor }) => (
    <Main background={background}>{children}</Main>
);
