import { ColumnProps, RowProps } from 'components/common/wrappers/FlexWrapper/types';
import styled from 'styled-components';
import { flexStart, padding } from '../../../../constants';

export const Row = styled.div<RowProps>`
    //width: 100%;
    ${flexStart};
    ${({ alignCenter }) => (alignCenter ? `align-items: center;` : '')};
    ${({ alignBaseline }) => (alignBaseline ? `align-items: baseline;` : '')};
    ${({ justifyCenter }) => (justifyCenter ? `justify-content: center;` : '')};
    flex-direction: row;
    flex-wrap: ${({ noWrap }) => (noWrap ? 'nowrap' : 'wrap')};
    ${({ height }) => (height ? `height: ${height};` : ``)};
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : `margin-bottom: ${padding};`)};
    z-index: 1;
`;

export const Column = styled.div<ColumnProps>`
    //width: 100%;
    ${flexStart};
    ${({ alignCenter }) => (alignCenter ? `align-items: center;` : '')};
    ${({ justifyCenter }) => (justifyCenter ? `justify-content: center;` : '')};
    flex-direction: column;
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : ``)};
    ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight};` : ``)};
    ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth};` : ``)};
`;

export const Section = styled.section<RowProps>`
    width: 100%;
    ${flexStart};
    ${({ alignCenter }) => (alignCenter ? `align-items: center;` : '')};
    ${({ alignBaseline }) => (alignBaseline ? `align-items: baseline;` : '')};
    ${({ justifyCenter }) => (justifyCenter ? `justify-content: center;` : '')};
    flex-direction: row;
    flex-wrap: ${({ noWrap }) => (noWrap ? 'nowrap' : 'wrap')};
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : `margin-bottom: ${padding};`)};
    z-index: 1;
`;
