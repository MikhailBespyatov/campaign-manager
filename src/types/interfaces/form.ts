import { ChangeEvent } from 'react';

export interface WithError {
    error?: boolean;
    success?: boolean;
    touched?: boolean;
}

export interface UntouchedWarning {
    untouchedWarning?: string;
}

export interface Type {
    type?: string;
}

export interface Label {
    label?: string;
}

export interface Placeholder {
    placeholder?: string;
}

export interface Disabled {
    disabled?: boolean;
}

export interface DefaultChecked {
    defaultChecked?: boolean;
}

export interface NumberInput {
    defaultValue?: number;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
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

export interface RadioProperties {
    defaultActive?: string;
    values: string[];
    data?: string[];
    onChange?: (active: string) => void;
}

export interface ItemRadioProperties {
    value: string;
    data?: string;
    onClick: (value: string) => void;
}

export interface HTMLButtonType {
    type?: 'submit' | 'button' | 'reset' | undefined;
}
