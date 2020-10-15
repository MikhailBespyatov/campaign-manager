import {
    tableRowFontSize,
    tableRowLineHeight,
    tableSpanColor
} from 'components/common/typography/TableSubSpan/constants';
import { TableSpanProps } from 'components/common/typography/TableSubSpan/types';
import { formTextStyleMixin } from 'constants/styles';
import styled from 'styled-components';

export const TableSubSpan = styled.span<TableSpanProps>`
    ${formTextStyleMixin};
    ${({ legendary }) => (legendary ? 'font-weight: bold' : '')};
    font-size: ${tableRowFontSize};
    line-height: ${tableRowLineHeight};
    color: ${({ color }) => (color ? color : tableSpanColor)};
`;
