import ISO6391 from 'iso-639-1';
import { SortType } from 'types';

export interface SortsState {
    likes: SortType;
    views: SortType;
    dateAdded: SortType;
    [key: string]: SortType;
}

export const defaultSortsState: SortsState = {
    likes: 'none',
    views: 'none',
    dateAdded: 'none'
};

// TODO replace Mock with API response when endpoint is ready;
export const languagesCodesArray = [
    'pl',
    'sv',
    'fa',
    'lv',
    'fr',
    'ro',
    'km',
    'ko',
    'lt',
    'sl',
    'mk',
    'de',
    'he',
    'sk',
    'da',
    'it',
    'bg',
    'sr',
    'th',
    'nb',
    'fi',
    'hr',
    'az',
    'tr',
    'nl',
    'fo',
    'ru',
    'pt',
    'el',
    'ar',
    'vi',
    'sq',
    'es',
    'ja',
    'cs',
    'en',
    'mn',
    'zh',
    'uk'
];

export const languagesDataArray = ISO6391.getLanguages(languagesCodesArray);
export const languagesNames = languagesDataArray.map(item => item.name).sort();

// export function getLanguageCode(language: string) {
//     var languageCode: string[] | undefined;

//     switch (language) {
//         case 'Russian':
//             languageCode = ['ru'];
//             break;

//         case 'Chinese':
//             languageCode = ['zh'];
//             break;

//         case 'Italian':
//             languageCode = ['it'];
//             break;
//         case 'Spanish':
//             languageCode = ['es'];
//             break;
//         case 'French':
//             languageCode = ['fr'];
//             break;
//         case 'English':
//             languageCode = ['en'];
//             break;
//         default:
//             languageCode = undefined;
//             break;
//     }

//     return languageCode;
// }
