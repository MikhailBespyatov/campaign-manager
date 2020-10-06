import AddIcon from '@material-ui/icons/Add';
import { Button } from 'components/common/buttons/AddFieldButton/styles';
import { blue } from 'constants/styles';
import React from 'react';
import { NoopClick } from 'types';

interface Props extends NoopClick {}

export const AddFieldButton = (props: Props) => (
    <Button {...props}>
        <AddIcon style={{ color: blue }} />
    </Button>
);
