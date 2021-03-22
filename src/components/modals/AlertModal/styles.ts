import { blue, flexCenter, red, white } from 'constants/styles';
import styled from 'styled-components';
import { AlertMessageType, BackgroundColor } from 'types';

export interface ImageWrapperProps extends BackgroundColor {
    type: AlertMessageType;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
    height: 55px;
    width: 55px;
    padding: 16px;
    border-radius: 50%;
    margin-bottom: 20px;
    background-color: ${({ type }) => (type === 'error' ? red : blue)};
    ${flexCenter}
`;

export const ModalWrapper = styled.div`
    border-radius: 20px;
    height: 320px;
    padding: 33px 80px 52px;
    width: 580px;
    background-color: ${white};
`;
