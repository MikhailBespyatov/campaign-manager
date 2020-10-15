import {
    wrapperBorderRadius,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperVerticalPadding,
    wrapperWidth
} from 'components/common/tags/AddableTag/constants';
import { black, flexCenter } from 'constants/styles';
import styled from 'styled-components';
import { MarginRightBottom } from 'types';

export const Wrapper = styled.div<MarginRightBottom>`
    ${flexCenter};
    justify-content: space-evenly;
    //width: ${wrapperWidth};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    background-color: ${black};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : ``)};
    ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight};` : ``)};
`;
