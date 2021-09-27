import copyIcon from 'assets/img/copy_button_icon.svg';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import React, { FC } from 'react';
import { message } from 'stores/alerts';
import { Success } from 'types/data';
import { triggerCopy } from 'utils/usefulFunctions';
import { CopyButtonImg } from './styles';

export interface CopyButtonProps extends Success {
    subject?: string | null;
    customCopyIcon?: string;
    data?: string;
}

export const CopyButton = ({ subject, success, customCopyIcon }: CopyButtonProps) => {
    //const disabled = subject === defaultId || !subject;

    const triggerButtonCopy = () => {
        triggerCopy(subject || '');
        message.success(success);
    };

    return <CopyButtonImg pointer src={customCopyIcon || copyIcon} onClick={triggerButtonCopy} />;
};

export const CustomCopyButton: FC<CopyButtonProps> = ({ subject, success, children, data }) => {
    const triggerButtonCopy = () => {
        triggerCopy(data || subject || '');
        message.success(success);
    };

    return <Row onClick={triggerButtonCopy}>{children}</Row>;
};
