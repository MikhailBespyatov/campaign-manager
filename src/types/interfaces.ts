import { noop } from './types';

export interface AuthUserRequest {
    email: string;
    password: string;
}

// TODO: [any]
export interface AuthUserResponse {
    user?: any;
    token?: string;
}

export interface Auth {
    access: number;
    authDenyReason?: string;
}

export interface WithError {
    error?: boolean;
}

export interface Reverse {
    reverse?: boolean;
}

export interface MarginBottom {
    marginBottom?: string;
}

export interface Rotation {
    rotate?: number;
}

export interface FlexBooleanAlignment {
    alignCenter?: boolean;
    alignBaseline?: boolean;
    justifyCenter?: boolean;
    noWrap?: boolean;
}

export interface TextProperties {
    fontFamily?: string;
    fontStyle?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
}

export interface Color {
    color?: string;
}

export interface Closable {
    closable?: boolean;
    onClose?: noop;
}

export interface Pointer {
    pointer?: boolean;
}

export interface Active {
    active?: boolean;
}