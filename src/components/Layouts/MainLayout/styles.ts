import { mainBorderRadius, mainHorizontalPadding, mainVerticalPadding } from 'components/Layouts/MainLayout/constants';
import { white } from 'constants/styles';
import styled from 'styled-components';
import { Background } from 'types';

export const Main = styled.main<Background>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: ${mainBorderRadius} ${mainBorderRadius} 0 0;
    background: ${({ background }) => (background ? background : white)};
    //overflow: hidden;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${mainVerticalPadding} ${mainHorizontalPadding};
`;
