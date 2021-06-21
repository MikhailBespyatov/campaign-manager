import { parseCampaignRoutes } from 'constants/routes';
import { multiplyPixels, pixelsAddition, pixelsSubtraction } from 'utils/parsers';
import {
    allValuesAreTrue,
    commaInserter,
    currencyToStandardForm,
    currencyToText,
    engagementStatusTypes,
    getDate,
    getDateFromString,
    getFlexBasisPercent,
    getFormattedDate,
    getPublicTheme,
    getStoriesTitle,
    getTotalItems,
    giveAccess,
    giveAccessByRoles,
    isExactValuesQuantity,
    mergeElementsWithString,
    objectIsEmpty,
    parseMonthDate,
    removeLastNulls,
    retrieveRoleAndConvert,
    roundScore,
    slashInserter,
    spaceInserter
} from 'utils/usefulFunctions';

describe('giveAccessByRoles', () => {
    it('Test for returning access', () => {
        expect(giveAccessByRoles(undefined)).toBe(-1);
        expect(giveAccessByRoles(null)).toBe(-1);
        expect(giveAccessByRoles([])).toBe(-1);
        expect(giveAccessByRoles(['dawdadad'])).toBe(-1);
        expect(giveAccessByRoles(['dawdadad', 'administrator', 'adawd'])).toBe(0);
        expect(giveAccessByRoles(['dawdadad', 'administrator', 'Curator'])).toBe(0);
        expect(giveAccessByRoles(['OrganizationAdministrator', 'Curator'])).toBe(1);
        expect(giveAccessByRoles(['Curator', 'Registered'])).toBe(-1);
        expect(giveAccessByRoles(['Curator', 'Facilitator'])).toBe(-1);
        expect(giveAccessByRoles(['Tracked', 'Registered', 'Facilitator'])).toBe(-1);
    });
});

describe('retrieveRoleAndConvert', () => {
    it('Test for retrieving a role', () => {
        // expect(retrieveRoleAndConvert(undefined)).toBe('Member');
        // expect(retrieveRoleAndConvert(null)).toBe('Member');
        expect(retrieveRoleAndConvert([])).toBe('Member');
        expect(retrieveRoleAndConvert(['dawdadad'])).toBe('Member');
        expect(retrieveRoleAndConvert(['dawdadad', 'administrator', 'adawd'])).toBe('Member');
        expect(retrieveRoleAndConvert(['dawdadad', 'administrator', 'Curator'])).toBe('Member');
        expect(retrieveRoleAndConvert(['OrganizationAdministrator', 'Curator'])).toBe('Admin');
        expect(retrieveRoleAndConvert(['Curator', 'Registered'])).toBe('Member');
        expect(retrieveRoleAndConvert(['Curator', 'Facilitator'])).toBe('Member');
        expect(retrieveRoleAndConvert(['Tracked', 'Registered', 'Facilitator'])).toBe('Member');
    });
});

describe('giveAccess', () => {
    it('Test for returning access of a user', () => {
        expect(giveAccess({})).toBe(-1);
        expect(
            giveAccess({
                user: {
                    userId: 'dawd'
                }
            })
        ).toBe(-1);
        expect(
            giveAccess({
                user: {
                    userId: 'dawd',
                    roles: []
                }
            })
        ).toBe(-1);
        expect(
            giveAccess({
                user: {
                    userId: 'dawd',
                    roles: ['dawdadad']
                }
            })
        ).toBe(-1);
        expect(
            giveAccess({
                user: {
                    userId: 'dawd',
                    roles: ['dawdadad', 'administrator', 'adawd']
                }
            })
        ).toBe(0);
        expect(
            giveAccess({
                user: {
                    userId: 'dawd',
                    roles: ['dawdadad', 'administrator', 'Curator']
                }
            })
        ).toBe(0);
        expect(
            giveAccess({
                user: {
                    userId: 'dawd',
                    roles: ['OrganizationAdministrator', 'Curator']
                }
            })
        ).toBe(1);
        expect(
            giveAccess({
                user: {
                    userId: 'dawd',
                    roles: ['Curator', 'Registered']
                }
            })
        ).toBe(-1);
        expect(
            giveAccess({
                user: {
                    userId: 'dawd',
                    roles: ['Curator', 'Facilitator']
                }
            })
        ).toBe(-1);
        expect(
            giveAccess({
                user: {
                    userId: 'dawd',
                    roles: ['Tracked', 'Registered', 'Facilitator']
                }
            })
        ).toBe(-1);
    });
});

