import { Props } from 'components/grid/wrappers/UniversalWrapper/types';
import styled from 'styled-components';

export const UniversalWrapper = styled.div<Props>`
    display: flex;
    ${({ align }) => (align ? `align-items: ${align};` : '')};
    ${({ justify }) => (justify ? `justify-content: ${justify};` : '')};
    ${({ direction }) => (direction ? `flex-direction: ${direction};` : '')};
    ${({ wrap }) => (wrap ? `flex-wrap: ${wrap};` : '')};
    ${({ width }) => (width ? `width: ${width};` : ``)};
    ${({ height }) => (height ? `height: ${height};` : ``)};
    ${({ minWidth }) => (minWidth ? `min-width: ${minWidth};` : ``)};
    ${({ minHeight }) => (minHeight ? `min-height: ${minHeight};` : ``)};
    ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth};` : ``)};
    ${({ maxHeight }) => (maxHeight ? `max-height: ${maxHeight};` : ``)};
    ${({ borderRadius }) => (borderRadius ? `border-radius: ${borderRadius};` : ``)};
    ${({ borderTopLeftRadius }) => (borderTopLeftRadius ? `border-top-left-radius: ${borderTopLeftRadius};` : ``)};
    ${({ borderTopRightRadius }) => (borderTopRightRadius ? `border-top-right-radius: ${borderTopRightRadius};` : ``)};
    ${({ borderBottomLeftRadius }) =>
        borderBottomLeftRadius ? `border-bottom-left-radius: ${borderBottomLeftRadius};` : ``};
    ${({ borderBottomRightRadius }) =>
        borderBottomRightRadius ? `border-bottom-right-radius: ${borderBottomRightRadius};` : ``};
    ${({ border }) => (border ? `border: ${border};` : ``)};
    ${({ borderTop }) => (borderTop ? `border-top: ${borderTop};` : ``)};
    ${({ borderLeft }) => (borderLeft ? `border-left: ${borderLeft};` : ``)};
    ${({ borderRight }) => (borderRight ? `border-right: ${borderRight};` : ``)};
    ${({ borderBottom }) => (borderBottom ? `border-bottom: ${borderBottom};` : ``)};
    ${({ borderWidth }) => (borderWidth ? `border-width: ${borderWidth};` : ``)};
    ${({ borderStyle }) => (borderStyle ? `border-style: ${borderStyle};` : ``)};
    ${({ borderColor }) => (borderColor ? `border-color: ${borderColor};` : ``)};
    ${({ boxShadow }) => (boxShadow ? `box-shadow: ${boxShadow};` : ``)};
    ${({ background }) => (background ? `background: ${background};` : ``)};
    ${({ margin }) => (margin ? `margin: ${margin};` : ``)};
    ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop};` : ``)};
    ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft};` : ``)};
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : ``)};
    ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight};` : ``)};
    ${({ padding }) => (padding ? `padding: ${padding};` : ``)};
    ${({ paddingTop }) => (paddingTop ? `padding-top: ${paddingTop};` : ``)};
    ${({ paddingLeft }) => (paddingLeft ? `padding-left: ${paddingLeft};` : ``)};
    ${({ paddingBottom }) => (paddingBottom ? `padding-bottom: ${paddingBottom};` : ``)};
    ${({ paddingRight }) => (paddingRight ? `padding-right: ${paddingRight};` : ``)};
    z-index: 1;
`;
