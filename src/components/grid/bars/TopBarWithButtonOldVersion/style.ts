import {
    activeColor,
    itemBorderWidth,
    itemHorizontalMargin,
    itemPaddingBottom,
    StyledBorderWidth
} from 'components/grid/bars/TopBarWithButtonOldVersion/constants';
import { transitionTime } from 'constants/styles';
import styled from 'styled-components';
import { Active } from 'types';

export const StyledItem = styled.div<Active>`
    cursor: pointer;
    margin: 0 ${itemHorizontalMargin};
    padding-bottom: ${itemPaddingBottom};
    opacity: 0.4;
    ${({ active }) => (active ? `opacity: 1;` : ``)};
    transition: ${transitionTime};
    &:first-child {
        margin-left: 0;
    }
`;

export const StyledBorder = styled.div`
    width: ${StyledBorderWidth};
    height: ${itemBorderWidth};
    background-color: ${activeColor};
`;

export const ButtonsWrapper = styled.div`
    margin-left: auto;
`;