describe('commaInserter', () => {
    it('Test for inserting a comma', () => {
        expect(commaInserter('')).toBe('');
        expect(commaInserter('1')).toBe('1');
        expect(commaInserter('12')).toBe('12');
        expect(commaInserter('123')).toBe('123');
        expect(commaInserter('1234')).toBe('1,234');
        expect(commaInserter('1234234')).toBe('1,234,234');
    });
});

describe('spaceInserter', () => {
    it('Test for inserting a space', () => {
        expect(spaceInserter('')).toBe('');
        expect(spaceInserter('1')).toBe('1');
        expect(spaceInserter('12')).toBe('12');
        expect(spaceInserter('123')).toBe('123');
        expect(spaceInserter('1234')).toBe('1 234');
        expect(spaceInserter('1234234')).toBe('1 234 234');
        expect(spaceInserter('123423457')).toBe('123 423 457');
    });
});

describe('slashInserter', () => {
    it('Test for inserting a space', () => {
        expect(slashInserter('')).toBe('');
        expect(slashInserter('1')).toBe('1');
        expect(slashInserter('12')).toBe('12');
        expect(slashInserter('123')).toBe('12/3');
        expect(slashInserter('1234')).toBe('12/34');
    });
});

describe('currencyToText', () => {
    it('Test for converting to text', () => {
        expect(currencyToText(0)).toBe('$0 USD');
        expect(currencyToText(1)).toBe('$1 USD');
        expect(currencyToText(1313.321)).toBe('$1313.321 USD');
    });
});

describe('objectIsEmpty', () => {
    it('Test for object Is Empty', () => {
        expect(objectIsEmpty({})).toBe(true);
        expect(objectIsEmpty({ bestLanguage: 'JS' })).toBe(false);
        expect(objectIsEmpty({ bestFramework: 'REACT', bestFutureFramework: 'SVELTE' })).toBe(false);
    });
});

describe('allValuesAreTrue', () => {
    it('Test for all Values Are True', () => {
        expect(allValuesAreTrue({})).toBe(true);
        expect(allValuesAreTrue({ bestLanguage: 'JS' })).toBe(true);
        expect(allValuesAreTrue({ bestFramework: 'REACT', bestFutureFramework: false })).toBe(false);
        expect(allValuesAreTrue({ bestFramework: true, bestFutureFramework: false })).toBe(false);
        expect(allValuesAreTrue({ bestLanguage: false })).toBe(false);
        expect(allValuesAreTrue({ bestFramework: true, bestFutureFramework: true })).toBe(true);
    });
});

describe('isExactValuesQuantity', () => {
    it('Test for is Exact Values Quantity', () => {
        expect(isExactValuesQuantity({})).toBe(false);
        expect(isExactValuesQuantity({}, 3)).toBe(false);
        expect(isExactValuesQuantity({}, 0)).toBe(true);
        expect(isExactValuesQuantity({ bestLanguage: 'JS' })).toBe(true);
        expect(isExactValuesQuantity({ bestLanguage: 'JS' }, 2)).toBe(false);
        expect(isExactValuesQuantity({ bestFramework: 'REACT', bestFutureFramework: 'SVELTE' }, 2)).toBe(true);
    });
});

describe('roundScore', () => {
    it('Test for rounding a score', () => {
        expect(roundScore(2.23)).toBe('2.2');
        expect(roundScore(2.29)).toBe('2.3');
        expect(roundScore(0)).toBe('0.0');
        expect(roundScore(1.1212, 2)).toBe('1.12');
    });
});

