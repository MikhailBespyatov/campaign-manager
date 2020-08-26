import {
    productSpanFontSize,
    productSpanLineHeight,
    productSpanMarginLeft,
    ratingSpanColor,
    ratingSpanFontSize,
    ratingSpanFontWeight,
    ratingSpanLineHeight
} from 'components/Layouts/Cards/VideoCard/constants';
import styled from 'styled-components';
import { formTextStyleMixin } from '../../../../constants';

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
