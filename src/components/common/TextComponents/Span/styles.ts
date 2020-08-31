import { SpanProps } from 'components/common/TextComponents/Span/types';
import styled from 'styled-components';
import {
    defaultFontFamily,
    defaultFontSize,
    defaultFontStyle,
    defaultFontWeight,
    defaultLineHeight,
    defaultTextColor
} from '../../../../constants';

export const Span = styled.span<SpanProps>`
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : defaultFontFamily)};
    font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : defaultFontStyle)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : defaultFontWeight)};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : defaultFontSize)};
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : defaultLineHeight)};
    color: ${({ color }) => (color ? color : defaultTextColor)};
    ${({ noWrap }) => (noWrap ? 'white-space: nowrap' : '')};
    ${({ opacity }) => (opacity ? `opacity: ${opacity};` : ``)};
`;
