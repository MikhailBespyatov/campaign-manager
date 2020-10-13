import { headerLogoHeight } from 'components/common/imageComponents/LogoImg/constants';
import styled from 'styled-components';

export const LogoImg = styled.div`
    width: auto;
    height: ${headerLogoHeight};
    background-image: url(${({ theme: { logo } }) => logo});
    background-size: cover;
`;
