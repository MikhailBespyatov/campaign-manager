import { AbsoluteLocation, Disabled, FlexBooleanAlignment, MarginBottom, MarginRight, MarginRightBottom } from 'types';

export interface CardProps extends Disabled, MarginRightBottom {}

export interface DescriptionCellProps {
    height?: string;
}

export interface FeatureCellProps {
    quantity: number;
    color?: string;
    background?: string;
}

export interface CardRowProps extends FlexBooleanAlignment, MarginBottom {}

export interface CardColumnProps extends CardRowProps, MarginRight {}

export interface PinnedBlockProps extends AbsoluteLocation {}

export interface DescriptionCellProps {
    height?: string;
}

export interface FeatureCellProps {
    quantity: number;
}
