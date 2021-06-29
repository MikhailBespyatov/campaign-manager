import { flexCenter, tertiaryBorderRadius, white } from 'constants/styles';
import styled from 'styled-components';
import { Sizes } from 'types';

export const Wrapper = styled.div<Sizes>`
    ${flexCenter};
    margin: auto;
    flex-direction: column;
    width: ${({ width }) => width || '565px'};
    border-radius: ${tertiaryBorderRadius};
    background-color: ${white};
    padding: 25px 65px;
`;
