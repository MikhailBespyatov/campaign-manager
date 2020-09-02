import { linkMarginBottom, linkMarginTop } from 'pages/SignIn/RequestCode/constants';
import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';
import { formPrimaryColor, formTextStyleMixin } from '../../../constants';

export const Link = styled(ReactLink)`
    ${formTextStyleMixin};
    color: ${formPrimaryColor};
    display: flex;
`;

export const LinkWrapper = styled.div`
    margin-top: ${linkMarginTop};
    margin-bottom: ${linkMarginBottom};
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
`;
