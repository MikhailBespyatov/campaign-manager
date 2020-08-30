import { AbsoluteWrapperProps } from 'components/common/wrappers/AbsoluteWrapper/types';
import styled from 'styled-components';
import { padding } from '../../../../constants';

export const AbsoluteWrapper = styled.div<AbsoluteWrapperProps>`
    ${({ top, bottom }) => (top ? `top: ${top}` : bottom ? `bottom: ${bottom}` : `top: ${padding}`)};
    ${({ left, right }) => (left ? `left: ${left}` : right ? `right: ${right}` : `left: ${padding}`)};
    position: absolute;
`;