describe('parseMonthDate', () => {
    it('Test for month dates', () => {
        expect(parseMonthDate(new Date('dadadad'))).toBe('invalid date');
        expect(parseMonthDate(new Date(''))).toBe('invalid date');
        expect(parseMonthDate(new Date('undefined'))).toBe('invalid date');
        expect(parseMonthDate(new Date('2020-07-23T06:18:07.264Z'))).toBe('23.07');
        expect(parseMonthDate(new Date('2020-07-03T06:18:07.264Z'))).toBe('03.07');
    });
});

describe('getPublicTheme', () => {
    // TODO: any
    let windowSpy: any;

    beforeEach(() => {
        windowSpy = jest.spyOn(global, 'window', 'get');
    });

    afterEach(() => {
        windowSpy.mockRestore();
    });

    it('should return theme', () => {
        windowSpy.mockImplementation(() => ({
            location: {
                pathname: '/public/adidas/dddd'
            }
        }));

        expect(getPublicTheme()).toEqual('adidas');

        windowSpy.mockImplementation(() => ({
            location: {
                pathname: '/public/adidas/'
            }
        }));

        expect(getPublicTheme()).toEqual('adidas');

        windowSpy.mockImplementation(() => ({
            location: {
                pathname: '/public/estee_lauder/'
            }
        }));

        expect(getPublicTheme()).toEqual('estee_lauder');

        windowSpy.mockImplementation(() => ({
            location: {
                pathname: '/public/estee_lauder'
            }
        }));

        expect(getPublicTheme()).toEqual('');

        windowSpy.mockImplementation(() => ({
            location: {
                pathname: '/public/'
            }
        }));

        expect(getPublicTheme()).toEqual('');
    });
});

describe('mergeElementsWithString', () => {
    it('Test for month dates', () => {
        expect(mergeElementsWithString([], 'str')).toStrictEqual([]);
        expect(mergeElementsWithString(['1', '2'], '3')).toStrictEqual(['13', '23']);
    });
});

describe('removeLastNulls', () => {
    it('Test for numbers to remove nulls', () => {
        expect(removeLastNulls(12)).toStrictEqual('12');
        expect(removeLastNulls(0)).toStrictEqual('0');
        expect(removeLastNulls(0.0)).toStrictEqual('0');
        expect(removeLastNulls(1.0)).toStrictEqual('1');
        expect(removeLastNulls(NaN)).toStrictEqual('0');
        expect(removeLastNulls(1.022)).toStrictEqual('1.022');
    });
});

describe('currencyToStandardForm', () => {
    it('Test for numbers bring a number to currency standard', () => {
        expect(currencyToStandardForm(12)).toStrictEqual('12');
        expect(currencyToStandardForm(0)).toStrictEqual('0');
        expect(currencyToStandardForm(0.0)).toStrictEqual('0');
        expect(currencyToStandardForm(1.0)).toStrictEqual('1');
        expect(currencyToStandardForm(NaN)).toStrictEqual('0');
        expect(currencyToStandardForm(1.022)).toStrictEqual('1.022');
        expect(currencyToStandardForm(1111.022)).toStrictEqual('1 111.022');
    });
});

describe('multiplyPixels', () => {
    it('Test for multiplyPixels', () => {
        expect(multiplyPixels('100ppx', 2)).toBe('0');
        expect(multiplyPixels('100px', 2)).toBe('200px');
        expect(multiplyPixels('100px', 3)).toBe('300px');
    });
});

describe('pixelsAddition', () => {
    it('Test for pixelsAddition', () => {
        expect(pixelsAddition('100ppx', '0')).toBe('0');
        expect(pixelsAddition('100ppx', '0px')).toBe('0');
        expect(pixelsAddition('100px', '101px')).toBe('201px');
        expect(pixelsAddition('19px', '20px')).toBe('39px');
    });
});

describe('pixelsSubtraction', () => {
    it('Test for pixelsSubtraction', () => {
        expect(pixelsSubtraction('100ppx', '0')).toBe('0');
        expect(pixelsSubtraction('100ppx', '0px')).toBe('0');
        expect(pixelsSubtraction('200px', '101px')).toBe('99px');
        expect(pixelsSubtraction('19px', '20px')).toBe('-1px');
    });
});

