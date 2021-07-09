import { white } from 'constants/styles';
import styled from 'styled-components';
import {
    BackgroundColor,
    BorderProperties,
    BorderRadius,
    FlexAlignment,
    MarginBottom,
    MinSizes,
    Padding,
    Sizes
} from 'types';
import { contentWrapperBorderRadius } from './constants';

export interface ContentWrapperProps
    extends Sizes,
        Padding,
        MinSizes,
        BackgroundColor,
        BorderRadius,
        Pick<BorderProperties, 'border'>,
        MarginBottom,
        FlexAlignment {}

export const ContentWrapper = styled.div<ContentWrapperProps>`
    ${({ height }) => height && `height: ${height}`};
    ${({ width }) => width && `width: ${width}`};
    ${({ minWidth }) => minWidth && `min-width: ${minWidth}`};
    ${({ minHeight }) => minHeight && `min-height: ${minHeight}`};
    ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight}`};
    ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft}`};
    ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop}`};
    ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom}`};
    ${({ padding }) => padding && `padding: ${padding}`};
    ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`};
    ${({ justify }) => justify && `justify-content: ${justify}`};
    ${({ align }) => align && `align-items: ${align}`};
    ${({ border }) => border && `border: ${border}`};
    border-radius: ${({ borderRadius }) => borderRadius || contentWrapperBorderRadius};
    background-color: ${({ backgroundColor }) => backgroundColor || white};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;
