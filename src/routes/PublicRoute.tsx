import React, { FC } from 'react';
import { RouteProps } from 'react-router';
import { AccessRoute } from 'routes/AccessRoute';

export const PublicRoute: FC<RouteProps> = props => <AccessRoute proxy={-1} {...props} />;
