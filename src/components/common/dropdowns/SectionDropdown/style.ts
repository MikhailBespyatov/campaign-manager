import { Row } from 'components/grid/wrappers/FlexWrapper';
import { black, blue11, grey21, white } from 'constants/styles/colors';
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
`;

export const DropdownSectionButton = styled.button<DropdownSectionProps>`
    ${disableDefaultButtonStyleMixin};
    width: 100%;
    height: 60px;
    color: ${black};
    background-color: ${grey21};
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-radius: 0;
    padding: 0 30px 0 16px;

    :hover {
        background-color: ${blue11};
    }
`;

export const StyledRow = styled(Row)`
    flex-basis: 320px;
    flex-shrink: 2;
    flex-grow: 2;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: end;
`;
export const StyledRowNoShrink = styled(Row)`
    flex-basis: 180px;
    flex-grow: 2;
    flex-shrink: 0;
`;
