import { Span } from 'components/common/typography/Span';
import {
    buttonBehaviorMixin,
    disableDefaultButtonStyleMixin,
    primaryColor,
    tertiaryBorderRadius
} from 'constants/styles';
import styled from 'styled-components';
import { Sizes } from 'types';

export const Button = styled.button<Sizes>`
    ${disableDefaultButtonStyleMixin};
    min-width: 160px;
    ${({ width }) => width && `width: ${width};`};
    height: ${({ height }) => height || '36px'};
    /* border: 1px solid #c6c6c6; */
    /* border-radius: ${tertiaryBorderRadius}; */
    /* padding: 2px; */
    ${buttonBehaviorMixin}
`;

export const ButtonSpan = styled(Span)`
    font-style: normal;
    color: ${primaryColor};
`;
