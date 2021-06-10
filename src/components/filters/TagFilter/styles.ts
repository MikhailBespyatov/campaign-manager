import {
    wrapperBackground,
    wrapperBorderColor,
    wrapperBorderRadius,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperVerticalPadding,
    wrapperWidth
} from 'components/filters/TagFilter/constants';
import { flexCenter } from 'constants/styles';
import styled from 'styled-components';
import { SearchAbsoluteWrapperProps } from 'components/filters/TagFilter/type';

export const Wrapper = styled.div`
    width: ${wrapperWidth};
    ${flexCenter};
    justify-content: flex-start;
    flex-direction: row;
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    background-color: ${wrapperBackground};
    border: 1px solid ${wrapperBorderColor};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
`;

export const SearchInput = styled.input`
    outline: none;
    border: none;
    appearance: none;
    width: 100%;
    margin-left: 20px;
    //margin-right: 110px;
    margin-right: 20px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    background-color: ${wrapperBackground};
`;

export const SearchAbsoluteWrapper = styled.div<SearchAbsoluteWrapperProps>`
    position: absolute;
    height: ${wrapperHeight};
    display: flex;
    align-items: center;
    ${({ right }) => right && 'right: 0;'}
`;
