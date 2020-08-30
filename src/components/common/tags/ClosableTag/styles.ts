import { wrapperBorderRadius, wrapperHeight, wrapperWidth } from 'components/common/tags/ClosableTag/constants';
import styled from 'styled-components';
import { black, flexCenter } from '../../../../constants';

export const Wrapper = styled.div`
    ${flexCenter};
    justify-content: space-evenly;
    width: ${wrapperWidth};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    background-color: ${black};
`;
