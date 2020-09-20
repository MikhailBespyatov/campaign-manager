import {
    blockBorderRadius,
    contentWrapperHorizontalPadding,
    contentWrapperVerticalPadding,
    titleWrapperBorderColor,
    titleWrapperBorderWidth,
    titleWrapperHeight,
    titleWrapperHorizontalPadding,
    titleWrapperVerticalPadding
} from 'components/common/blocks/Block/constants';
import styled from 'styled-components';

export const TitleWrapper = styled.div`
    height: ${titleWrapperHeight};
    border-top-left-radius: ${blockBorderRadius};
    border-top-left-radius: ${blockBorderRadius};
    border: ${titleWrapperBorderWidth} solid ${titleWrapperBorderColor};
    padding: ${titleWrapperVerticalPadding} ${titleWrapperHorizontalPadding};
    padding-bottom: 0;
`;

export const ContentWrapper = styled.div`
    border-bottom-left-radius: ${blockBorderRadius};
    border-bottom-left-radius: ${blockBorderRadius};
    border: ${titleWrapperBorderWidth} solid ${titleWrapperBorderColor};
    border-top: none;
    padding: ${contentWrapperVerticalPadding} ${contentWrapperHorizontalPadding};
`;

export const BlockCell = styled.div`
    border-right: ${titleWrapperBorderWidth} solid ${titleWrapperBorderColor};
    &:last-child {
        border: none;
    }
`;
