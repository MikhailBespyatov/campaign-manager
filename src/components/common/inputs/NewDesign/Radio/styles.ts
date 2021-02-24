import styled, { css } from 'styled-components';
import { CheckboxProps } from 'components/common/inputs/NewDesign/Checkbox';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { Span } from 'components/common/typography/Span';
import { blue, grey8 } from 'constants/styles';

interface ItemSelectorWrapperProps extends CheckboxProps {}

export const ItemSpan = styled(Span)`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
`;

export const ItemSelectorWrapper = styled(Section)<ItemSelectorWrapperProps>`
    height: 48px;
    padding: 0 40px;
    border: 1px solid ${grey8};
    cursor: pointer;
    ${({ checked }) =>
        checked &&
        css`
            background: #f1f1ff;
            border: 0;
            ${ItemSpan} {
                color: ${blue};
            }
        `}
`;
