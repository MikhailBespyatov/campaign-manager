import {
    contentWrapperHorizontalPadding,
    contentWrapperVerticalPadding,
    titleWrapperHeight,
    titleWrapperHorizontalPadding,
    titleWrapperVerticalPadding
} from 'components/common/blocks/Block/constants';
import { primaryBorder, primaryBorderRadius } from 'constants/styles';
import styled from 'styled-components';

export const TitleWrapper = styled.div`
    height: ${titleWrapperHeight};
    border-top-left-radius: ${primaryBorderRadius};
    border-top-left-radius: ${primaryBorderRadius};
    border: ${primaryBorder};
    border-bottom: none;
    padding: ${titleWrapperVerticalPadding} ${titleWrapperHorizontalPadding};
    padding-bottom: 0;
`;

export const ContentWrapper = styled.div`
    border-bottom-left-radius: ${primaryBorderRadius};
    border-bottom-left-radius: ${primaryBorderRadius};
    border: ${primaryBorder};
    border-top: none;
    padding: ${contentWrapperVerticalPadding} ${contentWrapperHorizontalPadding};
`;