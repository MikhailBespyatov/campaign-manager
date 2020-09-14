import { Footer } from 'components/grid/Footer';
import { Header } from 'components/grid/Header';
import { Main } from 'components/Layouts/MainLayout/styles';
import React, { FC } from 'react';

export const MainLayout: FC = ({ children }) => (
    <>
        <Header />
        <Main>{children}</Main>
        <Footer />
    </>
);
