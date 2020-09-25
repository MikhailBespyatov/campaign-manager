import { numbersAfterComma, userStorageName } from 'constants/global';
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

export const currencyToText = (currency: number) => '$' + currency + ' USD';

export const objectIsEmpty = (obj: object) => !Object.values(obj).length;

export const allValuesAreTrue = (obj: object) => !Object.values(obj).includes(false);

export const isExactValuesQuantity = (obj: object, quantity: number = 1) => Object.values(obj).length === quantity;

export const getOrganizationId = () => {
    const user: WOM.UserJwtTokenResponse = JSON.parse(localStorage.getItem(userStorageName) || '{}');
    const adminOf = user?.user?.organizationMembership?.adminOf;

    return adminOf?.length ? adminOf[0] : '';
};

export const roundScore = (num: number, n = numbersAfterComma) => num.toFixed(n);
