import {
    wrapperBackground,
    wrapperBorderRadius,
    wrapperHeight,
    wrapperWidth
} from 'components/common/features/Budget/constants';
import styled from 'styled-components';
import { flexCenter } from '../../../../constants';

export const Wrapper = styled.div`
    ${flexCenter};
    justify-content: space-evenly;
    width: ${wrapperWidth};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    background-color: ${wrapperBackground};
`;
