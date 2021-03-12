import {
    itemHorizontalMargin,
    itemPaddingBottom,
    styledBorderHeight,
    styledBorderMarginTop,
    styledBorderWidth
} from 'components/common/dividers/BarItem/constants';
import { transitionTime } from 'constants/styles';
import styled from 'styled-components';
import { Active } from 'types';

export const StyledItem = styled.div<Active>`
    margin: 0 ${itemHorizontalMargin};
    //padding-bottom: ${itemPaddingBottom};
    transition: ${transitionTime};
    &:first-child {
        margin-left: 0;
    }
    cursor: pointer;
`;

export const StyledBorder = styled.div`
    width: ${styledBorderWidth};
    height: ${styledBorderHeight};
    margin-top: ${styledBorderMarginTop};
    background-color: ${({ theme: { primaryColor } }) => primaryColor};
`;
