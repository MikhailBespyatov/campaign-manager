import { AlignmentType, Noop, StatusType } from 'types';
import React, { FC } from 'react';

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

export interface OnChangeBoolean {
    onChange?: (checked: boolean) => void;
}

export interface DefaultValueBoolean {
    defaultValue?: boolean;
}

export interface CreateCampaignStepsProps {}

export interface ProgressBarItemInterface {
    title: string;
    component: FC<CreateCampaignStepsProps>;
    isValidField: string;
}

export interface OnChangeSelect {
    onChangeSelect: (active: string) => void;
}

export interface Bias {
    bias: string;
}

export interface Alignment {
    alignment?: AlignmentType[];
}

export interface DataTable extends Alignment {
    cells: React.ReactNode[];
    isCheckedRow?: boolean;
}

export interface ColumnAlignment {
    columnAlignment?: AlignmentType;
}

export interface IsValid {
    isValid?: boolean;
}

export interface SelectorFilterType {
    type?: 'select' | 'checkbox';
}
