import { mainBorderRadius, mainVerticalPadding } from 'components/Layouts/MainLayout/constants';
import { grey7, pageHorizontalPadding } from 'constants/styles';
import styled from 'styled-components';
import { Background } from 'types';

export const Main = styled.main<Background>`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    border-radius: ${mainBorderRadius} ${mainBorderRadius} 0 0;
    background: ${({ background }) => (background ? background : grey7)};
    //overflow: hidden;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    padding: 0 ${pageHorizontalPadding} ${mainVerticalPadding};
`;
