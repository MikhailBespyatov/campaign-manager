import {
    tableRowFontSize,
    tableRowLineHeight,
    tableSpanColor
} from 'components/common/TextComponents/TableSpan/constants';
import { TableSpanProps } from 'components/common/TextComponents/TableSpan/types';
import { formTextStyleMixin } from 'constants/styles';
import styled from 'styled-components';

export const TableSpan = styled.span<TableSpanProps>`
    ${formTextStyleMixin};
    ${({ legendary }) => (legendary ? 'font-weight: bold' : '')};
    font-size: ${tableRowFontSize};
    line-height: ${tableRowLineHeight};
    color: ${({ color }) => (color ? color : tableSpanColor)};
`;
