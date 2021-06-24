import { FlexGrow } from 'components/grid/wrappers/FlexWrapper';
import {
    paginationCellActiveBackground,
    paginationCellActiveColor,
    paginationCellActiveFontSize,
    paginationCellActiveFontWeight,
    paginationCellActiveLineHeight,
    paginationCellBackground,
    paginationCellBorderRadius,
    paginationCellColor,
    paginationCellFontSize,
    paginationCellFontWeight,
    paginationCellHeight,
    paginationCellLetterSpacing,
    paginationCellLineHeight,
    paginationCellWidth,
    paginationInputHeight,
    paginationInputPadding,
    paginationInputWidth,
    paginationWrapperHorizontalMargin
} from 'components/Layouts/Pagination/constants';
import { ArrowProps, PaginationCellProps } from 'components/Layouts/Pagination/types';
import { disableDefaultButtonStyleMixin, flexCenter, flexStart, formTextStyleMixin } from 'constants/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${flexStart};
    width: 100%;
    align-items: center;
`;

export const PaginationCell = styled.button<PaginationCellProps>`
    ${flexCenter};
    ${disableDefaultButtonStyleMixin};
    border-radius: ${paginationCellBorderRadius};
    width: ${paginationCellWidth};
    height: ${paginationCellHeight};
    background-color: ${paginationCellBackground};
    ${formTextStyleMixin};
    font-weight: ${paginationCellFontWeight};
    font-size: ${paginationCellFontSize};
    line-height: ${paginationCellLineHeight};
    letter-spacing: ${paginationCellLetterSpacing};
    color: ${paginationCellColor};
    ${({ active }) =>
        active &&
        css`
            border: 1px solid #e4e4e4;
            background-color: ${paginationCellActiveBackground};
            font-weight: ${paginationCellActiveFontWeight};
            font-size: ${paginationCellActiveFontSize};
            line-height: ${paginationCellActiveLineHeight};
            color: ${paginationCellActiveColor};
        `};
`;

export const Arrow = styled(PaginationCell)<ArrowProps>`
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
    font-weight: ${paginationCellFontWeight};
    font-size: ${paginationCellFontSize};
    line-height: ${paginationCellLineHeight};
`;

export const PaginationBlockWrapper = styled(FlexGrow)`
    display: flex;
    flex-direction: row;
    width: 100%;
`;
