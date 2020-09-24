import { blockHorizontalPadding, primaryBorder } from 'constants/styles';
import styled from 'styled-components';
import { Padding } from 'types';

export const RowBlockCell = styled.div<Padding>`
    //height: 100%;
    border-right: ${primaryBorder};
    ${({ padding }) => (padding ? `padding: ${padding};` : ``)};
    &:first-child {
        padding-left: ${blockHorizontalPadding};
    }
    &:last-child {
        border: none;
        padding-right: ${blockHorizontalPadding};
    }
`;

export const ColumnBlockCell = styled.div<Padding>`
    width: 100%;
    border-bottom: ${primaryBorder};
    ${({ padding }) => (padding ? `padding: ${padding};` : ``)};
    &:last-child {
        border: none;
    }
`;
