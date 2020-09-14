import { AbsoluteWrapperProps } from 'components/common/wrappers/AbsoluteWrapper/types';
import { padding } from 'constants/styles';
import styled from 'styled-components';

export const AbsoluteWrapper = styled.div<AbsoluteWrapperProps>`
    position: absolute;
    ${({ top, bottom }) => (top ? `top: ${top}` : bottom ? `bottom: ${bottom}` : `top: ${padding}`)};
    ${({ left, right }) => (left ? `left: ${left}` : right ? `right: ${right}` : `left: ${padding}`)};
    ${({ width }) => (width ? `width: ${width}` : '')};
    display: ${({ isClosed }) => (isClosed ? 'none' : 'block')};
    ${({ zIndex }) => (zIndex ? `z-index: ${zIndex}` : '')};
`;
