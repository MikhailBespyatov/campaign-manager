import { mainBorderRadius, mainHorizontalPadding, mainVerticalPadding } from 'components/Layouts/MainLayout/constants';
import { grey7 } from 'constants/styles';
import styled from 'styled-components';
import { Background } from 'types';

export const Main = styled.main<Background>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: ${mainBorderRadius} ${mainBorderRadius} 0 0;
    background: ${({ background }) => (background ? background : grey7)};
    //overflow: hidden;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${mainVerticalPadding} ${mainHorizontalPadding};
`;
