import { CheckboxProps } from 'components/common/inputs/NewDesign/Checkbox';
import { Column, FlexGrow, Section } from 'components/grid/wrappers/FlexWrapper';
import { blue2, grey4 } from 'constants/styles';
import styled from 'styled-components';
import { BorderProperties, Color, ColumnAlignment } from 'types';

export const TableHeaderColumnSpan = styled.span<Color>`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: ${({ color }) => color || grey4};
`;

export const Cell = styled(FlexGrow)<ColumnAlignment>`
    flex-direction: row;
    ${({ columnAlignment }) =>
        columnAlignment === 'start'
            ? 'justify-content: flex-start;'
            : columnAlignment === 'end'
            ? 'justify-content: flex-end;'
            : 'justify-content: center;'}
`;

export const TableHeader = styled(Section)<BorderProperties>`
    box-sizing: border-box;
    ${({ height }) => height && `height: ${height}`};
    ${({ border }) => border && `border: ${border}`};
    border-radius: 4px;
    margin-bottom: 8px;
`;

export const TableBody = styled(Column)`
    width: 100%;
`;

interface RowWrapperProps extends Pick<CheckboxProps, 'checked'>, Pick<BorderProperties, 'borderBottom'> {}

export const RowWrapper = styled(Section)<RowWrapperProps>`
    height: 70px;
    ${({ borderBottom }) => borderBottom && `border-bottom: ${borderBottom}`};
    box-sizing: border-box;
    ${({ checked }) => checked && `background: ${blue2};`};
`;
