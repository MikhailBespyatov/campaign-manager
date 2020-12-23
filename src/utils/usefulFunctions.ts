import { numbersAfterComma, numbersAfterDotWom, userStorageName } from 'constants/global';
import { commaInserterRegExp, removeRightSlashRegExp, slashInserterRegExp } from 'constants/regExp';
import { accessRoles, accessValues } from 'constants/roles';
import { publicPrefix } from 'constants/routes';
import { AuthUserResponse } from 'types';

export const retrieveWalletId = () => {
    const user: WOM.UserJwtTokenResponse = JSON.parse(localStorage.getItem(userStorageName) || '{}');

    return user?.user?.walletId || '';
};

export const giveAccessByRoles = (roles: string[] | null | undefined) => {
    let access = -1;
    if (roles?.length) {
        const lowerCaseRoles = roles.map(role => role.toLowerCase());
        accessRoles.forEach(
            (role, i) =>
                lowerCaseRoles.includes(role.toLowerCase()) &&
                (access > accessValues[i] || access === -1) &&
                (access = accessValues[i])
        );
    }

    return access;
};

// give access a user as natural (-1 - no any access) number (the less number, the more rights user has)
export const giveAccess: (user: AuthUserResponse) => number = user => {
    const roles = user?.user?.roles;

    return giveAccessByRoles(roles);
};

export const retrieveRoleAndConvert = (roles: string[]) => {
    const access = giveAccessByRoles(roles);

    switch (access) {
        case 1:
            return 'Admin';
        default:
            return 'Member';
    }
};

// imitating async request
export const wait = (ms: number) => new Promise(res => setTimeout(res, ms));

// insert comma for every 3rd number
export const commaInserter = (str: string) => str.match(commaInserterRegExp)?.join(',') || '';

// insert space for every 4th number
// export const spaceInserter = (str: string) =>
//     str.split('').reverse().join('').match(spaceInserterRegExp)?.join(' ').split('').reverse().join('').trim() || '';
export const spaceInserter = (str: string) => {
    const data = parseFloat(str).toLocaleString('ru-RU');
    if (data === 'не число') return '';
    else return data.toString().replace(',', '.');
};

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

export const retrieveOrganizationIdFromUser = (user: WOM.UserJwtTokenResponse) =>
    // const adminOf = user?.user?.organizationMembership?.adminOf;
    // const memberOf = user?.user?.organizationMembership?.memberOf;

    // return adminOf?.length ? adminOf[0] : memberOf?.length ? memberOf[0] : '';
    user?.user?.organizationId || '';

export const getOrganizationId = () => {
    const user: WOM.UserJwtTokenResponse = JSON.parse(localStorage.getItem(userStorageName) || '{}');

    return retrieveOrganizationIdFromUser(user);
};

export const roundScore = (num: number, n = numbersAfterComma) => num.toFixed(n);

// parse month date
export const parseMonthDate: (date: Date) => string = date =>
    date.toString() === 'Invalid Date'
        ? 'invalid date'
        : (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) +
          '.' +
          (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);

export const getPublicTheme = () =>
    window.location.pathname
        .substring(publicPrefix.length)
        .substring(0, window.location.pathname.substring(publicPrefix.length).indexOf('/'));
// .substring(
//     0,
//     window.location.pathname
//         .substring(publicPrefix.length - 1)
//         //.substring(1)
//         .indexOf('/') + 1
// )
// .substring(1);

export const mergeElementsWithString = (array: string[], str: string) => array.map(i => i + str);

export const removeLastNulls = (x: number) => {
    if (Number.isNaN(x)) return '0';
    let y = x.toString();
    // @ts-ignore
    while (y[y.length - 1] === 0 && !Number.isInteger(y)) y = y.slice(0, -1);

    return y;
};

export const currencyToStandardForm = (x: number) =>
    spaceInserter(removeLastNulls(Number(x.toFixed(numbersAfterDotWom))));
