import { parsePublicUrl, signInIndexTemplate } from 'constants/routes';
import { useStore } from 'effector-react';
// import { routes } from 'constants/routes';
// import { useStore } from 'effector-react';
// import React, { FC } from 'react';
// import { Redirect, Route, RouteProps } from 'react-router';
// import { userStores } from 'stores/user';
// export const AdminRoute: FC<RouteProps> = props => {
//     const { access } = useStore(userStores.auth);
//     if (access === 0 || access === 1) {
//         // remove trailing slash from the url
//         if (props?.location?.pathname.slice(-1) !== '/') return <Route {...props} />;
//         return <Redirect to={props?.location?.pathname.slice(0, -1)} />;
//     } else return <Redirect to={routes.home} />;
// };
import React, { FC } from 'react';
import { RouteProps } from 'react-router';
import { AccessRoute } from 'routes/AccessRoute';
import { themeStores } from 'stores/theme';

export const CampaignManagerRoute: FC<RouteProps> = props => {
    const { prefix } = useStore(themeStores.globalPrefix);

    return <AccessRoute proxy={[1, 2]} {...props} redirectTo={parsePublicUrl(prefix || '', signInIndexTemplate)} />;
};
