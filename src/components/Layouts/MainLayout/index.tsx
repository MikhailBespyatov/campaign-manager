import { Footer } from 'components/grid/Footer';
import { Header } from 'components/grid/Header';
import { Main, Wrapper } from 'components/Layouts/MainLayout/styles';
import React, { FC } from 'react';
import { Background } from 'types';

interface Props extends Background {
    topBar?: JSX.Element;
}

export const MainLayout: FC<Props> = ({ children, topBar, background }) => (
    <>
        <Header />
        <Main background={background}>
            {topBar}
            <Wrapper>{children}</Wrapper>
        </Main>
        <Footer />
    </>
);
