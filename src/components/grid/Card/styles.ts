import {
    CardBorderRadius,
    cardHeight,
    cardWidth,
    featureCellFontSize,
    featureCellLineHeight
} from 'components/grid/Card/constants';
import { CardProps, FeatureCellProps } from 'components/grid/Card/types';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import {
    black,
    cardBackgroundColor,
    disableDefaultButtonStyleMixin,
    disabledOpacity,
    featureHeight,
    flexCenter,
    flexStart,
    formTextStyleMixin,
    grey,
    primaryBorder,
    transitionTime,
    white
} from 'constants/styles';
import styled from 'styled-components';
import { Padding } from 'types';

export const Card = styled.div<CardProps>`
    ${({ disabled }) => disabled && `opacity: ${disabledOpacity}`};
    background-color: ${cardBackgroundColor};
    width: ${({ width }) => (width ? width : cardWidth)};
    height: ${({ height }) => (height ? height : cardHeight)};
    border-radius: ${CardBorderRadius};
    ${({ unselectableStyled }) => unselectableStyled && `border: ${primaryBorder};`};
    ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`};
    ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`};
    ${({ pointer }) => pointer && 'cursor: pointer;'};
    overflow: hidden;
    ${flexCenter};
    flex-direction: column;
    z-index: 1;
`;

// export const CardRow = styled.div<CardRowProps>`
//     //width: 100%;
//     ${flexStart};
//     ${({ alignCenter }) => (alignCenter ? `align-items: center;` : '')};
//     ${({ justifyCenter }) => (justifyCenter ? `justify-content: center;` : '')};
//     flex-direction: row;
//     flex-wrap: wrap;
//     ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : `margin-bottom: ${padding};`)};
//     z-index: 1;
// `;

// export const CardColumn = styled.div<CardColumnProps>`
//     //width: 100%;
//     ${flexStart};
//     ${({ alignCenter }) => (alignCenter ? `align-items: center;` : '')};
//     ${({ justifyCenter }) => (justifyCenter ? `justify-content: center;` : '')};
//     flex-direction: column;
//     ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : ``)};
//     ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight};` : ``)};
// `;

export const Description = styled.div<Padding>`
    position: relative;
    width: 100%;
    height: 100%;
    ${flexStart};
    justify-content: space-between;
    flex-direction: column;
    z-index: 1;
`;

export const CardRowFeatures = styled.div`
    height: ${featureHeight};
    width: 100%;
    ${flexStart};
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
    transition: ${transitionTime};
    &:last-child {
        border-right: none;
    }

    &:disabled {
        background-color: ${grey};
    }
`;

export const StatsCell = styled(AbsoluteWrapper)`
    height: 59px;
    width: 100%;
    padding: 10px 10px 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.2);
`;
