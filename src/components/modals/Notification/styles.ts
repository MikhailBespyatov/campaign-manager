import {
    transitionDuration,
    wrapperBorderRadius,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperVerticalPadding
} from 'components/modals/Notification/constants';
import { flexCenter } from 'constants/styles';
import { blue, errorColor, white } from 'constants/styles/colors';
import styled from 'styled-components';
import { Active } from 'types/interfaces/global';

interface Props extends Active {}

export const Wrapper = styled.div<Props>`
    position: fixed;
    top: -${wrapperHeight};

    ${flexCenter};
    width: 100%;
    transition-duration: ${transitionDuration};
    transition-property: transform, box-shadow;
    z-index: 15;

    ${({ active }) =>
        active &&
        `
            transform: translateY(${wrapperHeight});
        `}
`;

export const StyledNotification = styled.div<Props>`
    ${flexCenter};
    flex-direction: row;
    height: ${wrapperHeight};
    border-radius: 0 0 ${wrapperBorderRadius} ${wrapperBorderRadius};
    ${({ active }) => active && 'box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08)'};
    background-color: ${blue};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
    transition-duration: ${transitionDuration};
    transition-property: transform, box-shadow;
`;

interface ContentTextProp {
    error?: boolean;
}

export const ContentText = styled.span<ContentTextProp>`
    color: ${white};
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    ${({ error }) => error && `color: ${errorColor}`};
`;

export const HighlightedText = styled.span`
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    text-align: inherit;
    color: red;
`;
