import { Footer } from 'components/grid/Footer';
import { Header } from 'components/grid/Header';
import { Main, Wrapper } from 'components/Layouts/MainLayout/styles';
import React, { FC } from 'react';

interface Props {
    topBar?: JSX.Element;
}

export const MainLayout: FC<Props> = ({ children, topBar }) => (
    <>
        <Header />
        <Main>
            {topBar}
            <Wrapper>{children}</Wrapper>
        </Main>
        <Footer />
    </>
);
