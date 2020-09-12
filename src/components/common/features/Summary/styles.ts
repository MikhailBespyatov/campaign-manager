import {
    wrapperBackground,
    wrapperBorderRadius,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperWidth
} from 'components/common/features/Summary/constants';
import { flexStart } from 'constants/styles';
import styled from 'styled-components';
import { MarginRightBottom } from 'types';

export const Wrapper = styled.div<MarginRightBottom>`
    ${flexStart};
    align-items: center;
    width: ${wrapperWidth};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    background-color: ${wrapperBackground};
    padding: 0 ${wrapperHorizontalPadding};
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : ``)};
    ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight};` : ``)};
`;
