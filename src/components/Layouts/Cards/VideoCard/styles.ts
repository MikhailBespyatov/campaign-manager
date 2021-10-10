import styled from '@emotion/styled-base';
import { ImgButton } from 'components/common/buttons/ImgButton';
import { black } from 'constants/styles';

export const HoveredPlayButton = styled(ImgButton)`
    background-color: transparent;

    &:hover svg circle {
        opacity: 1;
        transition: opacity 0.3s;
    }
`;

export const HoveredAddButton = styled(ImgButton)`
    background-color: transparent;
    margin-left: 34px;
    svg {
        width: 100%;
        height: 100%;
    }

    &:hover svg circle {
        fill: ${black};
        transition: fill 0.3s;
    }
`;
