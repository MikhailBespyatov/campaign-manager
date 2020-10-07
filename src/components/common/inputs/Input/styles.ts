import { InputProps } from 'components/common/inputs/Input/types';
import {
    defaultFontFamily,
    defaultFontSize,
    defaultFontStyle,
    defaultFontWeight,
    defaultLineHeight,
    defaultTextColor
} from 'constants/defaults';
import styled from 'styled-components';

export const NumberInput = styled.input.attrs({ type: 'number' })<InputProps>`
    outline: none;
    border: none;
    appearance: none;
    ${({ width }) => (width ? `width: ${width};` : ``)};
    ${({ minWidth }) => (minWidth ? `min-width: ${minWidth};` : ``)};
    ${({ height }) => (height ? `height: ${height};` : ``)};
    ${({ background }) => (background ? `background: ${background};` : ``)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : defaultFontFamily)};
    font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : defaultFontStyle)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : defaultFontWeight)};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : defaultFontSize)};
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : defaultLineHeight)};
    ${({ alignTextCenter }) => (alignTextCenter ? `text-align: center;` : ``)};
    color: ${({ color }) => (color ? color : defaultTextColor)};
    &::-outer-spin-button,
    &::-inner-spin-button {
        -webkit-appearance: none;
    }
`;

export const TextInput = styled.input<InputProps>`
    outline: none;
    border: none;
    appearance: none;
    ${({ width }) => (width ? `width: ${width};` : ``)};
    ${({ minWidth }) => (minWidth ? `min-width: ${minWidth};` : ``)};
    ${({ height }) => (height ? `height: ${height};` : ``)};
    ${({ background }) => (background ? `background: ${background};` : ``)};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : defaultFontFamily)};
    font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : defaultFontStyle)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : defaultFontWeight)};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : defaultFontSize)};
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : defaultLineHeight)};
    ${({ alignTextCenter }) => (alignTextCenter ? `text-align: center;` : ``)};
`;

export const HiddenInput = styled.input.attrs({ type: 'hidden' })`
    outline: none;
    border: none;
    appearance: none;
`;
