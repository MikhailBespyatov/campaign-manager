import { ChangeEvent } from 'react';
import { noop } from './types';

export interface Subtitle {
    subtitle?: string;
}

export interface StrictTitle extends Subtitle {
    title: string;
}

export interface Title extends Subtitle {
    title?: string;
}

export interface Auth {
    access: number;
    authDenyReason?: string;
}

export interface WithError {
    error?: boolean;
    success?: boolean;
    touched?: boolean;
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

export interface Margin extends MarginRightBottom {
    margin?: string;
    marginLeft?: string;
    marginTop?: string;
}

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
    justifyEnd?: boolean;
}

export interface TextProperties extends NoWrap {
    fontFamily?: string;
    fontStyle?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    alignCenter?: boolean;
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

export interface Type {
    type?: string;
}

export interface Label {
    label?: string;
}

export interface TextFormInput extends Disabled, Type, Label {
    error: string | undefined;
    defaultValue?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

export interface TextInput extends Disabled, Label {
    error: string | undefined;
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

export interface HTMLButtonType {
    type?: 'submit' | 'button' | 'reset' | undefined;
}

export interface WithSrc {
    src?: string;
}

export interface WidthMaxContent {
    widthMaxContent?: boolean;
}

export interface RadioProperties {
    defaultActive?: string;
    values: string[];
    data?: string[];
    onChange?: (active: string) => void;
}

export interface ForcedColor {
    forcedColor?: string;
}

export interface Quantity {
    quantity: number;
}

export interface UntouchedWarning {
    untouchedWarning?: string;
}
