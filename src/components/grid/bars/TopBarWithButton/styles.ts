import {
    activeColor,
    itemHorizontalMargin,
    itemPaddingBottom,
    styledBorderHeight,
    styledBorderWidth,
    wrapperBackground,
    wrapperBorderRadius,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperVerticalPadding
} from 'components/grid/bars/TopBarWithButton/constants';
import { flexStart, transitionTime } from 'constants/styles';
import styled from 'styled-components';
import { Active } from 'types';

export const Wrapper = styled.div`
    ${flexStart};
    //align-items: center;
    width: 100%;
    height: ${wrapperHeight};
    border-top-left-radius: ${wrapperBorderRadius};
    border-top-right-radius: ${wrapperBorderRadius};
    background: ${wrapperBackground};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
    padding-bottom: 0;
`;

export const StyledItem = styled.div<Active>`
    margin: 0 ${itemHorizontalMargin};
    padding-bottom: ${itemPaddingBottom};
    opacity: ${({ active }) => (active ? `1` : `0.4`)};
    transition: ${transitionTime};
    &:first-child {
        margin-left: 0;
    }
    cursor: pointer;
`;

export const StyledBorder = styled.div`
    width: ${styledBorderWidth};
    height: ${styledBorderHeight};
    background-color: ${activeColor};
`;
