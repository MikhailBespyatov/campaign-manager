import {
    productSpanFontSize,
    productSpanLineHeight,
    productSpanWidth
} from 'components/common/typography/special/constants';
import { defaultFontFamily, defaultFontStyle, defaultFontWeight } from 'constants/defaults';
import { ellipsisMixin, white } from 'constants/styles';
import styled from 'styled-components';
import { Sizes } from 'types';

export const ProductSpan = styled.span`
    width: ${productSpanWidth};
    font-family: ${defaultFontFamily};
    font-style: ${defaultFontStyle};
    font-weight: ${defaultFontWeight};
    font-size: ${productSpanFontSize};
    line-height: ${productSpanLineHeight};
    color: ${white};
    ${ellipsisMixin};
`;

export const ProductSpanMini = styled.span<Sizes>`
    width: ${({ width }) => (width ? width : productSpanWidth)};
    font-family: ${defaultFontFamily};
    font-style: ${defaultFontStyle};
    font-weight: ${defaultFontWeight};
    font-size: 7px;
    line-height: 7px;
    color: ${white};
    ${ellipsisMixin};
`;
