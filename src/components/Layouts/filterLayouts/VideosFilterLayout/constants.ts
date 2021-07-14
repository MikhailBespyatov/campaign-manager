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

export function getLanguageCode(language: string) {
    var languageCode: string[] | undefined;

    switch (language) {
        case 'Russian':
            languageCode = ['ru'];
            break;

        case 'Chinese':
            languageCode = ['zh'];
            break;

        case 'Italian':
            languageCode = ['it'];
            break;
        case 'Spanish':
            languageCode = ['es'];
            break;
        case 'French':
            languageCode = ['fr'];
            break;
        case 'English':
            languageCode = ['en'];
            break;
        default:
            languageCode = undefined;
            break;
    }

    return languageCode;
}
