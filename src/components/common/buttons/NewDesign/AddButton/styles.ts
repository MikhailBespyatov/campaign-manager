import { Span } from 'components/common/typography/Span';
import { buttonBehaviorMixin, disableDefaultButtonStyleMixin, primaryColor } from 'constants/styles';
import styled from 'styled-components';
import { BackgroundColor, BorderProperties, BorderRadius, Sizes } from 'types';

export interface ButtonProps extends Sizes, BorderRadius, Pick<BorderProperties, 'border'>, BackgroundColor {}

export const Button = styled.button<ButtonProps>`
    ${disableDefaultButtonStyleMixin};
    min-width: 160px;
    ${({ width }) => width && `width: ${width};`};
    height: ${({ height }) => height || '36px'};
    ${({ border }) => border && `border: ${border}`};
    ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};
    ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`};
    ${buttonBehaviorMixin}
`;

export const ButtonSpan = styled(Span)`
    font-style: normal;
    color: ${primaryColor};
`;
