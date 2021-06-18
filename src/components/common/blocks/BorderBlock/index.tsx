import { Wrapper } from 'components/common/blocks/BorderBlock/styles';
import React, { FC } from 'react';
import {
    BackgroundColor,
    MarginBottom,
    MarginRight,
    PaddingBottom,
    PaddingRight,
    RemoveBorderRadius,
    Sizes
} from 'types';

interface Props
    extends Sizes,
        PaddingRight,
        PaddingBottom,
        MarginRight,
        MarginBottom,
        RemoveBorderRadius,
        BackgroundColor {}

export const BorderBlock: FC<Props> = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>;
