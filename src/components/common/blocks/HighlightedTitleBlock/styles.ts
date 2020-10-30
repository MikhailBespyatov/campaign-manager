import {
    blockBackground,
    contentWrapperHorizontalPadding,
    contentWrapperVerticalPadding,
    titleWrapperBackground,
    titleWrapperHeight,
    titleWrapperHorizontalPadding,
    titleWrapperVerticalPadding
} from 'components/common/blocks/HighlightedTitleBlock/constants';
import { flexCenter, primaryBorder, primaryBorderRadius } from 'constants/styles';
import styled from 'styled-components';

export const TitleWrapper = styled.div`
    ${flexCenter};
    flex-direction: row;
    width: 100%;
    height: ${titleWrapperHeight};
    border-top-left-radius: ${primaryBorderRadius};
    border-top-right-radius: ${primaryBorderRadius};
    border: ${primaryBorder};
    // background: ${titleWrapperBackground};
    background: ${({ theme: { background } }) => background};
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: ${({ theme: { primaryTextColor } }) => primaryTextColor};
    padding: ${titleWrapperVerticalPadding} ${titleWrapperHorizontalPadding};
    padding-bottom: 0;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom-left-radius: ${primaryBorderRadius};
    border-bottom-right-radius: ${primaryBorderRadius};
    border: ${primaryBorder};
    border-top: none;
    background: ${blockBackground};
    padding: ${contentWrapperVerticalPadding} ${contentWrapperHorizontalPadding};
`;
