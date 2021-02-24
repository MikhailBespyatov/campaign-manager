import React, { FC } from 'react';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { CreateCampaignStepsProps } from 'types';
import { WomInput } from 'components/common/inputs/NewDesign/WomInput';
import { useField } from 'effector-forms';
import { forms } from 'stores/forms';

export const Budget: FC<CreateCampaignStepsProps> = () => {
    const { value, onChange } = useField(forms.createCampaignForm.fields.budget);

    return (
        <ContentWrapper padding="24px 106px 30px">
            <WomInput label="Budget amount" value={value} onChange={onChange} />
        </ContentWrapper>
    );
};
