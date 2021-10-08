import { black, blue11, white } from 'constants/styles/colors';
import { disableDefaultButtonStyleMixin } from 'constants/styles/mixins';
import styled from 'styled-components';

export interface DropdownSectionProps {
    isOpened?: boolean;
    borderRadius?: string;
    width?: string;
    height?: string;
}

export const DropdownSectionWrapper = styled.div<DropdownSectionProps>`
    position: relative;
    ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || 'fit-content'};
    background-color: ${white};

    ${({ isOpened }) => isOpened && 'padding-bottom: 8px;'};
`;

export const DropdownSectionButton = styled.button<DropdownSectionProps>`
    ${disableDefaultButtonStyleMixin};
    width: 100%;
    height: 60px;
    color: ${black};
    background-color: ${blue11};
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-radius: 0;
    padding: 0 16px;
`;
