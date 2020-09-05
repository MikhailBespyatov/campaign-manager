import { commaInserter, slashInserter, spaceInserter } from 'utils/usefulFunctions';

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
