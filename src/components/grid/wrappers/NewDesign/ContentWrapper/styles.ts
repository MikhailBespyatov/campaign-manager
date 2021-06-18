import { white } from 'constants/styles';
import styled from 'styled-components';
import { BackgroundColor, BorderRadius, MarginBottom, MinSizes, Padding, Sizes } from 'types';
import { contentWrapperBorderRadius } from './constants';

export interface ContentWrapperProps extends Sizes, Padding, MinSizes, BackgroundColor, BorderRadius, MarginBottom {}

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
    border-radius: ${({ borderRadius }) => borderRadius || contentWrapperBorderRadius};
    background-color: ${({ backgroundColor }) => backgroundColor || white};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;
