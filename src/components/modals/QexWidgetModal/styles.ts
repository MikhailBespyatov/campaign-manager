import {
    modalBackground,
    modalBorderRadius,
    modalBoxShadow,
    modalHorizontalPadding,
    modalVerticalPadding,
    modalWidth,
    wrapperBackground,
    wrapperHorizontalPadding,
    wrapperVerticalPadding
} from 'components/modals/QexWidgetModal/constants';
import { flexCenter, primaryPadding } from 'constants/styles';
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
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
    padding-bottom: ${primaryPadding};
    display: ${({ visible }) => (visible ? 'block' : 'none')};
    z-index: 9;
    overflow: auto;
`;

export const Modal = styled.div`
    ${flexCenter};
    flex-direction: column;
    max-width: ${modalWidth};
    border-radius: ${modalBorderRadius};
    box-shadow: ${modalBoxShadow};
    background: ${modalBackground};
    margin: auto;
    padding: ${modalVerticalPadding} ${modalHorizontalPadding};
    z-index: 10;
`;
