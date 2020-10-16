/* eslint-disable react/destructuring-assignment */
import { routes } from 'constants/routes';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { userStores } from 'stores/user';

export const PrivateRoute: FC<RouteProps> = props => {
    const { access } = useStore(userStores.auth);

    if (access !== -1) {
        // remove trailing slash from the url
        if (props?.location?.pathname.slice(-1) !== '/') return <Route {...props} />;
        return <Redirect to={props?.location?.pathname.slice(0, -1)} />;
    } else return <Redirect to={routes.signIn.index} />;
};
