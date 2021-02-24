import { BackgroundColor, Color } from 'types';
import { blue, blue4, blue5 } from 'constants/styles';
import { CopyableFieldSpan, CopyableFieldWrapper } from './styles';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ImgButton } from 'components/common/buttons/ImgButton';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { copyButtonIconDiameter } from './consntants';
import copyButtonIcon from 'assets/img/copy_button_icon.svg';
import React from 'react';

interface CopyableFieldProps extends BackgroundColor, Color {
    copyData?: string;
}

export const CopyableField = ({ copyData, backgroundColor = blue4, color = blue }: CopyableFieldProps) => (
    <CopyableFieldWrapper backgroundColor={backgroundColor} padding="8px">
        <CopyableFieldSpan color={color}>{copyData}</CopyableFieldSpan>
        <MarginWrapper marginLeft="10px">
            <ImgButton backgroundColor={blue5}>
                <CustomImg height={copyButtonIconDiameter} src={copyButtonIcon} width={copyButtonIconDiameter} />
            </ImgButton>
        </MarginWrapper>
    </CopyableFieldWrapper>
);
