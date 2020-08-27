import {
    CardBorderRadius,
    cardHeight,
    cardWidth,
    featureCellFontSize,
    featureCellLineHeight,
    horizontalPadding,
    verticalPadding
} from 'components/grid/Card/constants';
import { CardColumnProps, CardProps, CardRowProps, FeatureCellProps } from 'components/grid/Card/types';
import styled from 'styled-components';
//import { adaptiveCard } from 'utils/usefulFunctions';
import {
    black,
    borderWidth,
    cardBackgroundColor,
    cardPaddingMultiplier,
    disableDefaultButtonStyleMixin,
    disabledOpacity,
    featureHeight,
    flexCenter,
    flexStart,
    formTextStyleMixin,
    grey,
    padding,
    primaryColor,
    transitionTime,
    white
} from '../../../constants';

export const Card = styled.div<CardProps>`
    ${({ disabled }) => (disabled ? `opacity: ${disabledOpacity}` : '')};
    background-color: ${cardBackgroundColor};
    margin-right: calc(${padding} * ${cardPaddingMultiplier});
    margin-bottom: calc(${padding} * ${cardPaddingMultiplier});
    //min-height: 200px;
    width: ${cardWidth};
    height: ${cardHeight};
    border-radius: ${CardBorderRadius};
    overflow: hidden;
    ${flexCenter};
    flex-direction: column;
    z-index: 1;
`;

//     @media (min-width: ${xxl}) {
//         width: calc(100% / 4 - ${cardPaddingMultiplier} * ${padding} * 3 / 4);
//         &:nth-child(4n) {
//             margin-right: 0;
//         }
//     }
//     ${adaptiveCard(3, xl, xxl_1)}
//     ${adaptiveCard(2, lg, xl_1)}
//   ${adaptiveCard(1, '0', lg_1)}

// export const PinnedBlock = styled.div<PinnedBlockProps>`
//     position: absolute;
//     ${({ left, right }) => (left ? `left: ${left}` : right ? `right: ${right}` : `left: ${padding}`)};
//     ${({ top, bottom }) => (top ? `top: ${top}` : bottom ? `bottom: ${bottom}` : `top: 0`)};
//     display: flex;
//     flex-direction: column;
// `;

// export const PinnedInfo = styled.div`
//     margin-bottom: ${padding};
//     cursor: pointer;
// `;

export const CardRow = styled.div<CardRowProps>`
    //width: 100%;
    ${flexStart};
    ${({ alignCenter }) => (alignCenter ? `align-items: center;` : '')};
    ${({ justifyCenter }) => (justifyCenter ? `justify-content: center;` : '')};
    flex-direction: row;
    flex-wrap: wrap;
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : `margin-bottom: ${padding};`)};
    z-index: 1;
`;

export const CardColumn = styled.div<CardColumnProps>`
    //width: 100%;
    ${flexStart};
    ${({ alignCenter }) => (alignCenter ? `align-items: center;` : '')};
    ${({ justifyCenter }) => (justifyCenter ? `justify-content: center;` : '')};
    flex-direction: column;
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : ``)};
`;

// export const CardRowSlider = styled.div`
//     width: 100%;
//     height: calc(${hashtagsSliderHeight} + ${scrollBarWidth});
//     ${flexStart};
//     flex-wrap: nowrap;
//     overflow: auto;
//     padding: 0 ${padding};
//     //margin-bottom: ${CardRowSliderMargin};
//     ${marginBottomMixin};
// `;

export const Description = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: ${verticalPadding} ${horizontalPadding};
    ${flexStart};
    justify-content: space-between;
    flex-direction: column;
`;

// export const DescriptionCell = styled.div<DescriptionCellProps>`
//     width: 100%;
//     height: ${({ height }) => (height ? height : '')};
//     ${ellipsisMixin};
//     display: flex;
//     align-items: center;
//     flex-direction: row;
// `;

export const CardRowFeatures = styled.div`
    height: ${featureHeight};
    width: 100%;
    ${flexStart};
    //border-top: ${borderWidth} solid ${grey};
    flex-direction: row;
    flex-wrap: wrap;
`;

export const FeatureCell = styled.button<FeatureCellProps>`
    ${disableDefaultButtonStyleMixin};
    ${formTextStyleMixin};
    font-size: ${featureCellFontSize};
    line-height: ${featureCellLineHeight};
    width: calc(${({ quantity }) => '100% / ' + quantity});
    height: ${featureHeight};
    ${flexCenter};
    cursor: pointer;
    color: ${({ color }) => (color ? color : white)};
    background-color: ${({ background }) => (background ? background : black)};
    &:last-child {
        border-right: none;
    }
    transition: ${transitionTime};
    // &:hover:not(:disabled) {
    //     color: ${primaryColor};
    // }
    &:disabled {
        background-color: ${grey};
    }
`;
