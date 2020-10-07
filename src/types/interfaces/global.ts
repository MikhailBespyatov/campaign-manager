import { noop } from 'types';

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
    onClick?: noop;
}

export interface WithHashtag {
    hashtag?: boolean;
}

export interface Quantity {
    quantity: number;
}
