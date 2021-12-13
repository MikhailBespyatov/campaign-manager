import copyButtonIcon from 'assets/img/copy_icon_grey.svg';
import { CopyButtonProps, CustomCopyButton } from 'components/common/buttons/CopyButton';
import { ImgButton } from 'components/common/buttons/ImgButton';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { blue, blue4 } from 'constants/styles';
import React from 'react';
import { BackgroundColor, Color, MaxSizes } from 'types';
import { buttonColor, copyButtonIconDiameter } from './consntants';
import { CopyableFieldSpan, CopyableFieldWrapper } from './styles';

interface CopyableFieldProps
    extends BackgroundColor,
        Color,
        Partial<Omit<CopyButtonProps, 'customCopyIcon'>>,
        MaxSizes {
    organizationPublicId?: string;
}

export const CopyableField = ({
    backgroundColor = blue4,
    color = blue,
    subject,
    success = 'Copied successfully',
    data,
    maxWidth
}: // data
CopyableFieldProps) => (
    <CopyableFieldWrapper backgroundColor={backgroundColor} maxWidth={maxWidth} padding="4px">
        <MarginWrapper margin="0 10px">
            <CopyableFieldSpan color={color} maxWidth={`calc(${maxWidth} - 100px)`}>
                {subject}
            </CopyableFieldSpan>
        </MarginWrapper>
        <CustomCopyButton data={data} subject={subject} success={success}>
            <ImgButton backgroundColor={buttonColor}>
                <CustomImg height={copyButtonIconDiameter} src={copyButtonIcon} width={copyButtonIconDiameter} />
            </ImgButton>
        </CustomCopyButton>
    </CopyableFieldWrapper>
);
