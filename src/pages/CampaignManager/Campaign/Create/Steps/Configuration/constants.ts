export const configurationContentHorizontalPadding = '90px';
export const configurationContentPadding = `16px 0px 0px`;
export const checkboxBlockMargin = '4px';
export const biasTitleMarginTop = '16px';
export const biasBlockMargin = '8px';

//40 - from Figma design
//export const ConfigurationItemHorizontalPadding = 40 - parseInt(configurationContentHorizontalPadding) + 'px';

//Mock
export const biasValues = ['1', '2', '3', '5', '10'];

export const ageMock = [
    { range: { ageFrom: 15, ageTo: 18 }, viewers: '4356' },
    { range: { ageFrom: 19, ageTo: 25 }, viewers: '5321' },
    { range: { ageFrom: 26, ageTo: 30 }, viewers: '732' },
    { range: { ageFrom: 30, ageTo: undefined }, viewers: '4356' },
    { range: { ageFrom: undefined, ageTo: undefined }, viewers: '4356' }
];

export const localeMock = [
    { locale: 'Eastern Europe', viewers: '4356' },
    { locale: 'Western Europe', viewers: '2123' },
    { locale: 'Middle east', viewers: '2212' },
    { locale: 'Africa', viewers: '2234' },
    { locale: 'North America', viewers: '2234' },
    { locale: 'Asia', viewers: '2234' },
    { locale: 'Oceania', viewers: '2234' },
    { locale: 'Unknown', viewers: '2234' }
];

export const hashtagsMock = [
    { hashtag: 'MAC', viewers: '4356' },
    { hashtag: 'MAC Auth', viewers: '4356' },
    { hashtag: 'Adidas', viewers: '4356' },
    { hashtag: 'YEAY Hashtag', viewers: '4356' }
];

export const overridesMock = [
    { title: 'Override views', form: 'override' },
    { title: 'Boost video', form: 'boostVideo' },
    { title: 'Boost creator', form: 'boostCreator' }
];
