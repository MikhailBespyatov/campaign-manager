import styled from 'styled-components';
import {
    buttonBehaviorMixin,
    disableDefaultButtonStyleMixin,
    primaryColor,
    tertiaryBorderRadius
} from 'constants/styles';
import { Sizes } from 'types';
import { Span } from 'components/common/typography/Span';

export const Button = styled.button<Sizes>`
    ${disableDefaultButtonStyleMixin};
    min-width: 190px;
    ${({ width }) => (width ? `width: ${width};` : ``)};
    height: ${({ height }) => height || '57px'};
    border: 1px solid #c6c6c6;
    border-radius: ${tertiaryBorderRadius};
    padding: 8px 20px 8px 25px;
    ${buttonBehaviorMixin}
`;

export const ButtonSpan = styled(Span)`
    font-style: normal;
    color: ${primaryColor};
`;
