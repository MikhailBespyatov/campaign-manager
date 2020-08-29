import {
    wrapperBackground,
    wrapperBorderRadius,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperWidth
} from 'components/common/features/Budget/constants';
import styled from 'styled-components';
import { flexStart } from '../../../../constants';

export const Wrapper = styled.div`
    ${flexStart};
    align-items: center;
    width: ${wrapperWidth};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    background-color: ${wrapperBackground};
    padding: 0 ${wrapperHorizontalPadding};
`;
