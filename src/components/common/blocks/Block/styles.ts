import {
    blockBackground,
    contentWrapperHorizontalPadding,
    contentWrapperVerticalPadding,
    titleWrapperHeight,
    titleWrapperHorizontalPadding,
    titleWrapperVerticalPadding
} from 'components/common/blocks/Block/constants';
import { primaryBorder, primaryBorderRadius } from 'constants/styles';
import styled from 'styled-components';

export const TitleWrapper = styled.div`
    width: 100%;
    height: ${titleWrapperHeight};
    border-top-left-radius: ${primaryBorderRadius};
    border-top-right-radius: ${primaryBorderRadius};
    border: ${primaryBorder};
    border-bottom: none;
    background: ${blockBackground};
    padding: ${titleWrapperVerticalPadding} ${titleWrapperHorizontalPadding};
    padding-bottom: 0;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    border-bottom-left-radius: ${primaryBorderRadius};
    border-bottom-right-radius: ${primaryBorderRadius};
    border: ${primaryBorder};
    border-top: none;
    background: ${blockBackground};
    padding: ${contentWrapperVerticalPadding} ${contentWrapperHorizontalPadding};
`;
