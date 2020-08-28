import {
    tableRowFontSize,
    tableRowLineHeight,
    tableSpanColor
} from 'components/common/TextComponents/TableSubSpan/constants';
import { TableSpanProps } from 'components/common/TextComponents/TableSubSpan/types';
import styled from 'styled-components';
import { formTextStyleMixin } from '../../../../constants';

export const TableSubSpan = styled.span<TableSpanProps>`
    ${formTextStyleMixin};
    ${({ legendary }) => (legendary ? 'font-weight: bold' : '')};
    font-size: ${tableRowFontSize};
    line-height: ${tableRowLineHeight};
    color: ${({ color }) => (color ? color : tableSpanColor)};
`;
