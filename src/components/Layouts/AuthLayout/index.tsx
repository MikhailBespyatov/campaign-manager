import backgroundImage from 'assets/img/organization-background.jpg';
import { AbsoluteImg } from 'components/common/ImageComponents/AbsoluteImg';
import { authLayoutBackgroundColor } from 'components/Layouts/AuthLayout/constants';
import { Wrapper } from 'components/Layouts/AuthLayout/styles';
import React, { FC } from 'react';
import { defaultImgAlt } from '../../../constants';

export const AuthLayout: FC = ({ children }) => (
    <Wrapper>
        <AbsoluteImg alt={defaultImgAlt} backgroundColor={authLayoutBackgroundColor} src={backgroundImage} />
        {children}
    </Wrapper>
);
