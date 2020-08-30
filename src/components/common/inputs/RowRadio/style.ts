import {
    itemActiveColor,
    itemBorderRadius,
    itemBorderWidth,
    itemDefaultColor,
    itemHeight,
    itemHorizontalPadding,
    itemMinWidth,
    itemVerticalPadding
} from 'components/common/inputs/RowRadio/constants';
import { ItemProps } from 'components/common/inputs/RowRadio/types';
import styled from 'styled-components';
import { flexCenter } from '../../../../constants';

export const StyledItem = styled.div<ItemProps>`
    ${flexCenter};
    min-width: ${itemMinWidth};
    height: ${itemHeight};
    border: ${itemBorderWidth} solid ${itemActiveColor};
    cursor: pointer;
    padding: ${itemVerticalPadding} ${itemHorizontalPadding};
    background-color: ${({ active }) => (active ? itemActiveColor : itemDefaultColor)};
    &:first-child {
        border-top-left-radius: ${itemBorderRadius};
        border-bottom-left-radius: ${itemBorderRadius};
    }
    &:last-child {
        border-top-right-radius: ${itemBorderRadius};
        border-bottom-right-radius: ${itemBorderRadius};
    }
    &:not(:last-child) {
        border-right: none;
    }
`;
