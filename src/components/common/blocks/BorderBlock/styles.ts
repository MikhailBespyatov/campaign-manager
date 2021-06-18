import { wrapperBorder } from 'components/common/blocks/BorderBlock/constants';
import { primaryPadding, secondaryBorderRadius, tertiaryMargin } from 'constants/styles';
import styled from 'styled-components';
import {
    BackgroundColor,
    MarginBottom,
    MarginRight,
    PaddingBottom,
    PaddingRight,
    RemoveBorderRadius,
    Sizes
} from 'types';

interface WrapperProps
    extends Sizes,
        PaddingRight,
        PaddingBottom,
        MarginRight,
        MarginBottom,
        RemoveBorderRadius,
        BackgroundColor {}

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: column;
    ${({ width }) => width && `width: ${width};`};
    ${({ height }) => height && `height: ${height};`};
    border: ${wrapperBorder};
    ${({ removeBorderRadius }) => !removeBorderRadius && `border-radius: ${secondaryBorderRadius};`};
    margin-right: ${primaryPadding};
    margin-bottom: ${tertiaryMargin};
    padding: ${primaryPadding};
    ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight};padding-left: ${paddingRight};`};
    ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom};padding-top: ${paddingBottom};`};
    ${({ marginRight }) => marginRight && `margin-right: ${marginRight};margin-left: ${marginRight};`};
    ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};margin-top: ${marginBottom};`};
    ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`};
`;
