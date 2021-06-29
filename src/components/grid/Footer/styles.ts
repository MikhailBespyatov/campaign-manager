import { Span } from 'components/common/typography/Span';
import { defaultFontFamily, defaultFontStyle } from 'constants/defaults';
import { flexCenter } from 'constants/styles';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
    bottom: 0;
    ${flexCenter};
    flex-direction: column;
    width: 100%;
    padding: 100px 80px 85px;
`;

export const StyledSpanTop = styled(Span)`
    font-size: 16px;
    line-height: 25px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme: { footerTextColor } }) => footerTextColor};
`;

export const StyledSpanBottom = styled(Span)`
    font-size: 12px;
    line-height: 25px;
    font-weight: 500;
    text-align: center;
    color: ${({ theme: { footerTextColor } }) => footerTextColor};
`;

export const StyledTextLink = styled.a`
    font-family: ${defaultFontFamily};
    font-style: ${defaultFontStyle};
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    color: ${({ theme: { footerTextColor } }) => footerTextColor};
    text-decoration: underline;

    &:hover {
        opacity: 0.6;
    }
`;
