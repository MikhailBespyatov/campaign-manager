import {
    activeBackground,
    inactiveBackground,
    wrapperBoxShadow,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperPaddingBottom,
    wrapperVerticalPadding
} from 'components/common/inputs/RowHeaderRadio/constants';
import { RadioProps } from 'components/common/inputs/RowHeaderRadio/types';
import { itemActiveBorder, itemBorderRadius, itemDefaultColor } from 'components/common/inputs/RowRadio/constants';
import { secondaryBorder } from 'constants/styles';
import styled from 'styled-components';

export const Radio = styled.div<RadioProps>`
    width: calc(100% / ${({ quantity }) => quantity});
    height: ${wrapperHeight};
    border: ${secondaryBorder};
    ${({ active }) => (active ? `border-top: ${itemActiveBorder}; border-bottom: none;` : itemDefaultColor)};
    box-shadow: ${wrapperBoxShadow};
    background: ${({ active }) => (active ? activeBackground : inactiveBackground)};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding} ${wrapperPaddingBottom} ${wrapperHorizontalPadding};
    cursor: pointer;
    &:first-child {
        border-top-left-radius: ${({ active }) => (active ? '0' : itemBorderRadius)};
    }
    &:last-child {
        border-top-right-radius: ${({ active }) => (active ? '0' : itemBorderRadius)};
    }
    &:not(:first-child) {
        border-left: none;
    }
`;
