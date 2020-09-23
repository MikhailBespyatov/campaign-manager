import { noop } from 'types';

export interface Subtitle {
    subtitle?: string;
}

export interface StrictTitle extends Subtitle {
    title: string;
}

export interface Title extends Subtitle {
    title?: string;
}

export interface Closable {
    closable?: boolean;
    onClose?: noop;
}

export interface IsClosed {
    isClosed?: boolean;
}

export interface WithSrc {
    src?: string;
}

export interface imgProperties {
    src: string;
    alt?: string;
}
