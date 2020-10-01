import {
    allValuesAreTrue,
    commaInserter,
    currencyToText,
    isExactValuesQuantity,
    objectIsEmpty,
    parseMonthDate,
    roundScore,
    slashInserter,
    spaceInserter
} from 'utils/usefulFunctions';

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
        expect(spaceInserter('1234')).toBe('1234');
        expect(spaceInserter('1234234')).toBe('1234 234');
        expect(spaceInserter('123423457')).toBe('1234 2345 7');
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
