import {
    badgeBorderColor,
    badgeBorderRadius,
    badgeBorderWidth,
    badgeFontSize,
    badgeFontWeight,
    badgeHeight,
    badgeHorizontalPadding,
    badgeWidth
} from 'components/common/Badge/constants';
import { flexCenter, mainBackground } from 'constants/styles';
import styled from 'styled-components';
import { MarginRightBottom } from 'types';

export const Badge = styled.span<MarginRightBottom>`
    ${flexCenter};
    height: ${badgeHeight};
    width: ${badgeWidth};
    border: ${badgeBorderWidth} solid ${badgeBorderColor};
    border-radius: ${badgeBorderRadius};
    font-weight: ${badgeFontWeight};
    font-size: ${badgeFontSize};
    line-height: ${badgeFontSize};
    color: ${mainBackground};
    margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '0')};
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : '0')};
    padding: 0 ${badgeHorizontalPadding};
`;
