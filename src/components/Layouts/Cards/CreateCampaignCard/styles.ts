import styled from '@emotion/styled-base';
import { ImgButton } from 'components/common/buttons/ImgButton';

export const HoveredButton = styled(ImgButton)`
    background-color: transparent;

    &:hover svg circle {
        opacity: 1;
        transition: opacity 0.3s;
    }
`;
