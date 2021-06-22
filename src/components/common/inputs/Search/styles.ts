import {
    wrapperBackground,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperMinWidth,
    wrapperVerticalPadding
} from 'components/common/inputs/Search/constants';
import { flexCenter, primaryBorder, tertiaryBorderRadius } from 'constants/styles';
import styled from 'styled-components';
import { BorderRadiusProperties } from 'types';

export const Wrapper = styled.div<BorderRadiusProperties>`
    ${flexCenter};
    justify-content: space-around;
    min-width: ${wrapperMinWidth};
    height: ${wrapperHeight};
    border-radius: ${tertiaryBorderRadius};
    border: ${primaryBorder};
    background-color: ${wrapperBackground};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
    ${({ borderRadius }) => (borderRadius ? `border-radius: ${borderRadius};` : ``)};
    ${({ borderTopLeftRadius }) => (borderTopLeftRadius ? `border-top-left-radius: ${borderTopLeftRadius};` : ``)};
    ${({ borderTopRightRadius }) => (borderTopRightRadius ? `border-top-right-radius: ${borderTopRightRadius};` : ``)};
    ${({ borderBottomLeftRadius }) =>
        borderBottomLeftRadius ? `border-bottom-left-radius: ${borderBottomLeftRadius};` : ``};
    ${({ borderBottomRightRadius }) =>
        borderBottomRightRadius ? `border-bottom-right-radius: ${borderBottomRightRadius};` : ``};
`;
