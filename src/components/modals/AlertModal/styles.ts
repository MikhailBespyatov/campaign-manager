import { State } from 'components/modals/AlertModal';
import { blue, flexCenter, red } from 'constants/styles';
import styled from 'styled-components';
import { BackgroundColor } from 'types';

export interface ImageWrapperProps extends BackgroundColor, State {}

export const ImageWrapper = styled.div<ImageWrapperProps>`
    height: 55px;
    width: 55px;
    padding: 16px;
    border-radius: 50%;
    margin-bottom: 20px;
    background-color: ${({ state }) => (state === 'error' ? red : blue)};
    ${flexCenter}
`;
