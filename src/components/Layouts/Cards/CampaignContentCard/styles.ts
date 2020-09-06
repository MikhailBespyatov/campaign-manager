import {
    modalBackground,
    modalBorderRadius,
    modalHorizontalPadding,
    modalVerticalPadding,
    wrapperBackground,
    wrapperHorizontalPadding,
    wrapperVerticalPadding
} from 'components/Layouts/Cards/CampaignContentCard/constants';
import styled from 'styled-components';
import { Visibility } from 'types';
import { flexStart, transitionTime } from '../../../../constants';

export const Wrapper = styled.div<Visibility>`
    position: absolute;
    bottom: 0;
    left: 0;
    ${flexStart};
    width: 100%;
    height: 100%;
    background: ${wrapperBackground};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
    //transition: ${transitionTime};
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
    z-index: 9;
`;

export const Modal = styled.div`
    border-radius: ${modalBorderRadius};
    background: ${modalBackground};
    padding: ${modalVerticalPadding} ${modalHorizontalPadding};
    z-index: 10;
`;
