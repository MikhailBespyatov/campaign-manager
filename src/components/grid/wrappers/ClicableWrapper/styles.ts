import { clickableWrapperDiameter } from 'components/grid/wrappers/ClicableWrapper/constants';
import { disableDefaultButtonStyleMixin } from 'constants/styles';
import styled from 'styled-components';
import { Round, Sizes } from 'types';

interface Props extends Round, Sizes {}

export const ClickableWrapper = styled.button<Props>`
    ${disableDefaultButtonStyleMixin};
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ round }) => (round ? 'border-radius: 50%;' : '')};
    width: ${({ width }) => (width ? width : clickableWrapperDiameter)};
    height: ${({ height }) => (height ? height : clickableWrapperDiameter)};
`;
