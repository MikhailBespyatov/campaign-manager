import { ColumnProps, RowProps } from 'components/common/wrappers/FlexWrapper/types';
import styled from 'styled-components';
import { flexStart, padding } from '../../../../constants';

export const Row = styled.div<RowProps>`
    ${({ widthMaxContent }) => (widthMaxContent ? 'width: max-content;' : '')};
    ${flexStart};
    ${({ alignCenter }) => (alignCenter ? `align-items: center;` : '')};
    ${({ alignBaseline }) => (alignBaseline ? `align-items: baseline;` : '')};
    ${({ justifyCenter }) => (justifyCenter ? `justify-content: center;` : '')};
    flex-direction: row;
    flex-wrap: ${({ noWrap }) => (noWrap ? 'nowrap' : 'wrap')};
    ${({ width }) => (width ? `width: ${width};` : ``)};
    ${({ height }) => (height ? `height: ${height};` : ``)};
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : `margin-bottom: ${padding};`)};
    ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight};` : ``)};
    z-index: 1;
`;

export const Column = styled.div<ColumnProps>`
    ${flexStart};
    ${({ alignCenter }) => (alignCenter ? `align-items: center;` : '')};
    ${({ justifyCenter }) => (justifyCenter ? `justify-content: center;` : '')};
    flex-direction: column;
    ${({ width }) => (width ? `width: ${width};` : ``)};
    ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth};` : ``)};
    ${({ height }) => (height ? `height: ${height};` : ``)};
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : ``)};
    ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight};` : ``)};
`;

export const Section = styled.section<RowProps>`
    width: 100%;
    ${flexStart};
    ${({ alignCenter }) => (alignCenter ? `align-items: center;` : '')};
    ${({ alignBaseline }) => (alignBaseline ? `align-items: baseline;` : '')};
    ${({ justifyCenter }) => (justifyCenter ? `justify-content: center;` : '')};
    ${({ justifyEnd }) => (justifyEnd ? `justify-content: flex-end;` : '')};
    flex-direction: row;
    flex-wrap: ${({ noWrap }) => (noWrap ? 'nowrap' : 'wrap')};
    ${({ height }) => (height ? `height: ${height};` : ``)};
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : `margin-bottom: ${padding};`)};
    z-index: 1;
`;
