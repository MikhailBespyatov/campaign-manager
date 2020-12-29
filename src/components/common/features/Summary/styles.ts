import {
    wrapperBackground,
    wrapperBorderColor,
    wrapperBorderRadius,
    wrapperBorderWidth,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperMargin,
    wrapperMarginBottom,
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
    margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : wrapperMarginBottom)};
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : wrapperMargin)};
`;
