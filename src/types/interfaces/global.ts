import { Noop } from 'types';

export interface Dictionary<T> {
    [Key: string]: T;
}

export interface Auth {
    access: number;
    authDenyReason?: string;
}

export interface Active {
    active?: boolean;
}

export interface NoopClick {
    onClick?: Noop;
}

export interface WithHashtag {
    hashtag?: boolean;
}

export interface Quantity {
    quantity: number;
}
