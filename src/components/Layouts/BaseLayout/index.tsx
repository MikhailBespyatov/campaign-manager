import { AuthLayout } from 'components/Layouts/AuthLayout';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { userStores } from 'stores/user';

export const BaseLayout: FC = ({ children }) => {
    const { access } = useStore(userStores.auth);

    if (access === -1) return <AuthLayout>{children}</AuthLayout>;

    return <CampaignManagerLayout>{children}</CampaignManagerLayout>;
};
