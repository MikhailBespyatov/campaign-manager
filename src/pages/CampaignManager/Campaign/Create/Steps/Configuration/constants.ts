export const VISIBLE_COUNTRIES = 10;
export const configurationContentPadding = `16px 0px 0px`;
export const checkboxBlockMargin = '4px';
export const biasTitleMarginTop = '16px';
export const biasBlockMargin = '8px';
export const searchSelectMarginTop = '16px';

interface CountriesTypes {
    country: string;
    viewers: string;
}
//40 - from Figma design
//export const configurationContentHorizontalPadding = '90px';
//export const ConfigurationItemHorizontalPadding = 40 - parseInt(configurationContentHorizontalPadding) + 'px';

//Mock
export const biasValues = ['1', '2', '3', '5', '10'];

export const manyBiasValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export const ageMock = [
    { range: { ageFrom: 15, ageTo: 18 }, viewers: '4356' },
    { range: { ageFrom: 19, ageTo: 25 }, viewers: '5321' },
    { range: { ageFrom: 26, ageTo: 30 }, viewers: '732' },
    { range: { ageFrom: 30, ageTo: undefined }, viewers: '4356' },
    { range: { ageFrom: undefined, ageTo: undefined }, viewers: '4356' }
];

export const countriesMock: CountriesTypes[] = [
    { country: 'Eastern Europe', viewers: '4356' },
    { country: 'Western Europe', viewers: '2123' },
    { country: 'Middle east', viewers: '2212' },
    { country: 'Africa', viewers: '2234' },
    { country: 'North America', viewers: '2234' },
    { country: 'Asia', viewers: '2234' },
    { country: 'Oceania', viewers: '2234' },
    { country: 'Unknown', viewers: '2234' }
];

export const hashtagsMock = [
    { hashtag: 'MAC', viewers: '4356' },
    { hashtag: 'MAC Auth', viewers: '4356' },
    { hashtag: 'Adidas', viewers: '4356' },
    { hashtag: 'YEAY Hashtag', viewers: '4356' }
];

export const boostMock = [
    { title: 'Boost Content', form: 'boostContent' },
    { title: 'Boost Creator', form: 'boostCreator' }
];

export const overrideMock = [{ title: 'Override Views', form: 'override' }];
