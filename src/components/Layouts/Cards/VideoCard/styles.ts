import {
    productSpanFontSize,
    productSpanLineHeight,
    productSpanMarginLeft,
    ratingSpanColor,
    ratingSpanFontSize,
    ratingSpanFontWeight,
    ratingSpanLineHeight
} from 'components/Layouts/Cards/VideoCard/constants';
import { formTextStyleMixin } from 'constants/styles';
import styled from 'styled-components';

export const RatingSpan = styled.span`
    ${formTextStyleMixin};
    font-weight: ${ratingSpanFontWeight};
    font-size: ${ratingSpanFontSize};
    line-height: ${ratingSpanLineHeight};
    color: ${ratingSpanColor};
`;

export const ProductSpan = styled.span`
    margin-left: ${productSpanMarginLeft};
    ${formTextStyleMixin};
    font-size: ${productSpanFontSize};
    line-height: ${productSpanLineHeight};
    color: ${ratingSpanColor};
`;
