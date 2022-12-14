import {
    wrapperBackground,
    wrapperBorderRadius,
    wrapperHeight,
    wrapperMinWidth,
    wrapperPadding
} from 'components/common/inputs/NumberCounter/constants';
import { flexCenter } from 'constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${flexCenter};
    justify-content: space-around;
    min-width: ${wrapperMinWidth};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    background-color: ${wrapperBackground};
    padding: ${wrapperPadding};
`;
