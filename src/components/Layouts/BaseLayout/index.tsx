import { AuthLayout } from 'components/Layouts/AuthLayout';
import { MainLayout } from 'components/Layouts/MainLayout';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { userStores } from 'stores/user';

export const BaseLayout: FC = ({ children }) => {
    const { access } = useStore(userStores.auth);

    if (access === -1) return <AuthLayout>{children}</AuthLayout>;

    return <MainLayout>{children}</MainLayout>;
};
