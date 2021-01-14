import { Noop, StatusType } from 'types';

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
    onClose?: Noop;
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

export interface TotalRecords {
    totalRecords?: number;
}

export interface Loading {
    loading?: boolean;
}

export interface Unselectable {
    unselectable?: boolean;
}

export interface AdditionalTitle {
    additionalTitle?: string;
}

export interface Path {
    path: string;
}

export interface ActiveRootName {
    activeRootName: string;
}

export interface ActiveRootStatus {
    activeRootStatus: string;
}

export interface Status {
    status: StatusType;
}

export interface IsExpiredBorder {
    isExpiredBorder?: boolean;
}

export interface IsWithoutBorder {
    withoutBorder?: boolean;
}
