import {
    wrapperBackground,
    wrapperBorderColor,
    wrapperBorderRadius,
    wrapperBorderWidth,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperWidth
} from 'components/FormComponents/inputs/UserAdminTextInput/constants';
import { InputWrapperProps } from 'components/FormComponents/inputs/UserAdminTextInput/types';
import { flexStart, primaryPadding } from 'constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div<InputWrapperProps>`
    ${flexStart};
    align-items: center;
    width: ${({ width }) => (width ? width : wrapperWidth)};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    border-width: ${wrapperBorderWidth};
    border-style: solid;
    border-color: ${({ color }) => (color ? color : wrapperBorderColor)};
    margin-right: ${primaryPadding};
    padding: 0 ${wrapperHorizontalPadding};
    background-color: ${wrapperBackground};
`;
