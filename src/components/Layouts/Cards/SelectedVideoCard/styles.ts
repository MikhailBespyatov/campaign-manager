import { tertiaryBorderRadius } from 'constants/styles';
import styled from 'styled-components';
import { Background } from 'types';

export const SelectedVideoCardWrapper = styled.div`
    position: relative;
`;

export const VideoCard = styled.div<Background>`
    width: 125px;
    height: 180px;
    background-repeat: no-repeat;
    border-radius: ${tertiaryBorderRadius};
    background-size: cover;
    cursor: pointer;
    ${({ background }) => background && `background-image: url(${background});`};
`;
