import backgroundImage from 'assets/img/organization-background.jpg';
import { AbsoluteImg } from 'components/common/ImageComponents/AbsoluteImg';
import { authLayoutBackgroundColor } from 'components/Layouts/AuthLayout/constants';
import { Main } from 'components/Layouts/AuthLayout/styles';
import React, { FC } from 'react';
import { defaultImgAlt } from '../../../constants';

export const AuthLayout: FC = ({ children }) => (
    <Main>
        <AbsoluteImg alt={defaultImgAlt} background={authLayoutBackgroundColor} src={backgroundImage} />
        {children}
    </Main>
);
