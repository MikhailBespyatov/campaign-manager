import { ReactComponent as TrashIcon } from 'assets/icons/trash-icon.svg';
import { trashButtonDiameter } from 'components/common/buttons/ClearInputButton/constants';
import { HoveredWrapper } from 'components/common/buttons/TrashButton/styles';
import React, { FC } from 'react';
import { ReactClick } from 'types/react';

export const TrashButton: FC<ReactClick<HTMLButtonElement>> = ({ ...props }) => (
    <HoveredWrapper height={trashButtonDiameter} width={trashButtonDiameter} {...props}>
        <TrashIcon />
    </HoveredWrapper>
);
