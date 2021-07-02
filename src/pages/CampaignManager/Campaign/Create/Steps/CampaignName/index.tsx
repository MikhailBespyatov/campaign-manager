import { TextInput } from 'components/common/inputs/NewDesign/TextInput';
import { useField } from 'effector-forms';
import { CampaignNameWrapper } from 'pages/CampaignManager/Campaign/Create/Steps/CampaignName/styles';
import React, { ChangeEvent, FC } from 'react';
import { forms } from 'stores/forms';
import { CreateCampaignStepsProps } from 'types';

export const CampaignName: FC<CreateCampaignStepsProps> = () => {
    const { value, onChange, errorText } = useField(forms.createCampaignForm.fields.campaignName);
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

    return (
        <CampaignNameWrapper>
            <TextInput
                labelUppercase
                required
                errorText={errorText()}
                label="Campaign Name"
                labelFontSize="11px"
                labelLineHeight="14px"
                name="campaignName"
                placeholder="Type Campaign Name here... "
                value={value}
                onChange={onChangeInput}
            />
        </CampaignNameWrapper>
    );
};
