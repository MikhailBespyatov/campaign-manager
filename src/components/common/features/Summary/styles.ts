import {
    wrapperBackground,
    wrapperBorderColor,
    wrapperBorderRadius,
    wrapperBorderWidth,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperMargin,
    wrapperWidth
} from 'components/common/features/Summary/constants';
import { flexCenter } from 'constants/styles';
import styled from 'styled-components';
import { MarginRightBottom } from 'types';

export const Wrapper = styled.div<MarginRightBottom>`
    ${flexCenter};
    flex-direction: column;
    min-width: ${wrapperWidth};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    border: ${wrapperBorderWidth} solid ${wrapperBorderColor};
    background-color: ${wrapperBackground};
    padding: 0 ${wrapperHorizontalPadding};
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : wrapperMargin)};
    ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight};` : wrapperMargin)};
`;
