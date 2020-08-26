import { AuthUserResponse } from 'types';
import { accessRoles, accessValues } from '../constants';

// give access a user as natural (-1 - no any access) number (the less number, the more rights user has)
export const giveAccess: (user: AuthUserResponse) => number = user => {
    const roles = user?.user?.roles;
    let access = -1;
    if (roles && roles.length) {
        accessRoles.forEach(
            (role, i) =>
                roles.includes(role) && (access > accessValues[i] || access === -1) && (access = accessValues[i])
        );
    }

    return access;
};

// imitating async request
export const wait = (ms: number) => new Promise(res => setTimeout(res, ms));
