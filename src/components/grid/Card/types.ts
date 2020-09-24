import {
    AbsoluteLocation,
    Disabled,
    FlexBooleanAlignment,
    MarginBottom,
    MarginRight,
    MarginRightBottom,
    Sizes
} from 'types';

export interface CardProps extends Disabled, MarginRightBottom, Sizes {}

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
