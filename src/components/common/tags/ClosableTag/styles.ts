import {
    wrapperBorderRadius,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperVerticalPadding,
    wrapperWidth
} from 'components/common/tags/ClosableTag/constants';
import { WrapperProps } from 'components/common/tags/ClosableTag/types';
import { black, flexCenter } from 'constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div<WrapperProps>`
    ${flexCenter};
    justify-content: space-evenly;
    //width: ${wrapperWidth};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    background-color: ${black};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : ``)};
    ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight};` : ``)};
    ${({ borderRadius }) => (borderRadius ? `border-radius: ${borderRadius};` : ``)};
    ${({ borderTopLeftRadius }) => (borderTopLeftRadius ? `border-top-left-radius: ${borderTopLeftRadius};` : ``)};
    ${({ borderTopRightRadius }) => (borderTopRightRadius ? `border-top-right-radius: ${borderTopRightRadius};` : ``)};
    ${({ borderBottomLeftRadius }) =>
        borderBottomLeftRadius ? `border-bottom-left-radius: ${borderBottomLeftRadius};` : ``};
    ${({ borderBottomRightRadius }) =>
        borderBottomRightRadius ? `border-bottom-right-radius: ${borderBottomRightRadius};` : ``};
`;
