import styled from 'styled-components';
import { disableDefaultButtonStyleMixin } from 'constants/styles';

export const Button = styled.button`
    ${disableDefaultButtonStyleMixin};
    display: flex;
    cursor: pointer;
    align-items: center;
`;
