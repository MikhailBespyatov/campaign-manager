import {
    AbsoluteLocation,
    Active,
    Disabled,
    FlexBooleanAlignment,
    MarginBottom,
    MarginRight,
    MarginRightBottom,
    Pointer,
    Sizes
} from 'types';

export interface CardProps extends Disabled, MarginRightBottom, Sizes, Pointer, Active {
    unselectableStyled?: boolean;
}

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
