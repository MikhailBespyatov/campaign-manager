import { Span } from 'components/common/TextComponents/Span';
import {
    headerHorizontalMargin,
    headerVerticalMargin,
    styledSpanFontSize1,
    styledSpanFontSize2,
    styledSpanFontSize3,
    styledSpanFontWeight2,
    styledSpanFontWeight3,
    styledSpanLineHeight1,
    styledSpanLineHeight2,
    styledSpanLineHeight3,
    styledSpanMarginLeft
} from 'components/grid/Header/constants';
import styled from 'styled-components';
import { flexCenter, formTextStyleMixin, headerHeight } from '../../../constants';

export const StyledHeader = styled.header`
    ${flexCenter};
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: ${headerHeight};
    padding: ${headerVerticalMargin} ${headerHorizontalMargin};
`;
export const StyledSpan1 = styled(Span)`
    ${formTextStyleMixin};
    font-size: ${styledSpanFontSize1};
    line-height: ${styledSpanLineHeight1};
    margin-left: ${styledSpanMarginLeft};
`;

export const StyledSpan2 = styled(Span)`
    ${formTextStyleMixin};
    font-weight: ${styledSpanFontWeight2};
    font-size: ${styledSpanFontSize2};
    line-height: ${styledSpanLineHeight2};
`;

export const StyledSpan3 = styled(Span)`
    ${formTextStyleMixin};
    font-weight: ${styledSpanFontWeight3};
    font-size: ${styledSpanFontSize3};
    line-height: ${styledSpanLineHeight3};
    margin-left: auto;
`;
