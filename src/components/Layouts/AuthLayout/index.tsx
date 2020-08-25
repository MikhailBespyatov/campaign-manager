import backgroundImage from 'assets/img/organization-background.jpg';
import { Img, ImgWrapper, Wrapper } from 'components/Layouts/AuthLayout/styles';
import React, { FC } from 'react';
import { defaultImgAlt } from '../../../constants';

export const AuthLayout: FC = ({ children }) => (
    <Wrapper>
        <ImgWrapper>
            <Img alt={defaultImgAlt} src={backgroundImage} />
        </ImgWrapper>
        {children}
    </Wrapper>
);
