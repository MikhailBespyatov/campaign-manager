import { FlexGrowProps, FlexProps } from 'components/grid/wrappers/FlexWrapper/types';
import { flexStart } from 'constants/styles';
import styled from 'styled-components';

const Flex = styled.div<FlexProps>`
    ${flexStart};
    ${({ widthMaxContent }) => (widthMaxContent ? 'width: max-content;' : '')};
    ${({ alignCenter }) => (alignCenter ? `align-items: center;` : '')};
    ${({ alignBaseline }) => (alignBaseline ? `align-items: baseline;` : '')};
    ${({ alignEnd }) => (alignEnd ? `align-items: flex-end;` : '')};
    ${({ justifyCenter }) => (justifyCenter ? `justify-content: center;` : '')};
    ${({ justifyAround }) => (justifyAround ? `justify-content: space-around;` : '')};
    ${({ justifyBetween }) => (justifyBetween ? `justify-content: space-between;` : '')};
    ${({ justifyEnd }) => (justifyEnd ? `justify-content: flex-end;` : '')};
    flex-wrap: ${({ noWrap }) => (noWrap ? 'nowrap' : 'wrap')};
    ${({ width }) => (width ? `width: ${width};` : ``)};
    ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth};` : ``)};
    ${({ height }) => (height ? `height: ${height};` : ``)};
    ${({ minHeight }) => (minHeight ? `min-height: ${minHeight};` : ``)};
    ${({ maxHeight }) => (maxHeight ? `max-height: ${maxHeight};` : ``)};
    ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop};` : ``)};
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : ``)};
    ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight};` : ``)};
    ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft};` : ``)};
    ${({ zIndex }) => (zIndex !== undefined ? `z-index: ${zIndex};` : ``)};
`;

export const Row = styled(Flex)`
    flex-direction: row;
`;

export const Column = styled(Flex)`
    flex-direction: column;
`;

export const Section = styled(Row)`
    width: 100%;
`;

export const FlexGrow = styled(Flex)<FlexGrowProps>`
    flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
    flex-grow: ${({ flexGrow }) => flexGrow || '1'};
    ${({ flexShrink }) => (flexShrink ? `flex-shrink: ${flexShrink};` : ``)};
    ${({ flexBasis }) => (flexBasis ? `flex-basis: ${flexBasis};` : ``)};
`;
