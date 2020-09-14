import {
    badgeBorderColor,
    badgeBorderRadius,
    badgeBorderWidth,
    badgeFontSize,
    badgeFontWeight,
    badgeHeight,
    badgeHorizontalPadding,
    badgeLineHeight,
    badgeVerticalPadding
} from 'components/common/Badge/constants';
import { mainBackground } from 'constants/styles';
import styled from 'styled-components';
import { MarginRightBottom } from 'types';

export const Badge = styled.span<MarginRightBottom>`
    height: ${badgeHeight};
    border: ${badgeBorderWidth} solid ${badgeBorderColor};
    border-radius: ${badgeBorderRadius};
    font-weight: ${badgeFontWeight};
    font-size: ${badgeFontSize};
    line-height: ${badgeLineHeight};
    color: ${mainBackground};
    margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '0')};
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : '0')};
    padding: ${badgeVerticalPadding} ${badgeHorizontalPadding};
`;
