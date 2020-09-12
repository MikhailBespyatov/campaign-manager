import {
    commaInserterRegExp,
    removeRightSlashRegExp,
    slashInserterRegExp,
    spaceInserterRegExp
} from 'constants/regExp';
import { accessRoles, accessValues } from 'constants/roles';
import { AuthUserResponse } from 'types';

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

// insert comma for every 3rd number
export const commaInserter = (str: string) => str.match(commaInserterRegExp)?.join(',') || '';

// insert space for every 4th number
export const spaceInserter = (str: string) =>
    str.split('').reverse().join('').match(spaceInserterRegExp)?.join(' ').split('').reverse().join('').trim() || '';

// insert slash for every 2nd number
export const slashInserter = (str: string) =>
    str
        .split('')
        .reverse()
        .join('')
        .match(slashInserterRegExp)
        ?.join('/')
        .split('')
        .reverse()
        .join('')
        .replace(removeRightSlashRegExp, '') || '';
