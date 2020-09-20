import { mainBackground, mainBorderRadius, mainHorizontalPadding } from 'components/Layouts/MainLayout/constants';
import { wrapperVerticalPadding } from 'components/Layouts/UserAdminLayout/constants';
import styled from 'styled-components';

export const Main = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: ${mainBorderRadius};
    background: ${mainBackground};
    overflow: hidden;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${wrapperVerticalPadding} ${mainHorizontalPadding};
`;
