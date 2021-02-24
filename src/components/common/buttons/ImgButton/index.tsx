import React, { FC } from 'react';
import { BackgroundColor, NoopClick, Sizes } from 'types';
import { CopyButtonWrapper } from './styles';

export interface ImgProps extends BackgroundColor, NoopClick, Sizes {}

export const ImgButton: FC<ImgProps> = ({ children, ...props }) => (
    <CopyButtonWrapper {...props}>{children}</CopyButtonWrapper>
);
