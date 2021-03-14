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
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { flexCenter, formTextStyleMixin, headerHeight, white } from 'constants/styles';
import styled from 'styled-components';

export const StyledHeader = styled.header`
    ${flexCenter};
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: ${headerHeight};
    padding: ${headerVerticalMargin} ${headerHorizontalMargin};
`;

export const StyledSpan1 = styled.span`
    ${formTextStyleMixin};
    color: ${({ theme: { primaryTextColor } }) => primaryTextColor || white};
    font-size: ${styledSpanFontSize1};
    line-height: ${styledSpanLineHeight1};
    margin-left: ${styledSpanMarginLeft};
`;

export const StyledSpan2 = styled.span`
    ${formTextStyleMixin};
    color: ${({ theme: { primaryTextColor } }) => primaryTextColor || white};
    font-weight: ${styledSpanFontWeight2};
    font-size: ${styledSpanFontSize2};
    line-height: ${styledSpanLineHeight2};
`;

export const StyledSpan3 = styled.span`
    ${formTextStyleMixin};
    color: ${({ theme: { primaryTextColor } }) => primaryTextColor || white};
    font-weight: ${styledSpanFontWeight3};
    font-size: ${styledSpanFontSize3};
    line-height: ${styledSpanLineHeight3};
    margin-left: auto;
    cursor: pointer;
`;

export const MerchantIdWrapper = styled(ContentWrapper)`
    background-color: #272847;
    padding: 8px 10px;
    flex-direction: row;
    border-radius: 48px;
    margin-left: 10px;
`;
