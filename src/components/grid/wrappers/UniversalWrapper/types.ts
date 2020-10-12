import {
    Background,
    BorderProperties,
    BorderRadiusProperties,
    BoxShadow,
    FlexAlignment,
    Margin,
    MaxSizes,
    MinSizes,
    Padding,
    Sizes
} from 'types';

export interface Props
    extends FlexAlignment,
        MaxSizes,
        Sizes,
        MinSizes,
        Margin,
        BorderProperties,
        BorderRadiusProperties,
        Background,
        Padding,
        BoxShadow {}
