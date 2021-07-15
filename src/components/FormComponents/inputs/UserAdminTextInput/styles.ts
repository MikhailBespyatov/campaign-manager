import {
    wrapperBackground,
    wrapperBorderColor,
    wrapperBorderWidth,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperMarginRight,
    wrapperWidth
} from 'components/FormComponents/inputs/UserAdminTextInput/constants';
import { InputWrapperProps } from 'components/FormComponents/inputs/UserAdminTextInput/types';
import { flexStart } from 'constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div<InputWrapperProps>`
    ${flexStart};
    align-items: center;
    width: ${({ width }) => (width ? width : wrapperWidth)};
    height: ${wrapperHeight};
    border-radius: 20px;
    border-width: ${wrapperBorderWidth};
    border-style: solid;
    border-color: ${({ color }) => (color ? color : wrapperBorderColor)};
    margin-right: ${wrapperMarginRight};
    padding: 0 ${wrapperHorizontalPadding};
    background-color: ${wrapperBackground};
`;
