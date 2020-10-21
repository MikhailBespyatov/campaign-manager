import { SpanProps } from 'components/common/links/InternalLink/types';
import {
    defaultFontFamily,
    defaultFontSize,
    defaultFontStyle,
    defaultFontWeight,
    defaultLineHeight,
    defaultTextColor
} from 'constants/defaults';
import { secondaryPadding } from 'constants/styles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const InternalLink = styled(Link)<SpanProps>`
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : defaultFontFamily)};
    font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : defaultFontStyle)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : defaultFontWeight)};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : defaultFontSize)};
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : defaultLineHeight)};
    ${({ letterSpacing }) => (letterSpacing ? `letter-spacing: ${letterSpacing};` : ``)};
    color: ${({ color }) => (color ? color : defaultTextColor)};
    ${({ noWrap }) => (noWrap ? 'white-space: nowrap' : '')};
    ${({ opacity }) => (opacity ? `opacity: ${opacity};` : ``)};
    ${({ alignCenter }) => (alignCenter ? 'text-align: center' : '')};
    ${({ alignEnd }) => (alignEnd ? 'text-align: end' : '')};
    ${({ textDecoration }) => (textDecoration ? `text-decoration: ${textDecoration}` : `text-decoration: underline`)};
    margin-right: ${secondaryPadding};
    margin-bottom: ${secondaryPadding};
    &:hover {
        opacity: 0.6;
    }
`;
