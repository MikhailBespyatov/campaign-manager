import {
    blockBackground,
    contentWrapperHorizontalPadding,
    contentWrapperVerticalPadding
} from 'components/common/blocks/HighlightedTitleBlock/constants';
import { cardPadding } from 'components/modals/CardModal/constants';
import { flexCenter, primaryBorder, primaryBorderRadius, primaryColor, white } from 'constants/styles';
import styled from 'styled-components';

export const TitleWrapper = styled.div`
    ${flexCenter};
    flex-direction: row;
    width: 100%;
    border-top-left-radius: ${primaryBorderRadius};
    border-top-right-radius: ${primaryBorderRadius};

    background: ${white};
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: ${primaryColor};
    padding: ${cardPadding};
    padding-bottom: 10px;
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
