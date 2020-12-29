import { blockHorizontalPadding, primaryBorder } from 'constants/styles';
import styled from 'styled-components';
import { Padding, RemoveBorder } from 'types';

interface Props extends Padding, RemoveBorder {}

export const RowBlockCell = styled.div<Props>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    border-right: ${primaryBorder};
    ${({ removeBorder }) => (removeBorder ? `border: none;` : ``)};
    ${({ padding }) => (padding ? `padding: ${padding};` : ``)};
    &:first-child {
        padding-left: ${blockHorizontalPadding};
    }
    &:last-child {
        border: none;
        padding-right: ${blockHorizontalPadding};
    }
`;

export const ColumnBlockCell = styled.div<Props>`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: ${primaryBorder};
    ${({ removeBorder }) => (removeBorder ? `border: none;` : ``)};
    ${({ padding }) => (padding ? `padding: ${padding};` : ``)};
    &:last-child {
        border: none;
    }
`;
