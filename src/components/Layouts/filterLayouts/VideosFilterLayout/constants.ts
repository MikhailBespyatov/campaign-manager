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
