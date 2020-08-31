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

export interface MarginRight {
    marginRight?: string;
}

export interface MarginBottom {
    marginBottom?: string;
}

export interface MarginRightBottom extends MarginRight, MarginBottom {}

export interface Rotation {
    rotate?: number;
}

export interface NoWrap {
    noWrap?: boolean;
}

export interface FlexBooleanAlignment extends NoWrap {
    alignCenter?: boolean;
    alignBaseline?: boolean;
    justifyCenter?: boolean;
}

export interface TextProperties extends NoWrap {
    fontFamily?: string;
    fontStyle?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
}

export interface Color {
    color?: string;
}

export interface Background {
    background?: string;
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

export interface NoopClick {
    onClick?: noop;
}

export interface Sizes {
    width?: string;
    height?: string;
}

export interface MinSizes {
    minWidth?: string;
    minHeight?: string;
}

export interface MaxSizes {
    maxWidth?: string;
    maxHeight?: string;
}

export interface TextAlignment {
    alignTextCenter?: boolean;
}

export interface Placeholder {
    placeholder?: string;
}

export interface Title {
    title: string;
    subtitle?: string;
}

export interface WithHashtag {
    hashtag?: boolean;
}

export interface Disabled {
    disabled?: boolean;
}

export interface AbsoluteLocation {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
}
