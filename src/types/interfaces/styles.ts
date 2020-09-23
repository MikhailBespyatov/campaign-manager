export interface Reverse {
    reverse?: boolean;
}

export interface AbsoluteLocation {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
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

export interface FlexAlignment {
    align?: string;
    justify?: string;
    direction?: string;
    wrap?: string;
}

export interface Sizes {
    width?: string;
    height?: string;
}

export interface MinSizes {
    minWidth?: string;
    minHeight?: string;
}

export interface WidthMaxContent {
    widthMaxContent?: boolean;
}

export interface MaxSizes {
    maxWidth?: string;
    maxHeight?: string;
}

export interface BorderRadiusProperties {
    borderRadius?: string;
    borderTopLeftRadius?: string;
    borderTopRightRadius?: string;
    borderBottomLeftRadius?: string;
    borderBottomRightRadius?: string;
}

export interface BorderProperties {
    border?: string;
    borderTop?: string;
    borderLeft?: string;
    borderRight?: string;
    borderBottom?: string;
    borderWidth?: string;
    borderStyle?: string;
    borderColor?: string;
}

export interface BoxShadow {
    boxShadow?: string;
}

export interface Background {
    background?: string;
}

export interface TextAlignment {
    alignTextCenter?: boolean;
}

export interface Color {
    color?: string;
}

export interface ForcedColor {
    forcedColor?: string;
}

export interface TextProperties extends NoWrap, Color {
    fontFamily?: string;
    fontStyle?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    letterSpacing?: string;
    alignCenter?: boolean;
    alignEnd?: boolean;
}

export interface TextDecoration {
    textDecoration?: string;
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

export interface PaddingRight {
    paddingRight?: string;
}

export interface PaddingBottom {
    paddingBottom?: string;
}

export interface PaddingRightBottom extends PaddingRight, PaddingBottom {}

export interface Padding extends PaddingRightBottom {
    padding?: string;
    paddingLeft?: string;
    paddingTop?: string;
}

export interface Rotation {
    rotate?: number;
}

export interface Pointer {
    pointer?: boolean;
}

export interface Opacity {
    opacity?: number;
}

export interface Visibility {
    visible?: boolean;
}

export interface ZIndex {
    zIndex?: string;
}
