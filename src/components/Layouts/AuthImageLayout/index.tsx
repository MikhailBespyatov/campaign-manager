import backgroundImage from 'assets/img/organization-background.jpg';
import { AbsoluteImg } from 'components/common/ImageComponents/AbsoluteImg';
import { authLayoutBackgroundColor } from 'components/Layouts/AuthImageLayout/constants';
import { Main } from 'components/Layouts/AuthImageLayout/styles';
import React, { FC } from 'react';
import { WithSrc } from 'types';

interface Props extends WithSrc {}

export const AuthImageLayout: FC<Props> = ({ children, src = backgroundImage }) => (
    <Main>
        <AbsoluteImg background={authLayoutBackgroundColor} src={src} />
        {children}
    </Main>
);
