import {
    paginationCellActiveBackground,
    PaginationCellActiveFontWeight,
    paginationCellBackground,
    paginationCellBorderRadius,
    paginationCellColor,
    PaginationCellFontSize,
    PaginationCellFontWeight,
    paginationCellHeight,
    PaginationCellLetterSpacing,
    PaginationCellLineHeight,
    paginationCellWidth,
    paginationInputHeight,
    paginationInputPadding,
    paginationInputWidth,
    paginationWrapperHorizontalMargin
} from 'components/Layouts/Pagination/constants';
import { ArrowProps, PaginationCellProps } from 'components/Layouts/Pagination/types';
import { disableDefaultButtonStyleMixin, flexCenter, flexStart, formTextStyleMixin } from 'constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${flexStart};
`;

export const PaginationCell = styled.button<PaginationCellProps>`
    ${flexCenter};
    ${disableDefaultButtonStyleMixin};
    border-radius: ${paginationCellBorderRadius};
    ${({ active }) => active && 'border: 1px solid #E4E4E4;'};
    width: ${paginationCellWidth};
    height: ${paginationCellHeight};
    background-color: ${({ active }) => (active ? paginationCellActiveBackground : paginationCellBackground)};
    ${formTextStyleMixin};
    font-weight: ${({ active }) => (active ? PaginationCellActiveFontWeight : PaginationCellFontWeight)};
    font-size: ${PaginationCellFontSize};
    line-height: ${PaginationCellLineHeight};
    letter-spacing: ${PaginationCellLetterSpacing};
    color: ${paginationCellColor};
`;

export const Arrow = styled(PaginationCell)<ArrowProps>`
    margin-right: ${paginationWrapperHorizontalMargin};
    visibility: ${({ hide }) => (hide ? 'hidden' : 'visible')};
`;

export const PaginationWrapper = styled.div`
    ${flexStart};
    margin-right: ${paginationWrapperHorizontalMargin};
    border-radius: ${paginationCellBorderRadius};
`;

export const PaginationInput = styled.input`
    outline: none;
    appearance: none;
    height: ${paginationInputHeight};
    width: ${paginationInputWidth};
    padding: 2px ${paginationInputPadding};
    box-sizing: border-box;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    font-weight: ${PaginationCellFontWeight};
    font-size: ${PaginationCellFontSize};
    line-height: ${PaginationCellLineHeight};
`;
