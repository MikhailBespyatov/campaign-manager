import { itemActiveColor, spanFontSize, spanLineHeight } from 'components/common/inputs/RowRadio/constants';
import { StyledItem } from 'components/common/inputs/RowRadio/style';
import { Span } from 'components/common/TextComponents/Span';
import { Row } from 'components/common/wrappers/FlexWrapper';
import React from 'react';
import { Active } from 'types';
import { white } from '../../../../constants';

interface WrapperProps {
    active?: string;
    values?: string[];
    //data?: string[];
}

interface Props extends Active {
    value: string;
}

const Item = ({ active, value }: Props) => (
    <StyledItem active={active}>
        <Span color={active ? white : itemActiveColor} fontSize={spanFontSize} lineHeight={spanLineHeight}>
            {value}
        </Span>
    </StyledItem>
);

export const RowRadio = ({
    active = 'Combined',
    values = ['Combined', 'smt else', 'Separated']
}: //data = values
WrapperProps) => (
    <Row>
        {values.map(item => (
            <Item key={item} active={active === item} value={item} />
        ))}
    </Row>
);
