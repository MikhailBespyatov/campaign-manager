import {
    paginationCellActiveBackground,
    paginationCellActiveColor,
    paginationCellBackground,
    paginationCellBorderRadius,
    paginationCellColor,
    PaginationCellFontSize,
    paginationCellHeight,
    PaginationCellLetterSpacing,
    PaginationCellLineHeight,
    paginationCellWidth,
    paginationWrapperHorizontalMargin
} from 'components/Layouts/Pagination/constants';
import { ArrowProps, PaginationCellProps } from 'components/Layouts/Pagination/types';
import styled from 'styled-components';
import { disableDefaultButtonStyleMixin, flexCenter, flexStart, formTextStyleMixin } from '../../../constants';

export const Wrapper = styled.div`
    ${flexStart};
`;

export const PaginationCell = styled.button<PaginationCellProps>`
    ${flexCenter};
    ${disableDefaultButtonStyleMixin};
    border-radius: ${paginationCellBorderRadius};
    width: ${paginationCellWidth};
    height: ${paginationCellHeight};
    background-color: ${({ active }) => (active ? paginationCellActiveBackground : paginationCellBackground)};
    ${formTextStyleMixin};
    font-weight: normal;
    font-size: ${PaginationCellFontSize};
    line-height: ${PaginationCellLineHeight};
    letter-spacing: ${PaginationCellLetterSpacing};
    color: ${({ active }) => (active ? paginationCellActiveColor : paginationCellColor)};
`;

export const Arrow = styled(PaginationCell)<ArrowProps>`
    visibility: ${({ hide }) => (hide ? 'hidden' : 'visible')};
`;

export const PaginationWrapper = styled.div`
    ${flexStart};
    background-color: ${paginationCellBackground};
    margin: 0 ${paginationWrapperHorizontalMargin};
    border-radius: ${paginationCellBorderRadius};
`;
