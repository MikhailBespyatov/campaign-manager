import { flexCenter } from 'constants/styles';
import styled from 'styled-components';
import { BackgroundColor, Center, ZIndex } from 'types';

interface Props extends ZIndex, BackgroundColor, Center {}

export const FixedWrapper = styled.div<Props>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`};
    ${({ zIndex }) => zIndex && `z-index: ${zIndex}`};
    ${({ center }) => center && flexCenter};
`;
