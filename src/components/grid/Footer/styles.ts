import { Span } from 'components/common/typography/Span';
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

export const StyledSpanTop = styled(Span)`
    font-size: 16px;
    line-height: 25px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${({ theme: { primaryTextColor } }) => primaryTextColor};
`;

export const StyledSpanBottom = styled(Span)`
    font-size: 12px;
    line-height: 25px;
    font-weight: 500;
    color: ${({ theme: { primaryTextColor } }) => primaryTextColor};
`;
