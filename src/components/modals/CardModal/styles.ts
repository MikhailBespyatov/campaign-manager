import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { addIdImgDiameter } from 'components/Layouts/Cards/CreateCampaignMiniCard/constants';
import {
    cardPadding,
    modalBackground,
    modalBorderRadius,
    modalHorizontalPadding,
    modalVerticalPadding,
    titleBackgroundColor,
    wrapperBackground,
    wrapperHorizontalPadding,
    wrapperVerticalPadding
} from 'components/modals/CardModal/constants';
import { black, flexStart, lg_2, primaryPadding, tertiaryBorderRadius, transitionTime } from 'constants/styles';
import styled from 'styled-components';
import { Visibility } from 'types';

export const CloseButton = styled(ClickableWrapper)`
    width: ${addIdImgDiameter};
    height: ${addIdImgDiameter};
    transform: rotate(45deg);

    svg {
        width: 100%;
        height: auto;
    }

    &:hover svg circle {
        fill: ${black};
        transition: fill 0.3s;
    }
`;

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
    padding: 0 ${cardPadding} 25px;
    margin-bottom: 10px;

    @media (max-width: ${lg_2}) {
        flex-direction: column;
    }
`;

export const TitleWrapper = styled.div`
    width: 100%;
    background-color: ${titleBackgroundColor};
    padding: 6px;
    border-radius: ${tertiaryBorderRadius};
    margin-bottom: 4px;
`;
