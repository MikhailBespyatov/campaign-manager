import { Footer } from 'components/grid/Footer';
import { Header } from 'components/grid/Header';
import { Wrapper } from 'components/Layouts/MainLayout/styles';
import React, { FC } from 'react';

export const MainLayout: FC = ({ children }) => (
    <>
        <Header />
        <Wrapper>{children}</Wrapper>
        <Footer />
    </>
);
