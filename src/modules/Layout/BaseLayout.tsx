import { useStore } from 'effector-react';
import { ContentWrapper } from 'modules/Layout/ContentWrapper/ContentWrapper';
import Footer from 'modules/Layout/Footer/Footer';
import { Header } from 'modules/Layout/Header/Header';
import React, { FC } from 'react';
import { userStores } from 'stores/user';

export const BaseLayout: FC = ({ children }) => {
    const { access } = useStore(userStores.auth);

    if (access === -1) return <>{children}</>;
    return (
        <div className="flex-fill d-flex flex-column">
            <Header />
            <ContentWrapper>{children}</ContentWrapper>
            {children}
            <Footer />
        </div>
    );
};
