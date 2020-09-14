import {
    wrapperBackground,
    wrapperBorderRadius,
    wrapperBorderWidthRight,
    wrapperHeight,
    wrapperWidth
} from 'components/common/inputs/InputAddTag/constants';
import { black, flexCenter } from 'constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    ${flexCenter};
    width: ${wrapperWidth};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    border-right: ${wrapperBorderWidthRight} solid ${black};
    //border-color: ${black};
    //padding-right: ${wrapperBorderWidthRight};
    background-color: ${wrapperBackground};
`;
