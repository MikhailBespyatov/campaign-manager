import { contentWrapperBorderRadius } from './constants';
import { white } from 'constants/styles';
import styled from 'styled-components';
import { BackgroundColor, BorderRadius, MinSizes, Padding, Sizes } from 'types';

export interface ContentWrapperProps extends Sizes, Padding, MinSizes, BackgroundColor, BorderRadius {}

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
    border-radius: ${({ borderRadius }) => borderRadius || contentWrapperBorderRadius};
    background-color: ${({ backgroundColor }) => backgroundColor || white};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;
