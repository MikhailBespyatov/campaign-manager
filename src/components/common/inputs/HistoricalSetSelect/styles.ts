import {
    itemDefaultColor,
    wrapperBackground,
    wrapperBorderColor,
    wrapperBorderRadius,
    wrapperBorderWidth,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperWidth
} from 'components/common/inputs/HistoricalSetSelect/constants';
import { flexStart, formGrey3 } from 'constants/styles';
import { borderBlockHorizontalPadding } from 'pages/CampaignManager/Campaign/Details/constants';
import styled from 'styled-components';
import { Active, IsWithoutBorder, PaddingRight, Sizes } from 'types';

interface WrapperProps extends Sizes, IsWithoutBorder, PaddingRight {}

export const Wrapper = styled.div<WrapperProps>`
    position: relative;
    ${flexStart};
    align-items: center;
    min-width: ${({ width }) => (width ? width : wrapperWidth)};
    height: ${wrapperHeight};

    padding: 0 ${({ paddingRight }) => (paddingRight ? paddingRight : wrapperHorizontalPadding)};
    margin-left: ${`-${borderBlockHorizontalPadding}`};
    border-right: 1px solid ${formGrey3};
    border-left: 1px solid ${formGrey3};
    ${({ withoutBorder }) => withoutBorder && `border: none`};
    //border-radius: ${wrapperBorderRadius};
    //background-color: ${wrapperBackground};
    z-index: 0;
`;

export const SelectUl = styled.ul`
    width: 100%;
    border-radius: ${wrapperBorderRadius};
    border: ${wrapperBorderWidth} solid ${wrapperBorderColor};
    overflow: hidden;
`;

export const SelectLi = styled.li<Active>`
    ${flexStart};
    align-items: center;
    width: 100%;
    min-height: 50px;
    padding: 0;
    background: ${({ active, theme: { primaryColor } }) => (active ? primaryColor : itemDefaultColor)};
    cursor: pointer;
`;
