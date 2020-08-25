import {
    adaptiveCard,
    averageValue,
    checkOnAdmin,
    filterTagsConverter,
    getWidthString,
    giveAccess,
    numberConverter,
    parseAssignRoleDescription,
    parseCalendarDate,
    parseKeyWithoutId
} from 'utils/usefulFunctions';
import { administratorTypeName, cardPaddingMultiplier, padding } from '../constants';

describe('adaptiveCard', () => {
    it('Test adaptivity', () => {
        expect(adaptiveCard(-1, '0', '100px')).toBe('');
        expect(adaptiveCard(0, '0', '100px')).toBe('');
        expect(adaptiveCard(1, '0', '100px')).toBe(`@media (min-width: 0) and (max-width: 100px) {
        width: calc(100% / 1 - ${cardPaddingMultiplier} * ${padding} * 0 / 1);
        &:nth-child(1n) {
        margin-right: 0;
      }
    }`);
        expect(adaptiveCard(2, '0', '100px')).toBe(`@media (min-width: 0) and (max-width: 100px) {
        width: calc(100% / 2 - ${cardPaddingMultiplier} * ${padding} * 1 / 2);
        &:nth-child(2n) {
        margin-right: 0;
      }
    }`);
        expect(adaptiveCard(3, '0', '100px')).toBe(`@media (min-width: 0) and (max-width: 100px) {
        width: calc(100% / 3 - ${cardPaddingMultiplier} * ${padding} * 2 / 3);
        &:nth-child(3n) {
        margin-right: 0;
      }
    }`);
        expect(adaptiveCard(4, '0', '100px')).toBe(`@media (min-width: 0) and (max-width: 100px) {
        width: calc(100% / 4 - ${cardPaddingMultiplier} * ${padding} * 3 / 4);
        &:nth-child(4n) {
        margin-right: 0;
      }
    }`);
    });
});

describe('checkOnAdmin', () => {
    it('Test for admin', () => {
        expect(checkOnAdmin({})).toBe(false);
        expect(
            checkOnAdmin({
                user: {
                    userId: 'dawd'
                }
            })
        ).toBe(false);
        expect(
            checkOnAdmin({
                user: {
                    userId: 'dawd',
                    roles: []
                }
            })
        ).toBe(false);
        expect(
            checkOnAdmin({
                user: {
                    userId: 'dawd',
                    roles: ['dawdadad']
                }
            })
        ).toBe(false);
        expect(
            checkOnAdmin({
                user: {
                    userId: 'dawd',
                    roles: ['dawdadad', administratorTypeName, 'dawdadawd']
                }
            })
        ).toBe(true);
    });
});

describe('giveAccess', () => {
    it('Test for returning access', () => {
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
                    roles: ['dawdadad', administratorTypeName, 'adawd']
                }
            })
        ).toBe(0);
        expect(
            giveAccess({
                user: {
                    userId: 'dawd',
                    roles: ['dawdadad', administratorTypeName, 'Curator']
                }
            })
        ).toBe(0);
        expect(
            giveAccess({
                user: {
                    userId: 'dawd',
                    roles: ['ContentManager', 'Curator']
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
        ).toBe(2);
        expect(
            giveAccess({
                user: {
                    userId: 'dawd',
                    roles: ['Curator', 'Facilitator']
                }
            })
        ).toBe(2);
        expect(
            giveAccess({
                user: {
                    userId: 'dawd',
                    roles: ['Tracked', 'Registered', 'Facilitator']
                }
            })
        ).toBe(3);
    });
});

describe('numberConverter', () => {
    it('Test for converting', () => {
        expect(numberConverter(-1.21)).toBe('0');
        expect(numberConverter(0)).toBe('0');
        expect(numberConverter(1.21)).toBe('1');
        expect(numberConverter(123)).toBe('123');
        expect(numberConverter(1234.99)).toBe('1235');
        expect(numberConverter(12342)).toBe('12K');
        expect(numberConverter(12342111)).toBe('12M');
        expect(numberConverter(12342111222)).toBe('12B');
        expect(numberConverter(12342111222333)).toBe('12B+');
        expect(numberConverter(12342111222333444)).toBe('12B+');
    });
});

describe('parseCalendarDate', () => {
    it('Test for dates', () => {
        expect(parseCalendarDate(new Date('dadadad'))).toBe('invalid date');
        expect(parseCalendarDate(new Date(''))).toBe('invalid date');
        expect(parseCalendarDate(new Date('undefined'))).toBe('invalid date');
        expect(parseCalendarDate(new Date('2020-07-23T06:18:07.264Z'))).toBe('23.07.2020');
        expect(parseCalendarDate(new Date('2020-07-03T06:18:07.264Z'))).toBe('03.07.2020');
    });
});

describe('averageValue', () => {
    it('Test for average value', () => {
        expect(averageValue([])).toBe(0);
        expect(averageValue([0, -1, 2])).toBe(0.3);
        expect(averageValue([NaN, -1, 2])).toBe(NaN);
        expect(averageValue([0, -1, NaN])).toBe(NaN);
        expect(averageValue([0, 2, 2])).toBe(1.3);
        expect(averageValue([4, 5, 6.3])).toBe(5.1);
    });
});

describe('filterTagsConverter', () => {
    it('Test for filter tags', () => {
        expect(filterTagsConverter(['Reported'])).toStrictEqual({
            isReported: true,
            hasHlsStream: true
        });
        expect(filterTagsConverter(['No HLS stream'])).toStrictEqual({
            isReported: false,
            hasHlsStream: false
        });
        expect(filterTagsConverter(['No HLS stream', 'Reported'])).toStrictEqual({
            isReported: true,
            hasHlsStream: false
        });
        expect(filterTagsConverter(['No HLS dawd', 'awdadwawd'])).toStrictEqual({
            isReported: false,
            hasHlsStream: true
        });
        expect(filterTagsConverter([])).toStrictEqual({
            isReported: false,
            hasHlsStream: true
        });
    });
});

describe('getWidthString', () => {
    it('Test for adaptive string', () => {
        expect(getWidthString(0)).toBe('');
        expect(getWidthString(-1)).toBe('');
        expect(getWidthString(1.1)).toBe('');
        expect(getWidthString(1)).toBe(`width: 8.333333333333332%;`);
        expect(getWidthString(13)).toBe('');
        expect(getWidthString(7)).toBe(`width: 58.333333333333336%;`);
    });
});

describe('parseAssignRoleDescription', () => {
    it('Test for assign role modal description', () => {
        expect(parseAssignRoleDescription('', '')).toBe('Do you want to assign a user anonymous a role unknown?');
        expect(parseAssignRoleDescription('God turd', '')).toBe(
            'Do you want to assign a user God turd a role unknown?'
        );
        expect(parseAssignRoleDescription('', 'God turd')).toBe(
            'Do you want to assign a user anonymous a role God turd?'
        );
        expect(parseAssignRoleDescription('God turd', 'God turd')).toBe(
            'Do you want to assign a user God turd a role God turd?'
        );
    });
});

describe('parseKeyWithoutId', () => {
    it('Test for path keys', () => {
        expect(parseKeyWithoutId('')).toBe('');
        expect(parseKeyWithoutId('/')).toBe('/');
        expect(parseKeyWithoutId('/parse')).toBe('/parse');
        expect(parseKeyWithoutId('/parse/')).toBe('/parse/');
        expect(parseKeyWithoutId('/parse/wadadwadad')).toBe('/parse/');
        expect(parseKeyWithoutId('/parse/1/adadadw')).toBe('/parse/1/');
    });
});
