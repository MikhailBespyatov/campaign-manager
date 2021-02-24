import React from 'react';
import { NoopClick } from 'types';
import { Button } from './styles';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import addImageButton from 'assets/img/add_image_icon.svg';

export interface AddImageButtonProps extends NoopClick {}

export const AddImageButton = ({ onClick }: AddImageButtonProps) => (
    <Button onClick={onClick}>
        <CustomImg src={addImageButton} />
    </Button>
);
