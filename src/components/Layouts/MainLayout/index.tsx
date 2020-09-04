import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { TopBarWithButton } from 'components/grid/bars/TopBarWithButton';
import { Footer } from 'components/grid/Footer';
import { Header } from 'components/grid/Header';
import { Main } from 'components/Layouts/MainLayout/styles';
import React, { FC } from 'react';

export const MainLayout: FC = ({ children }) => (
    <>
        <Header />
        <Main>
            <TopBarWithButton buttons={<RoundedButton>Create Campaign</RoundedButton>} />
            {children}
        </Main>
        <Footer />
    </>
);
