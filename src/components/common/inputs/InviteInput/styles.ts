import {
    wrapperBackground,
    wrapperBorderColor,
    wrapperBorderRadius,
    wrapperBorderWidth,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperWidth
} from 'components/common/inputs/InviteInput/constants';
import { flexStart } from 'constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${flexStart};
    align-items: center;
    width: ${wrapperWidth};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    border: ${wrapperBorderWidth} solid ${wrapperBorderColor};
    padding: 0 ${wrapperHorizontalPadding};
    background-color: ${wrapperBackground};
`;
