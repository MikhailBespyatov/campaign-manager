import {
    modalBackground,
    modalBorderRadius,
    modalHorizontalPadding,
    modalVerticalPadding,
    wrapperBackground,
    wrapperHorizontalPadding,
    wrapperVerticalPadding,
    titleBackgroundColor
} from 'components/modals/CardModal/constants';
import { flexStart, primaryPadding, transitionTime } from 'constants/styles';
import styled from 'styled-components';
import { Visibility } from 'types';
import { titleWrapperHorizontalPadding } from 'components/common/blocks/HighlightedTitleBlock/constants';

export const Wrapper = styled.div<Visibility>`
    position: fixed;
    top: 0;
    left: 0;
    ${flexStart};
    width: 100%;
    height: 100%;
    background: ${wrapperBackground};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
    padding-bottom: ${primaryPadding};
    //transition: ${transitionTime};
    display: ${({ visible }) => (visible ? 'block' : 'none')};
    z-index: 9;
    overflow: auto;
`;

export const Modal = styled.div`
    border-radius: ${modalBorderRadius};
    background: ${modalBackground};
    padding: ${modalVerticalPadding} ${modalHorizontalPadding};
    z-index: 10;
`;

export const VideoDetailsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 ${titleWrapperHorizontalPadding};
`;

export const TitleWrapper = styled.div`
    width: 100%;
    background-color: ${titleBackgroundColor};
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 16px;
`;
