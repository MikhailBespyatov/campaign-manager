import { wrapperBorder } from 'components/common/blocks/BorderBlock/constants';
import { blue, primaryMargin, primaryPadding, tertiaryBorderRadius } from 'constants/styles';
import styled, { css } from 'styled-components';
import {
    BackgroundColor,
    MarginBottom,
    MarginRight,
    MaxSizes,
    MinSizes,
    PaddingBottom,
    PaddingRight,
    RemoveBorderRadius,
    Sizes
} from 'types';

interface WrapperProps
    extends Sizes,
        Pick<MinSizes, 'minWidth'>,
        Pick<MaxSizes, 'maxWidth'>,
        PaddingRight,
        PaddingBottom,
        MarginRight,
        MarginBottom,
        RemoveBorderRadius,
        BackgroundColor {
    borderRadius?: string;
    hovered?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: column;
    ${({ minWidth }) => minWidth && `min-width: ${minWidth};`};
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`};
    ${({ width }) => width && `width: ${width};`};
    ${({ height }) => height && `height: ${height};`};
    border: ${wrapperBorder};
    ${({ removeBorderRadius }) => !removeBorderRadius && `border-radius: ${tertiaryBorderRadius};`};
    margin-right: ${primaryPadding};
    margin-bottom: ${primaryMargin};
    padding: ${primaryPadding};
    ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight};padding-left: ${paddingRight};`};
    ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom};padding-top: ${paddingBottom};`};
    ${({ marginRight }) => marginRight && `margin-right: ${marginRight};margin-left: ${marginRight};`};
    ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};margin-top: ${marginBottom};`};
    ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`};

    ${({ hovered }) =>
        hovered &&
        css`
            &:hover {
                border-color: ${blue};
                transition: border-color 0.3s;
            }

            &:hover svg path {
                stroke: ${blue};
                transition: stroke 0.3s;
            }
        `}

    ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`}
`;
