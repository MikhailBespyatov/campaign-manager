import React, { ChangeEvent, FC } from 'react';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { CreateCampaignStepsProps } from 'types';
import { TextInput } from 'components/common/inputs/NewDesign/TextInput';
import { useField } from 'effector-forms';
import { forms } from 'stores/forms';

export const CampaignName: FC<CreateCampaignStepsProps> = () => {
    const { value, onChange, errorText } = useField(forms.createCampaignForm.fields.campaignName);
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

    return (
        <ContentWrapper padding="24px 106px 38px">
            <TextInput
                required
                errorText={errorText()}
                label="Campaign Name"
                name="campaignName"
                value={value}
                onChange={onChangeInput}
            />
        </ContentWrapper>
    );
};
