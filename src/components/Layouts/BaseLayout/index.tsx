import { AuthImageLayout } from 'components/Layouts/AuthImageLayout';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { userStores } from 'stores/user';

export const BaseLayout: FC = ({ children }) => {
    const { access } = useStore(userStores.auth);

    if (access === -1) return <AuthImageLayout>{children}</AuthImageLayout>;

    return <CampaignManagerLayout>{children}</CampaignManagerLayout>;
};
