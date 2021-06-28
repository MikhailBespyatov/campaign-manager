import { tableSpanColor } from 'components/common/typography/TableSubSpan/constants';
import { TableSpanProps } from 'components/common/typography/TableSubSpan/types';
import { defaultFontFamily, defaultFontStyle } from 'constants/defaults';
import styled from 'styled-components';

export const TableSubSpan = styled.span<TableSpanProps>`
    ${({ legendary }) => (legendary ? 'font-weight: bold' : '')};
    font-family: ${defaultFontFamily};
    font-style: ${defaultFontStyle};
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: ${({ color }) => (color ? color : tableSpanColor)};
`;
