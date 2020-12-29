import {
    blockBackground,
    contentWrapperHorizontalPadding,
    contentWrapperVerticalPadding,
    titleWrapperBackground,
    titleWrapperHeight,
    titleWrapperHorizontalPadding,
    titleWrapperVerticalPadding
} from 'components/common/blocks/HighlightedTitleBlock/constants';
import { black, flexCenter, primaryBorder, primaryBorderRadius, white } from 'constants/styles';
import styled from 'styled-components';

export const TitleWrapper = styled.div`
    ${flexCenter};
    flex-direction: row;
    width: 100%;
    height: ${titleWrapperHeight};
    border-top-left-radius: ${primaryBorderRadius};
    border-top-right-radius: ${primaryBorderRadius};
    //border: ${primaryBorder};
    // background: ${titleWrapperBackground};
    background: ${white};
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: ${black};
    padding: ${titleWrapperVerticalPadding} ${titleWrapperHorizontalPadding};
    padding-top: 20px;
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
