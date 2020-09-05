import {
    activeBackground,
    inactiveBackground,
    wrapperBorderRadius,
    wrapperBoxShadow,
    wrapperHorizontalPadding,
    wrapperPaddingBottom,
    wrapperVerticalPadding
} from 'components/common/inputs/RowHeaderRadio/constants';
import { RadioProps } from 'components/common/inputs/RowHeaderRadio/types';
import styled from 'styled-components';

export const Radio = styled.div<RadioProps>`
    width: calc(100% / ${({ quantity }) => quantity});
    border-radius: ${wrapperBorderRadius};
    box-shadow: ${wrapperBoxShadow};
    background: ${({ active }) => (active ? activeBackground : inactiveBackground)};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding} ${wrapperPaddingBottom} ${wrapperHorizontalPadding};
    cursor: pointer;
`;
