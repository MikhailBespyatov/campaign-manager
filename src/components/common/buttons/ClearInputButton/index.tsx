import clearInputIcon from 'assets/img/close_modal.svg';
import { clearInputButtonDiameter } from 'components/common/buttons/ClearInputButton/constants';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import React, { FC } from 'react';
import { ReactClick } from 'types/react';

export const ClearInputButton: FC<ReactClick<HTMLButtonElement>> = props => (
    <ClickableWrapper height={clearInputButtonDiameter} width={clearInputButtonDiameter} {...props}>
        <CustomImg alt="clear button" src={clearInputIcon} />
    </ClickableWrapper>
);
