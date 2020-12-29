import { Wrapper } from 'components/common/blocks/BorderBlock/styles';
import React, { FC } from 'react';
import { MarginBottom, MarginRight, PaddingBottom, PaddingRight, RemoveBorderRadius, Sizes } from 'types';

interface Props extends Sizes, PaddingRight, PaddingBottom, MarginRight, MarginBottom, RemoveBorderRadius {}

export const BorderBlock: FC<Props> = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>;
