import {
    itemHorizontalMargin,
    itemPaddingBottom,
    spanFontSize,
    spanFontWeight,
    spanLineHeight,
    styledBorderHeight,
    styledBorderMarginTop,
    styledBorderWidth
} from 'components/common/dividers/BarItem/constants';
import { Span } from 'components/common/typography/Span';
import { black, transitionTime } from 'constants/styles';
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

export const StyledBarText = styled(Span)`
    font-size: ${spanFontSize};
    font-weight: ${spanFontWeight};
    line-height: ${spanLineHeight};

    &:hover {
        color: ${black};
        transition: color 0.3s;
    }
`;

export const StyledBorder = styled.div`
    width: ${styledBorderWidth};
    height: ${styledBorderHeight};
    margin-top: ${styledBorderMarginTop};
    background-color: ${({ theme: { primaryColor } }) => primaryColor};
`;
