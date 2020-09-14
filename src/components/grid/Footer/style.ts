import { backgroundColor, flexCenter, footerHeight } from 'constants/styles';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
    ${flexCenter};
    justify-content: flex-end;
    flex-direction: column;
    width: 100%;
    height: ${footerHeight};
    //background-color: ${backgroundColor};
`;
