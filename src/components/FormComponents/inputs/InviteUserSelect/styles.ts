import {
    itemActiveColor,
    itemDefaultColor,
    wrapperBackground,
    wrapperBorderColor,
    wrapperBorderRadius,
    wrapperBorderWidth,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperWidth
} from 'components/FormComponents/inputs/InviteUserSelect/constants';
import { flexStart, primaryPadding } from 'constants/styles';
import styled from 'styled-components';
import { Active, Color } from 'types';

export const Wrapper = styled.div<Color>`
    position: relative;
    ${flexStart};
    align-items: center;
    min-width: ${wrapperWidth};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    border: ${wrapperBorderWidth} solid ${({ color }) => (color ? color : wrapperBorderColor)};
    background-color: ${wrapperBackground};
    margin-right: ${primaryPadding};
    padding: 0 ${wrapperHorizontalPadding};
    z-index: 1;
`;

export const SelectUl = styled.ul`
    width: 100%;
    border-radius: ${wrapperBorderRadius};
    border: ${wrapperBorderWidth} solid ${wrapperBorderColor};
    overflow: hidden;
`;

export const SelectLi = styled.li<Active>`
    ${flexStart};
    align-items: center;
    width: 100%;
    min-height: ${wrapperHeight};
    padding: 0;
    padding-left: ${wrapperHorizontalPadding};
    background: ${({ active }) => (active ? itemActiveColor : itemDefaultColor)};
    cursor: pointer;
`;
