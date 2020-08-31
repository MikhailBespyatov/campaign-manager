import {
    wrapperBorderRadius,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperVerticalPadding,
    wrapperWidth
} from 'components/common/tags/ClosableTag/constants';
import styled from 'styled-components';
import { MarginRightBottom } from 'types';
import { black, flexCenter } from '../../../../constants';

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
