import {
    wrapperBorderRadius,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperVerticalPadding
} from 'components/common/tags/AddableTag/constants';
import { Span } from 'components/common/typography/Span';
import { black, ellipsisMixin, flexCenter, primaryColor } from 'constants/styles';
import styled from 'styled-components';
import { MarginRightBottom } from 'types';

export const Wrapper = styled.div<MarginRightBottom>`
    ${flexCenter};
    justify-content: space-evenly;
    max-width: 300px;
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    background-color: ${black};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : ``)};
    ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight};` : ``)};
`;

export const ClosableTagSpan = styled(Span)`
    max-width: 240px;
    color: ${primaryColor};
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    ${ellipsisMixin}
`;
