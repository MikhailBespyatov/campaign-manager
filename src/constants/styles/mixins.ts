import { css } from 'styled-components';
import { borderWidth, grey, padding } from '..';

export const marginBottomMixin = css`
    margin-bottom: ${padding};
`;

export const borderMixin = css`
    border: ${borderWidth} solid ${grey};
`;

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const flexStart = css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const ellipsisMixin = css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const formTextStyleMixin = css`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
`;

export const disableDefaultButtonStyleMixin = css`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`;
