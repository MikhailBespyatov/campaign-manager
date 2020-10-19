/* eslint-disable react/destructuring-assignment */
import { routes } from 'constants/routes';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { userStores } from 'stores/user';

interface Props extends RouteProps {
    proxy: number[];
    redirectTo?: string;
}

export const AccessRoute: FC<Props> = ({ proxy, redirectTo = routes.home, ...props }) => {
    const { access } = useStore(userStores.auth);

    //if (!Number.isInteger(proxy) || proxy < -1 || proxy > 9) return <Redirect to={routes.signIn.index} />;

    if (proxy.includes(access)) {
        // remove trailing slash from the url
        if (props?.location?.pathname.slice(-1) !== '/') return <Route {...props} />;
        return <Redirect to={props?.location?.pathname.slice(0, -1)} />;
    } else return <Redirect to={redirectTo} />;
};
