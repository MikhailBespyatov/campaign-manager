import { flexCenter, tertiaryBorderRadius, white } from 'constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${flexCenter};
    margin: auto;
    flex-direction: column;
    width: 565px;
    border-radius: ${tertiaryBorderRadius};
    background-color: ${white};
    padding: 25px 65px;
`;
