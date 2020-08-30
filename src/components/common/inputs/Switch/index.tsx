import { Ball, Wrapper } from 'components/common/inputs/Switch/styles';
import React from 'react';
import { Active, NoopClick } from 'types';

interface Props extends Active, NoopClick {}

export const Switch = ({ active, onClick }: Props) => (
    <Wrapper active={active} onClick={onClick}>
        <Ball active={active} />
    </Wrapper>
);
