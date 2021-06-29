import {
    wrapperBorderRadius,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperVerticalPadding
} from 'components/common/tags/ClosableTag/constants';
import { WrapperProps } from 'components/common/tags/ClosableTag/types';
import { Span } from 'components/common/typography/Span';
import { ellipsisMixin, flexCenter, grey6, primaryColor, primaryPadding } from 'constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div<WrapperProps>`
    ${flexCenter};
    justify-content: space-evenly;
    max-width: 300px;
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    background-color: ${({ backgroundColor }) => backgroundColor || grey6};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
    margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : primaryPadding)};
    ${({ marginTop }) => marginTop && `margin-top: ${marginTop}`};
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : primaryPadding)};
    border: 1px solid #c6c7d1;
    ${({ borderRadius }) => (borderRadius ? `border-radius: ${borderRadius};` : ``)};
    ${({ borderTopLeftRadius }) => (borderTopLeftRadius ? `border-top-left-radius: ${borderTopLeftRadius};` : ``)};
    ${({ borderTopRightRadius }) => (borderTopRightRadius ? `border-top-right-radius: ${borderTopRightRadius};` : ``)};
    ${({ borderBottomLeftRadius }) =>
        borderBottomLeftRadius ? `border-bottom-left-radius: ${borderBottomLeftRadius};` : ``};
    ${({ borderBottomRightRadius }) =>
        borderBottomRightRadius ? `border-bottom-right-radius: ${borderBottomRightRadius};` : ``};
`;

export const ClosableTagSpan = styled(Span)`
    max-width: 240px;
    color: ${primaryColor};
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    ${ellipsisMixin}
`;
