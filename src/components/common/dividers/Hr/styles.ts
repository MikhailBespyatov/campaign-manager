import { hrBackground, hrHeight, hrMarginBottom } from 'components/common/dividers/Hr/constants';
import styled from 'styled-components';
import { Margin } from 'types';

export const Hr = styled.hr<Margin>`
    width: 100%;
    height: ${hrHeight};
    border: none;
    background: ${hrBackground};
    margin: none;
    ${({ margin }) => (margin ? `margin: ${margin};` : ``)};
    ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft};` : ``)};
    ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop};` : ``)};
    ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight};` : ``)};
    margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : hrMarginBottom)};
`;
