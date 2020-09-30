import {
    productSpanFontSize,
    productSpanLineHeight,
    productSpanWidth
} from 'components/common/typography/special/constants';
import { defaultFontFamily, defaultFontStyle, defaultFontWeight } from 'constants/defaults';
import { ellipsisMixin, white } from 'constants/styles';
import styled from 'styled-components';

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
