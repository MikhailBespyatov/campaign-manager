import {
    wrapperBackground,
    wrapperBorderRadius,
    wrapperHeight,
    wrapperWidth
} from 'components/common/features/Budget/constants';
import { flexCenter } from 'constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${flexCenter};
    justify-content: space-evenly;
    width: ${wrapperWidth};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    background-color: ${wrapperBackground};
`;
