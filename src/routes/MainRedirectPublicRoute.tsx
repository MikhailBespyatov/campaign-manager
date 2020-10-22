import { routes } from 'constants/routes';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { RouteProps } from 'react-router';
import { AccessRoute } from 'routes/AccessRoute';
import { themeStores } from 'stores/theme';

export const MainRedirectPublicRoute: FC<RouteProps> = props => {
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);

    return <AccessRoute proxy={[-1]} {...props} redirectTo={globalPrefixUrl + routes.userAdmin.index} />;
};
