import styled from 'styled-components';
import { Visibility } from 'types';
import { flexCenter, primaryPadding, white } from 'constants/styles';
import {
    modalBoxShadow,
    modalHeight,
    modalWidth,
    wrapperBackground,
    wrapperHorizontalPadding
} from 'components/modals/CongratsModal/constants';

export const Wrapper = styled.div<Visibility>`
    position: fixed;
    top: 0;
    left: 0;
    ${flexCenter};
    width: 100%;
    height: 100vh;
    background: ${wrapperBackground};
    padding: 0 ${wrapperHorizontalPadding};
    padding-bottom: ${primaryPadding};
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    z-index: 9;
    overflow: auto;
`;

export const Modal = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${modalWidth};
    min-height: ${modalHeight};
    border-radius: 16px;
    box-shadow: ${modalBoxShadow};
    background: ${white};
    padding: 20px;
    margin: auto;
    z-index: 10;
`;
