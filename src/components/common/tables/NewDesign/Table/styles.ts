import { CheckboxProps } from 'components/common/inputs/NewDesign/Checkbox';
import { Column, FlexGrow, Section } from 'components/grid/wrappers/FlexWrapper';
import { blue2, grey4, grey8 } from 'constants/styles';
import styled from 'styled-components';
import { ColumnAlignment } from 'types';

export const TableHeaderColumnSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: ${grey4};
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

export const TableHeader = styled(Section)`
    box-sizing: border-box;
    /* height: 48px; */
    /* border: 1px solid ${grey8}; */
    border-radius: 4px;
    margin-bottom: 8px;
`;

export const TableBody = styled(Column)`
    width: 100%;
`;

export const RowWrapper = styled(Section)<Pick<CheckboxProps, 'checked'>>`
    height: 70px;
    /* border-bottom: 1px solid #dedede; */
    box-sizing: border-box;
    ${({ checked }) => checked && `background: ${blue2};`};
`;
