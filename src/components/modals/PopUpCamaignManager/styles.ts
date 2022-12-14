import {
    modalBackground,
    modalHorizontalPadding,
    modalVerticalPadding,
    wrapperBackground,
    wrapperHorizontalPadding,
    wrapperVerticalPadding
} from 'components/modals/PopUpCamaignManager/constants';
import { flexStart, primaryPadding, transitionTime } from 'constants/styles';
import styled from 'styled-components';
import { BackgroundColor, Visibility } from 'types';

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

export const Modal = styled.div<BackgroundColor>`
    position: relative;
    background: ${modalBackground};
    background-color: ${({ backgroundColor }) => backgroundColor || modalBackground};
    padding: ${modalVerticalPadding} ${modalHorizontalPadding};
    z-index: 10;
    border-radius: 16px;
`;
