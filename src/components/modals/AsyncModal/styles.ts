import {
    defaultBorderRadius,
    modalBoxShadow,
    modalHeight,
    modalWidth,
    wrapperBackground,
    wrapperHorizontalPadding
} from 'components/modals/AsyncModal/constants';
import { blue, flexCenter, primaryPadding } from 'constants/styles';
import styled from 'styled-components';
import { Visibility } from 'types';

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
    align-items: center;
    width: ${modalWidth};
    min-height: ${modalHeight};
    border-radius: ${defaultBorderRadius};
    box-shadow: ${modalBoxShadow};
    background: ${blue};
    margin: auto;
    z-index: 10;
`;