describe('getDate', () => {
    it('Test for getDate', () => {
        expect(getDate(new Date('2020-01-01'))).toBe('2020-01-01');
        // expect(getDate('')).toBe(undefined);
        // expect(getDate()).toBe(undefined);
        expect(getDate(new Date('2021-11-25'))).toBe('2021-11-25');
        expect(getDate(new Date('2021-02-02 13:38'))).toBe('2021-02-02');
    });
});

describe('getFormattedDate', () => {
    it('Test for getFormattedDate', () => {
        expect(getFormattedDate(new Date('2020-01-01'))).toBe('01-01-2020');
        expect(getFormattedDate(null)).toBe('');
        expect(getFormattedDate()).toBe('');
        expect(getFormattedDate(new Date(2001, 0, 1, 15, 30, 55))).toBe('01-01-2001');
    });
});

describe('engagementStatusTypes', () => {
    it('Test for engagementStatusTypes', () => {
        expect(engagementStatusTypes(0)).toBe('error');
        expect(engagementStatusTypes(1)).toBe('success');
        expect(engagementStatusTypes(345)).toBe('success');
        expect(engagementStatusTypes(-1)).toBe('error');
        expect(engagementStatusTypes(-1.1)).toBe('error');
        expect(engagementStatusTypes(34.32)).toBe('success');
        expect(engagementStatusTypes()).toBe('error');
        expect(engagementStatusTypes(undefined)).toBe('error');
    });
});

describe('parseCampaignRoutes', () => {
    it('Test for parseCampaignRoutes', () => {
        expect(parseCampaignRoutes(['1', '2'])).toEqual({
            1: '/campaign_manager/campaign/1/',
            2: '/campaign_manager/campaign/2/',
            status: '/campaign_manager/campaign/:status(1|2)/'
        });
        expect(parseCampaignRoutes(['test', 'test2', 'test3'])).toEqual({
            test: '/campaign_manager/campaign/test/',
            test2: '/campaign_manager/campaign/test2/',
            test3: '/campaign_manager/campaign/test3/',
            status: '/campaign_manager/campaign/:status(test|test2|test3)/'
        });
    });
});

describe('getStoriesTitle', () => {
    it('Test for getStoriesTitle', () => {
        expect(getStoriesTitle('src/test/folder/current/Select/')).toBe('current/Select');
        expect(getStoriesTitle('src/test/folder')).toBe('src/test');
        expect(getStoriesTitle('src/test')).toBe('src');
    });
});

describe('getFlexBasisPercent', () => {
    it('Test for getFlexBasisPercent', () => {
        expect(getFlexBasisPercent(1)).toBe('100.00%');
        expect(getFlexBasisPercent(2)).toBe('50.00%');
        expect(getFlexBasisPercent(3)).toBe('33.33%');
        expect(getFlexBasisPercent(7)).toBe('14.29%');
        expect(getFlexBasisPercent()).toBe('50.00%');
        expect(getFlexBasisPercent(3.2)).toBe('33.33%');
        expect(getFlexBasisPercent(3.3)).toBe('33.33%');
        expect(getFlexBasisPercent(3.7)).toBe('25.00%');
    });
});

describe('getTotalItems', () => {
    it('Test for getTotalItems', () => {
        expect(getTotalItems(1)).toBe(1);
        expect(getTotalItems(2)).toBe(2);
        expect(getTotalItems(0)).toBe(0);
        expect(getTotalItems(-1)).toBe(0);
        expect(getTotalItems(undefined)).toBe(0);
    });
});

describe('getDateFromString', () => {
    it('Test for getDateFromString', () => {
        expect(getDateFromString('2021-01-09T13:57:15.832Z')).toBe('2021-01-09');
        expect(getDateFromString('')).toBe('');
        expect(getDateFromString()).toBe('');
        expect(getDateFromString('adadaasdasd')).toBe('adadaasdasd');
        expect(getDateFromString('adadaTasdasd')).toBe('adada');
    });
});
