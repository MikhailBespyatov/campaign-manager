import {
    blockBackground,
    blockBorderRadius,
    contentWrapperHorizontalPadding,
    contentWrapperVerticalPadding,
    titleWrapperHeight,
    titleWrapperHorizontalPadding,
    titleWrapperPaddingBottom,
    titleWrapperVerticalPadding
} from 'components/common/blocks/AsideBlock/constants';
import { primaryBorder, primaryBorderRadius } from 'constants/styles';
import styled from 'styled-components';

export const TitleWrapper = styled.div`
    width: 100%;
    //height: ${titleWrapperHeight};
    border-top-right-radius: ${blockBorderRadius};
    border-top-left-radius: ${blockBorderRadius};
    border: ${primaryBorder};
    border-bottom: none;
    background: ${blockBackground};
    padding: ${titleWrapperVerticalPadding} ${titleWrapperHorizontalPadding};
    padding-bottom: ${titleWrapperPaddingBottom};
`;

export const ContentWrapper = styled.div`
    width: 100%;
    border-bottom-right-radius: ${primaryBorderRadius};
    border-bottom-left-radius: ${primaryBorderRadius};
    border: ${primaryBorder};
    border-top: none;
    background: ${blockBackground};
    padding: ${contentWrapperVerticalPadding} ${contentWrapperHorizontalPadding};
`;
