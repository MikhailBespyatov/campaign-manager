import copyButtonIcon from 'assets/img/copy_icon_white.svg';
import { CopyButtonProps, CustomCopyButton } from 'components/common/buttons/CopyButton';
import { ImgButton } from 'components/common/buttons/ImgButton';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { blue, blue4, blue8 } from 'constants/styles';
import React from 'react';
import { BackgroundColor, Color } from 'types';
import { copyButtonIconDiameter } from './consntants';
import { CopyableFieldSpan, CopyableFieldWrapper } from './styles';

interface CopyableFieldProps extends BackgroundColor, Color, Partial<Omit<CopyButtonProps, 'customCopyIcon'>> {}

export const CopyableField = ({
    backgroundColor = blue4,
    color = blue,
    subject,
    success = 'Copied successfully'
}: CopyableFieldProps) => (
    <CopyableFieldWrapper backgroundColor={backgroundColor} padding="2px">
        <MarginWrapper margin="0 10px">
            <CopyableFieldSpan color={color}>{subject}</CopyableFieldSpan>
        </MarginWrapper>
        <CustomCopyButton subject={subject} success={success}>
            <ImgButton backgroundColor={blue8}>
                <CustomImg height={copyButtonIconDiameter} src={copyButtonIcon} width={copyButtonIconDiameter} />
            </ImgButton>
        </CustomCopyButton>
    </CopyableFieldWrapper>
);
