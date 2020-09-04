import { noop } from './types';

export interface Auth {
    access: number;
    authDenyReason?: string;
}

export interface WithError {
    error?: boolean;
    success?: boolean;
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
    title?: string;
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

export interface Opacity {
    opacity?: number;
}

export interface Visibility {
    visible?: boolean;
}

export interface imgProperties {
    src: string;
    alt?: string;
}

export interface NumberInput {
    defaultValue?: number;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
}

export interface TextFormInput extends Disabled {
    error: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    label: string;
    name: string;
    type?: string;
}

export interface BorderRadiusProperties {
    borderRadius?: string;
    borderTopLeftRadius?: string;
    borderTopRightRadius?: string;
    borderBottomLeftRadius?: string;
    borderBottomRightRadius?: string;
}
