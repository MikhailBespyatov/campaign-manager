import backgroundImage from 'assets/img/organization-background.jpg';
import { AbsoluteImg } from 'components/common/ImageComponents/AbsoluteImg';
import { authLayoutBackgroundColor } from 'components/Layouts/AuthLayout/constants';
import { Main } from 'components/Layouts/AuthLayout/styles';
import React, { FC } from 'react';
import { WithSrc } from 'types';
import { defaultImgAlt } from '../../../constants';

interface Props extends WithSrc {}

export const AuthLayout: FC<Props> = ({ children, src = backgroundImage }) => (
    <Main>
        <AbsoluteImg alt={defaultImgAlt} background={authLayoutBackgroundColor} src={src} />
        {children}
    </Main>
);
