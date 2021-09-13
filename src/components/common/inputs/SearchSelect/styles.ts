import { TextInput } from 'components/common/inputs/Input';
import {
    inputBorderRadius,
    inputFontSize,
    inputFontWeight,
    inputHeight,
    inputWidth,
    searchSelectWidth
} from 'components/common/inputs/SearchSelect/constants';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { blue2, disableDefaultButtonStyleMixin, flexCenter, secondaryColor, white } from 'constants/styles';
import styled, { css } from 'styled-components';

interface Props {
    isExpanded?: boolean;
}

export const SearchInputWrapper = styled(Section)<Props>`
    align-items: center;
    ${({ isExpanded }) => isExpanded && `border-bottom: 1px solid #e6e6e6`};
`;
export const SearchInput = styled(TextInput)`
    width: ${inputWidth};
    height: ${inputHeight};
    border: none;
    padding: 0 8px;
    font-size: ${inputFontSize};
    font-weight: ${inputFontWeight};
    color: ${secondaryColor};
    background-color: transparent;
`;

export const IconAbsoluteWrapper = styled(AbsoluteWrapper)`
    padding: 8px;
`;

export const SearchSelectWrapper = styled.div<Props>`
    position: relative;
    ${flexCenter};
    justify-content: space-around;
    width: ${searchSelectWidth};
    height: 33px;
    padding: 8px;
    background-color: ${white};
    border: 1px solid #e6e6e6;

    ${({ isExpanded }) =>
        isExpanded
            ? css`
                  border-radius: ${inputBorderRadius} ${inputBorderRadius} 0 0;
                  border-bottom-color: transparent;
              `
            : css`
                  border-radius: ${inputBorderRadius};
              `};
`;

export const ItemsAbsoluteWrapper = styled(AbsoluteWrapper)`
    width: ${searchSelectWidth};
    max-height: 160px;
    left: -1px;
    top: 30px;
    overflow: auto;
    border-radius: 0 0 ${inputBorderRadius} ${inputBorderRadius};
    border: 1px solid #e6e6e6;
    border-top-color: transparent;
    padding: 0;
    z-index: 4;
`;

export const ListItemWrapper = styled.button`
    ${disableDefaultButtonStyleMixin}
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    width: 100%;
    height: 30px;
    padding: 8px 16px;
    background-color: ${white};

    :hover {
        background-color: ${blue2};
    }

    :last-child {
        border-radius: 0;
    }
`;
