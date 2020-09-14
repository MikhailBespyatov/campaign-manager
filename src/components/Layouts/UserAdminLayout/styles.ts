import {
    wrapperBackground,
    wrapperBorderRadius,
    wrapperBoxShadow,
    wrapperHorizontalPadding,
    wrapperVerticalPadding
} from 'components/Layouts/UserAdminLayout/constants';
import styled from 'styled-components';

export const Main = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: ${wrapperBorderRadius};
    background: ${wrapperBackground};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
    box-shadow: ${wrapperBoxShadow};
`;
