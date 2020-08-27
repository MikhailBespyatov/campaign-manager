export interface CardProps {
    disabled?: boolean;
}

export interface DescriptionCellProps {
    height?: string;
}

export interface FeatureCellProps {
    quantity: number;
    color?: string;
    background?: string;
}

export interface CardRowProps {
    alignCenter?: boolean;
    justifyCenter?: boolean;
    marginBottom?: string;
}

export interface CardColumnProps extends CardRowProps {
    marginRight?: string;
}

export interface PinnedBlockProps {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
}

export interface DescriptionCellProps {
    height?: string;
}

export interface FeatureCellProps {
    quantity: number;
}
