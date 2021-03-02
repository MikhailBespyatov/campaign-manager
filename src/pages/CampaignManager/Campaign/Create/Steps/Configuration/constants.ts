export const configurationContentHorizontalPadding = '20px';
export const configurationContentPadding = `32px ${configurationContentHorizontalPadding} 38px`;

//40 - from Figma design
export const ConfigurationItemHorizontalPadding = 40 - parseInt(configurationContentHorizontalPadding) + 'px';

//Mock
export const biasValues = ['1', '2', '3', '5', '10'];

export const ageMock = [
    { range: '15-18', viewers: '4356' },
    { range: '19-25', viewers: '2123' },
    { range: '26-30', viewers: '2212' },
    { range: '30+', viewers: '2234' },
    { range: 'Unknown', viewers: '1234' }
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