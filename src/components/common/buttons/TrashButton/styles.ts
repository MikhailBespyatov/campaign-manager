import styled from '@emotion/styled-base';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';

export const HoveredWrapper = styled(ClickableWrapper)`
    opacity: 0.3;
    &:hover {
        opacity: 1;
        transition: opacity 0.3s;
    }
`;
